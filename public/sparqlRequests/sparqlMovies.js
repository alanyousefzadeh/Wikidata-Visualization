var promiseRes = ""
var res=""
async function moviesReq (qid,type) {
    function makeSPARQLQuery(endpointUrl, sparqlQuery, doneCallback) {
        var settings = {
            headers: {Accept: "text/csv"},
            data: {query: sparqlQuery}
        };
        return $.ajax(endpointUrl, settings).then(doneCallback);
    }

    var regExp = /\(([^)]+)\)/;
    var identifier = regExp.exec(qid);
    var qID = identifier[1]

        if(type==="actor")
    {
        var endpointUrl = 'https://query.wikidata.org/sparql',
        sparqlQuery = "SELECT ?film ?filmLabel WHERE {\n" +
            "            ?film wdt:P31/wdt:P279* wd:Q11424 ;\n" +
            "               wdt:P161 wd:" + qID + ". \n" +
            "              SERVICE wikibase:label { bd:serviceParam wikibase:language \"en\" }\n" +
            "       }\n" +
            "";
    }else if (type==="director")
    {
        var endpointUrl = 'https://query.wikidata.org/sparql',
            sparqlQuery = "SELECT ?film ?filmLabel WHERE {\n" +
                "            ?film wdt:P31/wdt:P279*wd:Q11424 ;\n" +
                "               wdt:P57 wd:" + qID + ". \n" +
                "              SERVICE wikibase:label { bd:serviceParam wikibase:language \"en\" }\n" +
                "       }\n" +
                "";
    }

    var movielist = [];
    promiseRes =  makeSPARQLQuery(endpointUrl, sparqlQuery, function (data) {
        //    var name = qid.substring(0, qid.indexOf("("));

        var d = d3.csvParse(data);

        var nested_data = d3.nest()
            //.key(function(d) { return "entity"; })
            .entries(d);

        nested_data = JSON.stringify(nested_data, null, 2).replace(/"value":/g, '"name":')

        nested_data = JSON.parse(nested_data)

        nested_data = JSON.stringify(nested_data, null, 2).replace(/"key":/g, '"name":')

        nested_data = JSON.parse(nested_data)

        nested_data = JSON.stringify(nested_data, null, 2).replace(/"values":/g, '"children":')

        nested_data = nested_data.replace("\"data\":", "\"name\":\"" + name + "\",\n\"children\":");

        nested_data = JSON.parse(nested_data)

        nested_data = JSON.stringify(nested_data, null, 2).replace(/"data":/g, '"children":')

        nested_data = JSON.parse(nested_data)

        console.log(nested_data);

        var listItem ="";
        var id="";
        var parts="";

        var id = parts[parts.length - 1]; // Or parts.pop();
        for (var i = 0; i < nested_data.length; i++) {
            parts = nested_data[i].film.split("/");
            id=parts[parts.length - 1];
            listItem= nested_data[i].filmLabel+"("+id+")";
            movielist[i] = listItem;
        }

        var currentDate=new Date();
        var month = currentDate.getMonth()+1
        console.log(month)
        const db = firebase.database();
        var str = movielist;

        var usersRef =""
        if(type==="actor")
        {
            usersRef = db.ref('/actormovies');

        }else if(type==="director")
        {
            usersRef = db.ref('/directormovies');

        }

        console.log(usersRef)
        usersRef.child(qid).once('value', function(snapshot) {


                    console.log(type+" doesn't exist exists")
                    usersRef.child(qid).set({movies: str,monthDate:month});
                    console.log(type+" artist added")

            }
        );
        return str;
    })// ).then(function (result) {
    //     res=result;
    //     return result
    // })
    // res = Promise.resolve(res)
    // console.log(res)
    // return res;
    return promiseRes
}
