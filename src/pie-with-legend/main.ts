import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import Accessibility from 'highcharts/modules/accessibility';
import { data } from './data';

// Adding other modules to Highcharts
Exporting(Highcharts);
Accessibility(Highcharts);

Highcharts.chart({
  chart: {
    renderTo: 'container',
    plotShadow: false,
    type: 'pie',
  },
  title: {
    text: 'Browser market shares in March, 2022',
    align: 'center',
  },
  exporting: {
    enabled: false,
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    rtl: true,
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  colors: [
    '#808080',
    '#39836B',
    '#1E4D58',
    '#C3A355',
    '#D3E8D6',
    '#E5D9B4',
    '#D3DAD4',
  ],
  accessibility: {
    point: {
      valueSuffix: '%',
    },
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        softConnector: false,
      },
      showInLegend: true,
    },
  },
  series: [
    {
      allowPointSelect: false,
      type: 'pie',
      name: 'Brands',
      data,
      states: {
        hover: {
          halo: null,
        },
      },
    },
  ],
});
