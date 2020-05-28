
function makeSPARQLQuery( endpointUrl, sparqlQuery, doneCallback ) {
    var settings = {
        headers: { Accept: "text/csv" },
        data: { query: sparqlQuery }
    };
    return $.ajax( endpointUrl, settings ).then( doneCallback );
}

var endpointUrl = 'https://query.wikidata.org/sparql',
    sparqlQuery = "SELECT ?property ?propertyLabel ?value ?valueLabel ?article ?articleLable{\n" +
        "  VALUES (?identifier) {(wd:Q392)}\n" +
        "  \n" +
        "  ?identifier ?p ?statement .\n" +
        "  ?statement ?ps ?value .\n" +
        "  \n" +
        "  ?property wikibase:claim ?p.\n" +
        "  ?property wikibase:statementProperty ?ps.\n" +
        "  \n" +
        "  OPTIONAL {\n" +
        "  ?identifier ?p ?statement .\n" +
        "  ?statement ?ps ?value .\n" +
        "  ?article schema:about ?value.\n" +
        "  ?article schema:inLanguage \"en\" .\n" +
        "  ?article schema:isPartOf <https://en.wikipedia.org/>.\n" +
        "  }\n" +
        "  \n" +
        "  SERVICE wikibase:label { bd:serviceParam wikibase:language \"en\" }\n" +
        "} ORDER BY ?property ?statement ?value\n" +
        "";


function req(artistname) {
    makeSPARQLQuery(endpointUrl, sparqlQuery, function (data) {

            console.log(data);

            var d = d3.csvParse(data);
            console.log(d)

            nested_data = d3.nest()
                //.key(function(d) { return "entity"; })
                .key(function (d) {
                    return d.propertyLabel;
                })
                .key(function (d) {
                    return d.valueLabel;
                })
                .entries(d);

            nested_data = d3.hierarchy(nested_data, d.valueLabel)

            nested_data = JSON.stringify(nested_data, null, 2).replace(/"value":/g, '"name":')

            nested_data = JSON.parse(nested_data)

            nested_data = JSON.stringify(nested_data, null, 2).replace(/"key":/g, '"name":')

            nested_data = JSON.parse(nested_data)

            nested_data = JSON.stringify(nested_data, null, 2).replace(/"values":/g, '"children":')

            nested_data = nested_data.replace("\"data\":", "\"name\":\"entity\",\n\"children\":");

            nested_data = JSON.parse(nested_data)

            nested_data = JSON.stringify(nested_data, null, 2).replace(/"data":/g, '"children":')

            nested_data = JSON.parse(nested_data)

        //nested_data= JSON.stringify(nested_data, null, 2)

        addbutton(nested_data);

        console.log("after")
            return nested_data;

        }
    );
}