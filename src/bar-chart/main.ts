import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import Accessibility from 'highcharts/modules/accessibility';

// Adding other modules to Highcharts
Exporting(Highcharts);
Accessibility(Highcharts);
Highcharts.chart({
  chart: {
    renderTo: 'container',
    type: 'column',
  },
  title: {
    text: 'Corn vs wheat estimated production for 2020',
    align: 'left',
  },
  subtitle: {
    text:
      'Source: <a target="_blank" ' +
      'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
    align: 'left',
  },
  xAxis: {
    categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
    crosshair: true,
    accessibility: {
      description: 'Countries',
    },
    lineColor: '#C3A355',
    labels: {
      style: {
        color: '#53AA8A',
      },
    },
  },
  yAxis: {
    title: {
      text: null,
    },
    labels: {
      style: {
        color: '#C3A355',
      },
    },
  },
  tooltip: {
    valueSuffix: ' (1000 MT)',
  },
  legend: {
    verticalAlign: 'top',
    align: 'right',
    labelFormatter: function () {
      return `<span style="color: ${this.color}">${this.name}</span>`;
    },
  },
  plotOptions: {
    column: {
      borderRadius: 7,
      pointPadding: 0.05,
      pointRange: 0.35,
      maxPointWidth: 10,
    },
  },
  series: [
    {
      type: 'column',
      name: 'Corn',
      color: '#53AA8A',
      data: [406292, 260000, 107000, 68300, 27500, 14500],
    },
    {
      type: 'column',
      name: 'Wheat',
      color: '#D03B3B',
      data: [51086, 136000, 5500, 141000, 107180, 77000],
    },
  ],
});
