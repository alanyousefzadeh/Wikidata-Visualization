var songslist ="";
var promiseRes = ""
var res=""
async function albumSongsReq (qid) {
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
        sparqlQuery = "SELECT ?album ?albumLabel WHERE {\n" +
            "                        {?album wdt:P31/wdt:P279* wd:Q7366 ;\n" +
            "                           wdt:P361 wd:" + qID + "} union {?album wdt:P31/wdt:P279* wd:Q134556;\n" +
            "                           wdt:P361 wd:" + qID + "} union {?album wdt:P31/wdt:P279* wd:Q207628;\n" +
            "                           wdt:P361 wd:" + qID + "}\n" +
            "            \n" +
            "                          SERVICE wikibase:label { bd:serviceParam wikibase:language \"en\" }\n" +
            "                       }\n" +
            "          ";




    //wd:" + qID + "
    promiseRes =  makeSPARQLQuery(endpointUrl, sparqlQuery, function (data) {
        //    var name = qid.substring(0, qid.indexOf("("));

        var d = d3.csvParse(data);

        var nested_data = d3.nest()
            .key(function (d) {
                return d.albumLabel;
            })
            //.key(function(d) { return "entity"; })
            .entries(d);

        nested_data = d3.hierarchy(nested_data, d.albumLabel)

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

        var listItem = "";
        var id = "";
        var parts = "";

        var id = parts[parts.length - 1]; // Or parts.pop();
        for (var i = 0; i < nested_data.length; i++) {
            parts = nested_data[i].album.split("/");
            id = parts[parts.length - 1];
            listItem = nested_data[i].songslist + "(" + id + ")";
            songslist[i] = listItem;
        }
        console.log(songslist);
        return nested_data;
    })
    // }).then(function (result) {
    //     res=result;
    //     return result
    // })
    // res = Promise.resolve(res)
    // return res ;
    return promiseRes;
}