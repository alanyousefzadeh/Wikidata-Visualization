function buildGraph(info) {
  info=JSON.parse(info)
  am4core.useTheme(am4themes_animated);
  var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree, am4charts.XYChart);
//var chart = am4core.create("zoom",am4charts.XYChart);
  chart.legend = new am4charts.Legend();
  chart.exporting.menu = new am4core.ExportMenu();
  chart.exporting.menu.container = document.getElementById("tools");
  chart.legend.parent = chart.chartContainer;
  chart.legend.position = "left"
  chart.legend.scrollable = true;
  chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;
  chart.data.scrollable = true;
  chart.responsive.enabled = true;
  chart.resizable = true;
  var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
  networkSeries.scrollbarX = new am4charts.XYChartScrollbar();
  networkSeries.scrollbarX.series.push(networkSeries);

  //networkSeries.data = [info];
 // console.log(networkSeries.data)

  networkSeries.data = [
    {
      "name": "Bob Dylan",
      "children": [
        {
          "name": "native language",
          "children": [
            {
              "name": "English",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P103",
                  "propertyLabel": "native language",
                  "name": "http://www.wikidata.org/entity/Q1860",
                  "valueLabel": "English",
                  "article": "https://en.wikipedia.org/wiki/English_language",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "occupation",
          "children": [
            {
              "name": "actor",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P106",
                  "propertyLabel": "occupation",
                  "name": "http://www.wikidata.org/entity/Q33999",
                  "valueLabel": "actor",
                  "article": "https://en.wikipedia.org/wiki/Actor",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "radio personality",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P106",
                  "propertyLabel": "occupation",
                  "name": "http://www.wikidata.org/entity/Q2722764",
                  "valueLabel": "radio personality",
                  "article": "https://en.wikipedia.org/wiki/Radio_personality",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "designer",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P106",
                  "propertyLabel": "occupation",
                  "name": "http://www.wikidata.org/entity/Q5322166",
                  "valueLabel": "designer",
                  "article": "https://en.wikipedia.org/wiki/Designer",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "record producer",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P106",
                  "propertyLabel": "occupation",
                  "name": "http://www.wikidata.org/entity/Q183945",
                  "valueLabel": "record producer",
                  "article": "https://en.wikipedia.org/wiki/Record_producer",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "guitarist",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P106",
                  "propertyLabel": "occupation",
                  "name": "http://www.wikidata.org/entity/Q855091",
                  "valueLabel": "guitarist",
                  "article": "https://en.wikipedia.org/wiki/Guitarist",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "disc jockey",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P106",
                  "propertyLabel": "occupation",
                  "name": "http://www.wikidata.org/entity/Q130857",
                  "valueLabel": "disc jockey",
                  "article": "https://en.wikipedia.org/wiki/Disc_jockey",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "singer",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P106",
                  "propertyLabel": "occupation",
                  "name": "http://www.wikidata.org/entity/Q177220",
                  "valueLabel": "singer",
                  "article": "https://en.wikipedia.org/wiki/Singer",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "painter",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P106",
                  "propertyLabel": "occupation",
                  "name": "http://www.wikidata.org/entity/Q1028181",
                  "valueLabel": "painter",
                  "article": "https://en.wikipedia.org/wiki/Painter",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "autobiographer",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P106",
                  "propertyLabel": "occupation",
                  "name": "http://www.wikidata.org/entity/Q18814623",
                  "valueLabel": "autobiographer",
                  "article": "",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "composer",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P106",
                  "propertyLabel": "occupation",
                  "name": "http://www.wikidata.org/entity/Q36834",
                  "valueLabel": "composer",
                  "article": "https://en.wikipedia.org/wiki/Composer",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "lyricist",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P106",
                  "propertyLabel": "occupation",
                  "name": "http://www.wikidata.org/entity/Q822146",
                  "valueLabel": "lyricist",
                  "article": "https://en.wikipedia.org/wiki/Lyricist",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "poet",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P106",
                  "propertyLabel": "occupation",
                  "name": "http://www.wikidata.org/entity/Q49757",
                  "valueLabel": "poet",
                  "article": "https://en.wikipedia.org/wiki/Poet",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "screenwriter",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P106",
                  "propertyLabel": "occupation",
                  "name": "http://www.wikidata.org/entity/Q28389",
                  "valueLabel": "screenwriter",
                  "article": "https://en.wikipedia.org/wiki/Screenwriter",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "film director",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P106",
                  "propertyLabel": "occupation",
                  "name": "http://www.wikidata.org/entity/Q2526255",
                  "valueLabel": "film director",
                  "article": "https://en.wikipedia.org/wiki/Film_director",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "songwriter",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P106",
                  "propertyLabel": "occupation",
                  "name": "http://www.wikidata.org/entity/Q753110",
                  "valueLabel": "songwriter",
                  "article": "https://en.wikipedia.org/wiki/Songwriter",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "film actor",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P106",
                  "propertyLabel": "occupation",
                  "name": "http://www.wikidata.org/entity/Q10800557",
                  "valueLabel": "film actor",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "genre",
          "children": [
            {
              "name": "country music",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P136",
                  "propertyLabel": "genre",
                  "name": "http://www.wikidata.org/entity/Q83440",
                  "valueLabel": "country music",
                  "article": "https://en.wikipedia.org/wiki/Country_music",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "American folk music",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P136",
                  "propertyLabel": "genre",
                  "name": "http://www.wikidata.org/entity/Q1541229",
                  "valueLabel": "American folk music",
                  "article": "https://en.wikipedia.org/wiki/American_folk_music",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "blues",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P136",
                  "propertyLabel": "genre",
                  "name": "http://www.wikidata.org/entity/Q9759",
                  "valueLabel": "blues",
                  "article": "https://en.wikipedia.org/wiki/Blues",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "rock music",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P136",
                  "propertyLabel": "genre",
                  "name": "http://www.wikidata.org/entity/Q11399",
                  "valueLabel": "rock music",
                  "article": "https://en.wikipedia.org/wiki/Rock_music",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "country rock",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P136",
                  "propertyLabel": "genre",
                  "name": "http://www.wikidata.org/entity/Q613408",
                  "valueLabel": "country rock",
                  "article": "https://en.wikipedia.org/wiki/Country_rock",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "folk pop",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P136",
                  "propertyLabel": "genre",
                  "name": "http://www.wikidata.org/entity/Q28100965",
                  "valueLabel": "folk pop",
                  "article": "",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "pop-folk",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P136",
                  "propertyLabel": "genre",
                  "name": "http://www.wikidata.org/entity/Q11700058",
                  "valueLabel": "pop-folk",
                  "article": "https://en.wikipedia.org/wiki/Folk-pop",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "award received",
          "children": [
            {
              "name": "Grammy Award for Best Male Rock Vocal Performance",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q953746",
                  "valueLabel": "Grammy Award for Best Male Rock Vocal Performance",
                  "article": "https://en.wikipedia.org/wiki/Grammy_Award_for_Best_Male_Rock_Vocal_Performance",
                  "articleLable": ""
                },
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q953746",
                  "valueLabel": "Grammy Award for Best Male Rock Vocal Performance",
                  "article": "https://en.wikipedia.org/wiki/Grammy_Award_for_Best_Male_Rock_Vocal_Performance",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Grammy Award for Best Americana Album",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q11789079",
                  "valueLabel": "Grammy Award for Best Americana Album",
                  "article": "https://en.wikipedia.org/wiki/Grammy_Award_for_Best_Americana_Album",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Grammy Lifetime Achievement Award",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q935843",
                  "valueLabel": "Grammy Lifetime Achievement Award",
                  "article": "https://en.wikipedia.org/wiki/Grammy_Lifetime_Achievement_Award",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Grammy Award for Album of the Year",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q904528",
                  "valueLabel": "Grammy Award for Album of the Year",
                  "article": "https://en.wikipedia.org/wiki/Grammy_Award_for_Album_of_the_Year",
                  "articleLable": ""
                },
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q904528",
                  "valueLabel": "Grammy Award for Album of the Year",
                  "article": "https://en.wikipedia.org/wiki/Grammy_Award_for_Album_of_the_Year",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Princess of Asturias Award for the Arts",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q3319305",
                  "valueLabel": "Princess of Asturias Award for the Arts",
                  "article": "",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Nobel Prize in Literature",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q37922",
                  "valueLabel": "Nobel Prize in Literature",
                  "article": "https://en.wikipedia.org/wiki/Nobel_Prize_in_Literature",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Polar Music Prize",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q754841",
                  "valueLabel": "Polar Music Prize",
                  "article": "https://en.wikipedia.org/wiki/Polar_Music_Prize",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "National Medal of Arts",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q1789030",
                  "valueLabel": "National Medal of Arts",
                  "article": "https://en.wikipedia.org/wiki/National_Medal_of_Arts",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "honorary doctor of the University of St Andrews",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q40683907",
                  "valueLabel": "honorary doctor of the University of St Andrews",
                  "article": "",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Grammy Award for Best Traditional Folk Album",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q5593894",
                  "valueLabel": "Grammy Award for Best Traditional Folk Album",
                  "article": "https://en.wikipedia.org/wiki/Grammy_Award_for_Best_Traditional_Folk_Album",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Academy Award for Best Original Song",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q112243",
                  "valueLabel": "Academy Award for Best Original Song",
                  "article": "https://en.wikipedia.org/wiki/Academy_Award_for_Best_Original_Song",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Commandeur des Arts et des Lettres",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q13452531",
                  "valueLabel": "Commandeur des Arts et des Lettres",
                  "article": "",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Kennedy Center Honors",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q1738793",
                  "valueLabel": "Kennedy Center Honors",
                  "article": "https://en.wikipedia.org/wiki/Kennedy_Center_Honors",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Knight of the Legion of Honour",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q10855271",
                  "valueLabel": "Knight of the Legion of Honour",
                  "article": "",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Presidential Medal of Freedom",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q17144",
                  "valueLabel": "Presidential Medal of Freedom",
                  "article": "https://en.wikipedia.org/wiki/Presidential_Medal_of_Freedom",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Grammy Award for Best Solo Rock Vocal Performance",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q1542199",
                  "valueLabel": "Grammy Award for Best Solo Rock Vocal Performance",
                  "article": "https://en.wikipedia.org/wiki/Grammy_Award_for_Best_Solo_Rock_Vocal_Performance",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Honorary doctor of the Princeton University",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q42309226",
                  "valueLabel": "Honorary doctor of the Princeton University",
                  "article": "",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Grammy Award for Best Contemporary Folk Album",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q5593772",
                  "valueLabel": "Grammy Award for Best Contemporary Folk Album",
                  "article": "https://en.wikipedia.org/wiki/Grammy_Award_for_Best_Contemporary_Folk_Album",
                  "articleLable": ""
                },
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q5593772",
                  "valueLabel": "Grammy Award for Best Contemporary Folk Album",
                  "article": "https://en.wikipedia.org/wiki/Grammy_Award_for_Best_Contemporary_Folk_Album",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Rock and Roll Hall of Fame",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q179191",
                  "valueLabel": "Rock and Roll Hall of Fame",
                  "article": "https://en.wikipedia.org/wiki/Rock_and_Roll_Hall_of_Fame",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Grammy Award for Best Rock Performance by a Duo or Group with Vocal",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P166",
                  "propertyLabel": "award received",
                  "name": "http://www.wikidata.org/entity/Q1542205",
                  "valueLabel": "Grammy Award for Best Rock Performance by a Duo or Group with Vocal",
                  "article": "https://en.wikipedia.org/wiki/Grammy_Award_for_Best_Rock_Performance_by_a_Duo_or_Group_with_Vocal",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "image",
          "children": [
            {
              "name": "http://commons.wikimedia.org/wiki/Special:FilePath/Joan%20Baez%20Bob%20Dylan%20crop.jpg",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P18",
                  "propertyLabel": "image",
                  "name": "http://commons.wikimedia.org/wiki/Special:FilePath/Joan%20Baez%20Bob%20Dylan%20crop.jpg",
                  "valueLabel": "http://commons.wikimedia.org/wiki/Special:FilePath/Joan%20Baez%20Bob%20Dylan%20crop.jpg",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "place of birth",
          "children": [
            {
              "name": "Duluth",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P19",
                  "propertyLabel": "place of birth",
                  "name": "http://www.wikidata.org/entity/Q485708",
                  "valueLabel": "Duluth",
                  "article": "https://en.wikipedia.org/wiki/Duluth,_Minnesota",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "sex or gender",
          "children": [
            {
              "name": "male",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P21",
                  "propertyLabel": "sex or gender",
                  "name": "http://www.wikidata.org/entity/Q6581097",
                  "valueLabel": "male",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "International Standard Name Identifier",
          "children": [
            {
              "name": "0000 0001 2147 9733",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P213",
                  "propertyLabel": "International Standard Name Identifier",
                  "name": "0000 0001 2147 9733",
                  "valueLabel": "0000 0001 2147 9733",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "VIAF ID",
          "children": [
            {
              "name": "111894442",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P214",
                  "propertyLabel": "VIAF ID",
                  "name": "111894442",
                  "valueLabel": "111894442",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "GND ID",
          "children": [
            {
              "name": "118528408",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P227",
                  "propertyLabel": "GND ID",
                  "name": "118528408",
                  "valueLabel": "118528408",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "Library of Congress authority ID",
          "children": [
            {
              "name": "n50030190",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P244",
                  "propertyLabel": "Library of Congress authority ID",
                  "name": "n50030190",
                  "valueLabel": "n50030190",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "ULAN ID",
          "children": [
            {
              "name": "500341966",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P245",
                  "propertyLabel": "ULAN ID",
                  "name": "500341966",
                  "valueLabel": "500341966",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "spouse",
          "children": [
            {
              "name": "Sara Dylan",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P26",
                  "propertyLabel": "spouse",
                  "name": "http://www.wikidata.org/entity/Q457433",
                  "valueLabel": "Sara Dylan",
                  "article": "https://en.wikipedia.org/wiki/Sara_Dylan",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Carolyn Dennis",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P26",
                  "propertyLabel": "spouse",
                  "name": "http://www.wikidata.org/entity/Q5045345",
                  "valueLabel": "Carolyn Dennis",
                  "article": "https://en.wikipedia.org/wiki/Carolyn_Dennis",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "country of citizenship",
          "children": [
            {
              "name": "United States of America",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P27",
                  "propertyLabel": "country of citizenship",
                  "name": "http://www.wikidata.org/entity/Q30",
                  "valueLabel": "United States of America",
                  "article": "https://en.wikipedia.org/wiki/United_States",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "instance of",
          "children": [
            {
              "name": "human",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P31",
                  "propertyLabel": "instance of",
                  "name": "http://www.wikidata.org/entity/Q5",
                  "valueLabel": "human",
                  "article": "https://en.wikipedia.org/wiki/Human",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "child",
          "children": [
            {
              "name": "Jesse Dylan",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P40",
                  "propertyLabel": "child",
                  "name": "http://www.wikidata.org/entity/Q766818",
                  "valueLabel": "Jesse Dylan",
                  "article": "https://en.wikipedia.org/wiki/Jesse_Dylan",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Jakob Dylan",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P40",
                  "propertyLabel": "child",
                  "name": "http://www.wikidata.org/entity/Q555426",
                  "valueLabel": "Jakob Dylan",
                  "article": "https://en.wikipedia.org/wiki/Jakob_Dylan",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "educated at",
          "children": [
            {
              "name": "University of Minnesota",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P69",
                  "propertyLabel": "educated at",
                  "name": "http://www.wikidata.org/entity/Q238101",
                  "valueLabel": "University of Minnesota",
                  "article": "https://en.wikipedia.org/wiki/University_of_Minnesota",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "Portuguese National Library ID",
          "children": [
            {
              "name": "1270067",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1005",
                  "propertyLabel": "Portuguese National Library ID",
                  "name": "1270067",
                  "valueLabel": "1270067",
                  "article": "",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "1435358",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1005",
                  "propertyLabel": "Portuguese National Library ID",
                  "name": "1435358",
                  "valueLabel": "1435358",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "Nationale Thesaurus voor Auteurs ID",
          "children": [
            {
              "name": "070700710",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1006",
                  "propertyLabel": "Nationale Thesaurus voor Auteurs ID",
                  "name": "070700710",
                  "valueLabel": "070700710",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "NORAF ID",
          "children": [
            {
              "name": "90123409",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1015",
                  "propertyLabel": "NORAF ID",
                  "name": "90123409",
                  "valueLabel": "90123409",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "topic's main Wikimedia portal",
          "children": [
            {
              "name": "Portal:Bob Dylan",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1151",
                  "propertyLabel": "topic's main Wikimedia portal",
                  "name": "http://www.wikidata.org/entity/Q14615119",
                  "valueLabel": "Portal:Bob Dylan",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "NUKAT ID",
          "children": [
            {
              "name": "n97087474",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1207",
                  "propertyLabel": "NUKAT ID",
                  "name": "n97087474",
                  "valueLabel": "n97087474",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "Internet Broadway Database person ID",
          "children": [
            {
              "name": "84040",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1220",
                  "propertyLabel": "Internet Broadway Database person ID",
                  "name": "84040",
                  "valueLabel": "84040",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "U.S. National Archives Identifier",
          "children": [
            {
              "name": "10580323",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1225",
                  "propertyLabel": "U.S. National Archives Identifier",
                  "name": "10580323",
                  "valueLabel": "10580323",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "Rotten Tomatoes ID",
          "children": [
            {
              "name": "celebrity/bob_dylan",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1258",
                  "propertyLabel": "Rotten Tomatoes ID",
                  "name": "celebrity/bob_dylan",
                  "valueLabel": "celebrity/bob_dylan",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "NNDB people ID",
          "children": [
            {
              "name": "320/000022254",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1263",
                  "propertyLabel": "NNDB people ID",
                  "name": "320/000022254",
                  "valueLabel": "320/000022254",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "AlloCiné person ID",
          "children": [
            {
              "name": "13055",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1266",
                  "propertyLabel": "AlloCiné person ID",
                  "name": "13055",
                  "valueLabel": "13055",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "CANTIC ID",
          "children": [
            {
              "name": "a16833132",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1273",
                  "propertyLabel": "CANTIC ID",
                  "name": "a16833132",
                  "valueLabel": "a16833132",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "CONOR ID",
          "children": [
            {
              "name": "12020579",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1280",
                  "propertyLabel": "CONOR ID",
                  "name": "12020579",
                  "valueLabel": "12020579",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "Munzinger person ID",
          "children": [
            {
              "name": "00000017836",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1284",
                  "propertyLabel": "Munzinger person ID",
                  "name": "00000017836",
                  "valueLabel": "00000017836",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "Munzinger Pop ID",
          "children": [
            {
              "name": "02000000190",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1286",
                  "propertyLabel": "Munzinger Pop ID",
                  "name": "02000000190",
                  "valueLabel": "02000000190",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "Gran Enciclopèdia Catalana ID",
          "children": [
            {
              "name": "0023324",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1296",
                  "propertyLabel": "Gran Enciclopèdia Catalana ID",
                  "name": "0023324",
                  "valueLabel": "0023324",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "instrument",
          "children": [
            {
              "name": "piano",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1303",
                  "propertyLabel": "instrument",
                  "name": "http://www.wikidata.org/entity/Q5994",
                  "valueLabel": "piano",
                  "article": "https://en.wikipedia.org/wiki/Piano",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "harmonica",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1303",
                  "propertyLabel": "instrument",
                  "name": "http://www.wikidata.org/entity/Q51290",
                  "valueLabel": "harmonica",
                  "article": "https://en.wikipedia.org/wiki/Harmonica",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "guitar",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1303",
                  "propertyLabel": "instrument",
                  "name": "http://www.wikidata.org/entity/Q6607",
                  "valueLabel": "guitar",
                  "article": "https://en.wikipedia.org/wiki/Guitar",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "NLA Trove ID",
          "children": [
            {
              "name": "812744",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1315",
                  "propertyLabel": "NLA Trove ID",
                  "name": "812744",
                  "valueLabel": "812744",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "described by source",
          "children": [
            {
              "name": "UbuWeb",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1343",
                  "propertyLabel": "described by source",
                  "name": "http://www.wikidata.org/entity/Q1145552",
                  "valueLabel": "UbuWeb",
                  "article": "https://en.wikipedia.org/wiki/UbuWeb",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Obalky knih.cz",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1343",
                  "propertyLabel": "described by source",
                  "name": "http://www.wikidata.org/entity/Q67311526",
                  "valueLabel": "Obalky knih.cz",
                  "article": "",
                  "articleLable": ""
                }
              ]
            }
          ]
        },
        {
          "name": "participant of",
          "children": [
            {
              "name": "Mariposa Folk Festival 1972",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1344",
                  "propertyLabel": "participant of",
                  "name": "http://www.wikidata.org/entity/Q54370683",
                  "valueLabel": "Mariposa Folk Festival 1972",
                  "article": "",
                  "articleLable": ""
                }
              ]
            },
            {
              "name": "Live Aid",
              "children": [
                {
                  "property": "http://www.wikidata.org/entity/P1344",
                  "propertyLabel": "participant of",
                  "name": "http://www.wikidata.org/entity/Q193740",
                  "valueLabel": "Live Aid",
                  "article": "https://en.wikipedia.org/wiki/Live_Aid",
                  "articleLable": ""
                }
              ]
            }
          ]
        }
      ],
      "height": 0,
      "depth": 0,
      "parent": null
    }];


  /*var zoomInButton = buttonContainer.createChild(am4core.Button);
  zoomInButton.label.text = "+";
  zoomInButton.events.on("hit", function(ev) {
    var diff = dateAxis.maxZoomed - dateAxis.minZoomed;
    var delta = diff * 0.2;
    dateAxis.zoomToDates(new Date(dateAxis.minZoomed + delta), new Date(dateAxis.maxZoomed - delta));
  });

  var zoomOutButton = buttonContainer.createChild(am4core.Button);
  zoomOutButton.label.text = "-";
  zoomOutButton.events.on("hit", function(ev) {
    var diff = dateAxis.maxZoomed - dateAxis.minZoomed;
    var delta = diff * 0.2;
    dateAxis.zoomToDates(new Date(dateAxis.minZoomed - delta), new Date(dateAxis.maxZoomed + delta));
  });*/

  /*let icon = networkSeries.nodes.template.createChild(am4core.Triangle);
  //icon.href = "triangle-icon.png";
  icon.horizontalCenter = "middle";
  icon.verticalCenter = "middle";
  icon.width = 40;
  icon.height = 40;

  networkSeries.nodes.template.circle.disabled = true;
  networkSeries.nodes.template.outerCircle.disabled = true;*/
  networkSeries.dataFields.linkWith = "linkWith";
  networkSeries.dataFields.name = "name";
  networkSeries.dataFields.id = "name";
//networkSeries.dataFields.value = "value";
//networkSeries.dataFields.value = "10";
  networkSeries.dataFields.children = "children";
  networkSeries.nodes.template.tooltipText = "{name}";
  networkSeries.nodes.template.fillOpacity = 1;
//networkSeries.nodes.template.dataFields.url = "name";
  networkSeries.nodes.template.label.text = "{name}"
//networkSeries.dataFields.collapsed = "true";
//networkSeries.links.template.distance = 2;
  networkSeries.manyBodyStrength = -30;
//networkSeries.links.template.distance = 1;
//networkSeries.links.template.strength = 1;
  networkSeries.nodes.template.expandAll = false;
  networkSeries.fontSize = 8;
  networkSeries.currentLevel = 1;
  networkSeries.maxLevels = 1;
  networkSeries.maxRadius = 50;
  networkSeries.minRadius = 25;
  networkSeries.nodes.template.label.hideOversized = true;
  networkSeries.nodes.template.label.truncate = true;
  networkSeries.dataFields.collapsed = "off";
  /*networkSeries.nodes.template.adapter.add("fill", function (fill, target) {
    return fill.lighten(target.dataItem.level * 0.25);
  });*/


  var hoverState = networkSeries.links.template.states.create("hover");
  hoverState.properties.strokeWidth = 3;
  hoverState.properties.strokeOpacity = 1;

  networkSeries.nodes.template.events.on("over", function (event) {
    event.target.dataItem.childLinks.each(function (link) {
      link.isHover = true;
    })
    if (event.target.dataItem.parentLink) {
      event.target.dataItem.parentLink.isHover = true;
    }

  })

  networkSeries.nodes.template.events.on("out", function (event) {
    event.target.dataItem.childLinks.each(function (link) {
      link.isHover = false;
    })
    if (event.target.dataItem.parentLink) {
      event.target.dataItem.parentLink.isHover = false;
    }
  })

}
/*networkSeries.nodes.template.events.on("hit", function(ev) {
  var targetNode = ev.target;
  if (targetNode.isActive) {
    networkSeries.nodes.each(function(node) {
      if (targetNode !== node && node.isActive && targetNode.dataItem.level == node.dataItem.level) {
        node.isActive = false;
      }
    });
  }
});*/

/*networkSeries.nodes.template.adapter.add("tooltipText", function(text, target) {
  if (target.dataItem) {
    switch(target.dataItem.level) {
      case 0:
        return "#1: {name}";
      case 1:
        return "#2: {parent.name} > {name} ({value})";
      case 2:
        return "#3: {parent.parent.name} > {parent.name} > {name} ({value})";
    }
  }
  return text;
});


/*networkSeries.dataFields.value = "value";
networkSeries.dataFields.name = "name";
networkSeries.dataFields.children = "children";
networkSeries.nodes.template.tooltipText = "{name}:{value}";
networkSeries.nodes.template.fillOpacity = 1;

networkSeries.nodes.template.label.text = "{name}"
networkSeries.fontSize = 10;

networkSeries.links.template.strokeWidth = 1;

var hoverState = networkSeries.links.template.states.create("hover");
hoverState.properties.strokeWidth = 3;
hoverState.properties.strokeOpacity = 1;

networkSeries.nodes.template.events.on("over", function(event) {
  event.target.dataItem.childLinks.each(function(link) {
    link.isHover = true;
  })
  if (event.target.dataItem.parentLink) {
    event.target.dataItem.parentLink.isHover = true;
  }

})

networkSeries.nodes.template.events.on("out", function(event) {
  event.target.dataItem.childLinks.each(function(link) {
    link.isHover = false;
  })
  if (event.target.dataItem.parentLink) {
    event.target.dataItem.parentLink.isHover = false;
  }
})
*/
