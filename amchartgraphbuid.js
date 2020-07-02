var legend  = null;

am4core.useTheme(am4themes_animated);




var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);

chart.logo.disabled = true;





var networkSeries = null;
function buildGraph(info) {
  if(chart._disposed===true)
  {
     chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
    chart.logo.disabled = true;

  }
  console.log(info)
  info=JSON.parse(info)
  // am4core.useTheme(am4themes_animated);
//var chart = am4core.create("zoom",am4charts.XYChart);

  chart.logo.disabled = true;


  chart.data.scrollable = true;
  chart.responsive.enabled = true;
  chart.resizable = true;
  networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
  networkSeries.scrollbarX = new am4charts.XYChartScrollbar();
  networkSeries.scrollbarX.series.push(networkSeries);

  networkSeries.data = [info];


  /* Create series */
  /* Create legend */
  chart.legend = new am4charts.Legend();
  legend = chart.legend;
  chart.legend.position = "right";

  chart.legend.scrollable = true;
  // /* Create a separate container to put legend in */
  // var legendContainer = am4core.create("legenddiv", am4core.Container);
  // legendContainer.width = am4core.percent(20);
  // legendContainer.height = am4core.percent(100);
  // chart.legend.parent = legendContainer;


  console.log(networkSeries.data);

  networkSeries.dataFields.linkWith = "linkWith";
  networkSeries.dataFields.name = "name";
  networkSeries.dataFields.id = "name";
//networkSeries.dataFields.value = "value";
//networkSeries.dataFields.value = "10";
  networkSeries.dataFields.children = "children";
  networkSeries.dataFields.fixed="fixed";
  networkSeries.nodes.template.propertyFields.x = "x";
  networkSeries.nodes.template.propertyFields.y = "y";
  networkSeries.nodes.template.tooltipText = "{name}";
  networkSeries.nodes.template.fillOpacity = 1;
//networkSeries.nodes.template.dataFields.url = "name";
  networkSeries.nodes.template.label.text = "{name}";
  networkSeries.centerStrength = 3;
  networkSeries.manyBodyStrength = -50;
//networkSeries.links.template.distance = 1;
//networkSeries.links.template.strength = 1;
  networkSeries.nodes.template.expandAll = false;
  networkSeries.fontSize = 8;

  networkSeries.currentLevel = 1;

  // networkSeries.maxLevels = 0;
  networkSeries.maxLevels = 2;
  // networkSeries.nodes.each ((node) => {node.isActive = true;});

  // Close other nodes when one is opened
  networkSeries.nodes.template.events.on("hit", function(ev) {
    var targetNode = ev.target;
    if (targetNode.isActive) {
      networkSeries.nodes.each(function(node) {
        if (targetNode !== node && node.isActive && targetNode.dataItem.level === node.dataItem.level) {
          node.isActive = false;
        }
      });
    }
  });

  // Close other nodes when one is opened in the legend
  chart.legend.itemContainers.template.events.on("hit", function(event) {
    var targetNode = event.target;
    // targetNode.isActive = true;

    if (targetNode.isActive) {
      networkSeries.nodes.each(function(node) {
        if (targetNode !== node && node.isActive) {
          node.isActive = true;
        }
      });
    }

  });

  networkSeries.maxRadius = 50;
  networkSeries.minRadius = 25;
  networkSeries.nodes.template.label.hideOversized = true;
  networkSeries.nodes.template.label.truncate = true;

  ////////////////////////
  networkSeries.dataFields.collapsed = "off";
  //////////////////////////////
  var hoverState = networkSeries.links.template.states.create("hover");
  hoverState.properties.strokeWidth = 3;
  hoverState.properties.strokeOpacity = 1;

  networkSeries.nodes.template.events.on("over", function (event) {
    event.target.dataItem.childLinks.each(function (link) {
      link.isHover = true;
    });
    if (event.target.dataItem.parentLink) {
      event.target.dataItem.parentLink.isHover = true;
    }

  });

  networkSeries.nodes.template.events.on("out", function (event) {
    event.target.dataItem.childLinks.each(function (link) {
      link.isHover = false;
    });
    if (event.target.dataItem.parentLink) {
      event.target.dataItem.parentLink.isHover = false;
    }
  })


}
