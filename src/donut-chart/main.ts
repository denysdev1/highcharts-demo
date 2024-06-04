import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import Accessibility from 'highcharts/modules/accessibility';

// Adding other modules to Highcharts
Exporting(Highcharts);
Accessibility(Highcharts);

// Data retrieved from https://worldpopulationreview.com/country-rankings/countries-by-density
Highcharts.chart({
  chart: {
    renderTo: 'container',
    type: 'pie',
  },
  title: {
    text: 'Countries compared by population density and total area, 2022.',
    align: 'left',
  },
  tooltip: {
    headerFormat: '',
    pointFormat:
      '<span style="color:{point.color}">\u25CF</span> <b> ' +
      '{point.name}</b><br/>' +
      'Area (square km): <b>{point.y}</b><br/>' +
      'Population density (people per square km): <b>{point.z}</b><br/>',
  },
  plotOptions: {
    pie: {
      startAngle: -60,
      endAngle: 360,
      borderWidth: 0,
    },
  },
  legend: {
    enabled: true,
    verticalAlign: 'top',
    align: 'right',
  },
  series: [
    {
      type: 'pie',
      minSize: 10,
      innerSize: '80%',
      name: 'countries',
      borderRadius: 5,
      data: [
        {
          name: 'Spain',
          y: 505992,
          z: 92,
          dataLabels: {
            style: {},
          },
        },
        {
          name: 'Italy',
          y: 301336,
          z: 200,
        },
        {
          name: 'Germany',
          y: 357114,
          z: 235,
        },
      ],
      colors: ['#39836B', '#C3A355', '#53AA8A'],
    },
  ],
});
