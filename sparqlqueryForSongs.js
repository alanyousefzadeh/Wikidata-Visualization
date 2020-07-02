var promiseRes = ""
var res=""
async function songsreq (qid,type) {
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

    var endpointUrl = 'https://query.wikidata.org/sparql',
        sparqlQuery = " SELECT ?album ?albumLabel WHERE {\n" +
            "            {?album wdt:P31/wdt:P279* wd:Q7366 ;\n" +
            "              wdt:P175 wd:"+ qID + "}union {?album wdt:P31/wdt:P279* wd:Q134556;\n" +
            "              wdt:P175 wd:"+ qID + "}union {?album wdt:P31/wdt:P279* wd:Q7302866;\n" +
            "              wdt:P175 wd:"+ qID + "}\n" +
            "              SERVICE wikibase:label { bd:serviceParam wikibase:language \"en\" }\n" +
            "            }";

    var albumlist = [];
    promiseRes = await makeSPARQLQuery(endpointUrl, sparqlQuery, function (data) {
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
            parts = nested_data[i].album.split("/");
            id=parts[parts.length - 1];
            listItem= nested_data[i].albumLabel+"("+id+")";
            albumlist[i] = listItem;
        }
        const db = firebase.database();
        var str = albumlist;
        var usersRef =""
        if(type==="artists")
        {
            usersRef = db.ref('/artistsongs');

        }else if(type==="bands")
        {
            usersRef = db.ref('/bandssongs');

        }
        console.log(usersRef)
        usersRef.child(qid).once('value', function(snapshot) {

                var exists = (snapshot.val() !== null);

                if (exists) {
                    console.log(type+" already exists")
                } else {
                    console.log(type+" doesn't exist exists")
                    usersRef.child(qid).set({songs: str,});
                    console.log(type+" artist added")
                }
            }
        );

        return str;
    }).then(function (result) {
    res=result;
    return result
})
res = Promise.resolve(res)
console.log(res)
return res ;
}
