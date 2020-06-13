var legend  = null;
var ns = null;
var myChart=null;
var currNode=null;
var myNode = null;
function buildGraph(info) {
  // console.log(info)
  info=JSON.parse(info)
  am4core.useTheme(am4themes_animated);
  var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree, am4charts.XYChart);
  chart.legend = new am4charts.Legend();
  legend = chart.legend;
  chart.legend.position = "right";
  chart.legend.scrollable = true;
  chart.data.scrollable = true;
  chart.responsive.enabled = true;
  chart.resizable = true;
  myChart=chart;
  var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
  networkSeries.scrollbarX = new am4charts.XYChartScrollbar();
  networkSeries.scrollbarX.series.push(networkSeries);
  networkSeries.data = [info];
  networkSeries.dataFields.linkWith = "linkWith";
  networkSeries.dataFields.name = "name";
  networkSeries.dataFields.id = "name";
  networkSeries.dataFields.children = "children";
  networkSeries.dataFields.fixed="fixed";
  networkSeries.nodes.template.propertyFields.x = "x";
  networkSeries.nodes.template.propertyFields.y = "y";
  networkSeries.nodes.template.tooltipText = "{name}";
  networkSeries.nodes.template.fillOpacity = 1;
  networkSeries.nodes.template.label.text = "{name}";
  networkSeries.manyBodyStrength = -30;
  networkSeries.nodes.template.expandAll = false;
  networkSeries.fontSize = 8;
  networkSeries.currentLevel = 0;
  networkSeries.maxLevels = 2;
  networkSeries.maxRadius = 50;
  networkSeries.minRadius = 25;
  networkSeries.nodes.template.label.hideOversized = true;
  networkSeries.nodes.template.label.truncate = true;
  networkSeries.dataFields.collapsed = "off";
  ns= networkSeries;

  ////////////////////////////////////////////////////////////////////////////
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
  ////////////////////////
  networkSeries.nodes.template.events.on("out", function (event) {
    event.target.dataItem.childLinks.each(function (link) {
      link.isHover = false;
    });
    if (event.target.dataItem.parentLink) {
      event.target.dataItem.parentLink.isHover = false;
    }
  });
  ////////////////////////////////////////////////////////////////////////////
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
    // currNode=targetNode;
    networkSeries.nodes.each(function(node) {
      // if (targetNode !== node && node.isActive) {}
      // if (node.isActive && targetNode.dataItem.name !== node.dataItem.name ){
      if (targetNode.dataItem.name !== node.dataItem.name && node.isActive) {
        node.isActive = true;
      }
      if(targetNode.dataItem.name === node.dataItem.name)
      {
        myNode=node;
      }
    });
  });

  //add listener for Wikipedia page display
  // Set up tooltips
  networkSeries.tooltip.label.interactionsEnabled = true;
  networkSeries.tooltip.keepTargetHover = true;
  networkSeries.nodes.template.adapter.add("tooltipHTML", function(text, target) {
    if(target.dataItem.name){
      if(target.dataItem.level === 0 || target.dataItem.level === 1){
        return target.dataItem.name;
      }
      else{
        var name = target.dataItem.name.slice().replace(" ", "_");
        console.log(name);
        var link = '<a href="https://en.wikipedia.org/wiki/'+ name +'" target="_blank">More info</a><div class="box" ><iframe src="https://en.wikipedia.org/wiki/' + name + '" width = "500px" height = "700px"></iframe></div> ';
        console.log(link);
        if (target.dataItem) {
          currNode=target;
          if (target.dataItem.level===2){
            //info.children[0].children[1].children[0].valUrl
            return link;
          }
        }
        return text;
      }
    }
  });
}