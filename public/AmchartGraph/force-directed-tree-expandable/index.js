/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
chart.legend = new am4charts.Legend();
var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

networkSeries.data = [{
  name: 'Flora',
  fixed: true,
  x: am4core.percent(50),
  y: am4core.percent(50),
  children: [{
    name: 'Black Tea',
    fixed: true,

  }, {
    name: 'Floral',
    fixed: true,
    children: [{
      name: 'Chamomile',
      fixed: false,

    }, {
      name: 'Rose',
      fixed: false,

    }, {
      name: 'Jasmine',
      fixed: false,

    }]
  }]

}];

networkSeries.dataFields.linkWith = "linkWith";
networkSeries.dataFields.name = "name";
networkSeries.dataFields.id = "name";
networkSeries.dataFields.value = "value";
networkSeries.dataFields.children = "children";
networkSeries.dataFields.fixed = "fixed";
networkSeries.links.template.distance = 2;

networkSeries.nodes.template.propertyFields.x = "x";
networkSeries.nodes.template.propertyFields.y = "y";

networkSeries.nodes.template.tooltipText = "{name}";
networkSeries.nodes.template.fillOpacity = 1;

networkSeries.nodes.template.label.text = "{name}"
networkSeries.fontSize = 8;
networkSeries.maxLevels = 1;
networkSeries.nodes.template.label.hideOversized = true;
networkSeries.nodes.template.label.truncate = true;
