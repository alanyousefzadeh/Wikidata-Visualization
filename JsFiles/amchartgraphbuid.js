var legend  = null;
var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
chart.logo.disabled = true;

var networkSeries = null;
function buildGraph(info) {
  am4core.disposeAllCharts();

  if(chart._disposed===true)
  {
    chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
    chart.logo.disabled = true;

  }
  info=JSON.parse(info)
  am4core.useTheme(am4themes_animated);

  chart.logo.disabled = true;

  chart.legend = new am4charts.Legend();
  legend = chart.legend;
  chart.legend.position = "right";
  chart.legend.scrollable = true;
  chart.data.scrollable = true;
  chart.responsive.enabled = true;
  chart.resizable = true;
  networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
  networkSeries.scrollbarX = new am4charts.XYChartScrollbar();
  networkSeries.scrollbarX.series.push(networkSeries);

  networkSeries.data = [info];
  console.log(networkSeries.data)

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





  networkSeries.maxLevels = 2;



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

  networkSeries.dataFields.collapsed = "off";


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
        var wikiLink="";
        var name = target.dataItem.name.slice().replace(" ", "_");

        if(target.dataItem.dataContext.children[0].article===""||target.dataItem.dataContext.children[0].album!=="")
        {
          wikiLink='https://en.wikipedia.org/wiki/'+name;
        }
        else{
           wikiLink=target.dataItem.dataContext.children[0].article;
        }
        var link = '<a href='+wikiLink+' target="_blank">Go to Wikipedia!</a><div class="embed-responsive embed-responsive-16by9" style="height:500px ; width: 600px; "><iframe class="embed-responsive-item" src='+wikiLink+'></iframe></div> ';

        if (target.dataItem) {
          currNode=target;
          if (target.dataItem.level===2){

            return link;
          }
        }
        return text;
      }
    }
  });
}