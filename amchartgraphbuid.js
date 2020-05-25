function buildGraph(info) {
  console.log(info)
  info=JSON.parse(info)
  am4core.useTheme(am4themes_animated);
  var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree, am4charts.XYChart);
//var chart = am4core.create("zoom",am4charts.XYChart);


  //
  // chart.legend = new am4charts.Legend();
  // chart.legend.data = chart.data.map(i => ({
  //   "name": i.title,
  //   "fill": i.color
  // }));




  chart.legend = new am4charts.Legend();
  //
  //
  // //chart.exporting.menu = new am4core.ExportMenu();
  // //chart.exporting.menu.container = document.getElementById("tools");
  // //chart.legend.parent = chart.chartContainer;
  //
  //
  //
  chart.legend.position = "right";
  chart.legend.scrollable = true;
  // chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;

  // chart.legend.nodes.template.events.on("hit", function(ev) {
  //   console.log("here in legendddddd");
  //   console.log(ev.target);
  //
  // });
  //
  //





  chart.data.scrollable = true;
  chart.responsive.enabled = true;
  chart.resizable = true;
  var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
  networkSeries.scrollbarX = new am4charts.XYChartScrollbar();
  networkSeries.scrollbarX.series.push(networkSeries);

  networkSeries.data = [info];
  console.log(networkSeries.data)

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
  networkSeries.dataFields.fixed="fixed";
  networkSeries.nodes.template.propertyFields.x = "x";
  networkSeries.nodes.template.propertyFields.y = "y";
  networkSeries.nodes.template.tooltipText = "{name}";
  networkSeries.nodes.template.fillOpacity = 1;
//networkSeries.nodes.template.dataFields.url = "name";
  networkSeries.nodes.template.label.text = "{name}";


  //////////////////////////////
  // networkSeries.dataFields.collapsed = "true";
  // networkSeries.dataFields.collapsed = "false";


  ////////////////////////////////

  //networkSeries.links.template.distance = 2;

  networkSeries.manyBodyStrength = -30;
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

  // networkSeries.legendSettings.createMarker= false;



  networkSeries.maxRadius = 50;
  networkSeries.minRadius = 25;
  networkSeries.nodes.template.label.hideOversized = true;
  networkSeries.nodes.template.label.truncate = true;




  ////////////////////////
  networkSeries.dataFields.collapsed = "off";
  //////////////////////////////




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


  // networkSeries.events.on("inited", function() {
  //   networkSeries.animate({
  //     property: "velocityDecay",
  //     to: 1
  //   }, 3000);
  // });


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
