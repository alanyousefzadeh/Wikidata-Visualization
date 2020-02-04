jQuery(document).ready(function(){

    $(document).ready(function() {
        $("#submit").click(function(){

            function makeSPARQLQuery( endpointUrl, sparqlQuery, doneCallback ) {
                var settings = {
                    headers: { Accept : "application/sparql-results+json" },
                    data: { query: sparqlQuery }
                };
                return $.ajax( endpointUrl, settings ).then( doneCallback );

                /*return $.ajax( endpointUrl, settings ).then( (res => {
                    download(res, 'filename.json', 'text/json');


                }) );*/
            }
            var qid = $("#qid").val().trim();
            var limit =  $("#limit").val().trim();
            console.log(qid);
            console.log(limit);

            var endpointUrl = 'https://query.wikidata.org/sparql',
                sparqlQuery = "SELECT ?source ?sourceLabel ?type ?typeLabel \n" +
                    "                WHERE {\n" +
                    "                ?source wdt:P31/wdt:P279* wd:Q482994 ;\n" +
                    "                   wdt:P175 ?type.\n" +
                    "                  ?type ?label \""+qid+"\"@en .\n" +
                    "                 SERVICE wikibase:label {\n" +
                    "                      bd:serviceParam wikibase:language \"en\".\n" +
                    "                 }\n" +
                    "                 \n" +
                    "                }\n" +
                    "           LIMIT "+limit+"";


            /*makeSPARQLQuery( endpointUrl, sparqlQuery, function( data ) {
                    var i=0

                        var string = $('body').append($('<pre>').text( JSON.stringify( data, null, 2 ) ) );
                        //console.log(data.results.bindings.data)

                }
            );*/

            function download(strData, strFileName, strMimeType) {
                var D = document,
                    A = arguments,
                    a = D.createElement("a"),
                    d = A[0],
                    n = A[1],
                    t = A[2] || "text/plain";

                //build download link:
                a.href = "data:" + strMimeType + "charset=utf-8," + escape(strData);


                if (window.MSBlobBuilder) { // IE10
                    var bb = new MSBlobBuilder();
                    bb.append(strData);
                    return navigator.msSaveBlob(bb, strFileName);
                } /* end if(window.MSBlobBuilder) */



                if ('download' in a) { //FF20, CH19
                    a.setAttribute("download", n);
                    a.innerHTML = "downloading...";
                    D.body.appendChild(a);
                    setTimeout(function() {
                        var e = D.createEvent("MouseEvents");
                        e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                        a.dispatchEvent(e);
                        D.body.removeChild(a);
                    }, 66);
                    return true;
                }; /* end if('download' in a) */



                //do iframe dataURL download: (older W3)
                var f = D.createElement("iframe");
                D.body.appendChild(f);
                f.src = "data:" + (A[2] ? A[2] : "application/octet-stream") + (window.btoa ? ";base64" : "") + "," + (window.btoa ? window.btoa : escape)(strData);
                setTimeout(function() {
                    D.body.removeChild(f);
                }, 333);
                return true;
            }

            makeSPARQLQuery( endpointUrl, sparqlQuery, function( data ) {
                var i = 0
                var a = "[";
                limitnum = parseInt(limit);
                //console.log(limitnum)
                for (i = 0; i < limitnum; i++) {
                    var string = $('body').append($('<pre>').text(JSON.stringify(data.results.bindings[i].sourceLabel.value, undefined, 2)));

                    /*if(i==0)
                        {
                            a+=  "{\n" +
                                "      \"name\": \""+data.results.bindings[i].typeLabel.value+"\",\n" +
                                "      \"id\": "+i+" \n" + "},"+"\n"
                        }
                        else {
                            a +=
                                "    {\n" +
                                "      \"name\": \"" + data.results.bindings[i].source.value + "\",\n" +
                                "      \"id\": "+i+1+ " \n" + "}," + "\n"
                        }


                    }
                    a=a.concat("],\n ")
                    a=a.concat("\n\"links\": [\n")*/

                    for (i = 0; i < limitnum; i++) {
                        if (i != limitnum-1) {
                            a +=
                                "    {\n" +
                                "      \"source\":\"" + data.results.bindings[i].typeLabel.value + "\" ,\n" +
                                "      \"target\":\"" + data.results.bindings[i].sourceLabel.value +"\",\n" +
                                "      \"type\":\"" + data.results.bindings[i].source.value +"\"\n" +
                                "    },\n"
                        } else {
                            a +=
                                "    {\n" +
                                "      \"source\":\"" + data.results.bindings[i].typeLabel.value + "\" ,\n" +
                                "      \"target\":\"" + data.results.bindings[i].sourceLabel.value +"\",\n" +
                                "      \"type\":\"" + data.results.bindings[i].source.value +"\"\n" +
                                "    }\n"
                        }
                    }
                    a+="]"
                    console.log(a)
                }
                // http://blog.thomsonreuters.com/index.php/mobile-patent-suits-graphic-of-the-day/

                a=JSON.parse(a);
                //console.log(a)

                var nodes = {}
                var types ={}

                // Compute the distinct nodes from the links.
                a.forEach(function(link) {
                    link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
                    link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
                    //link.type = types[link.type] || (types[link.type] = {name: types.type});
                    //link.type=nodes[link.type]||(nodes[link.type] = {type: link.type});
                });

                var width = 960,
                    height = 500;

                var force = d3.layout.force()
                    .nodes(d3.values(nodes))

                    .links(a)
                    .size([width, height])
                    .linkDistance(180)
                    .charge(-300)
                    .on("tick", tick)
                    .start();

                var svg = d3.select("body").append("svg")
                    .attr("width", width)
                    .attr("height", height);

                var link = svg.selectAll(".link")
                    .data(force.links())
                    .enter().append("line")
                    .attr("class", "link");

                var node = svg.selectAll(".node")
                    .data(force.nodes())
                    .enter().append("g")
                    .attr("class", "node")
                    .on("mouseover", mouseover)
                    .on("mouseout", mouseout)
                    //.on("click", click)
                    .call(force.drag);




                function click (d){
                    let url = "http://" + d.type; //or whatever your URL field is called in the data
                    window.open(url, "_self");
                }

                node.append("circle")
                    .attr("r", 8)
                ;

                node.append("text")
                    .attr("x", 12)
                    .attr("dy", ".35em")
                    .text(function(d) { return d.name; });



                function tick() {
                    link
                        .attr("x1", function(d) { return d.source.x; })
                        .attr("y1", function(d) { return d.source.y; })
                        .attr("x2", function(d) { return d.target.x; })
                        .attr("y2", function(d) { return d.target.y; });


                    node
                        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });


                }


                function mouseover() {
                    d3.select(this).select("circle").transition()
                        .duration(750)
                        .attr("r", 16);
                }

                function mouseout() {
                    d3.select(this).select("circle").transition()
                        .duration(750)
                        .attr("r", 8);
                }


            });


            /* makeSPARQLQuery( endpointUrl, sparqlQuery, function( data ) {
                     var i=0
                     for(i=0;i<10;i++) {
                         var string = $('body').append($('<pre>').text(JSON.stringify(data.results.bindings[i].person.value, undefined, 2)));
                         //console.log(data.results.bindings.data)
                     }
                 }
             );*/

        });

    });
});
