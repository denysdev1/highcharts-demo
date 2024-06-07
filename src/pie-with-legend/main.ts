import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import Accessibility from 'highcharts/modules/accessibility';
import { data } from './data';
import type { ConnectorThis } from './ConnectorThis';

// Adding other modules to Highcharts
Exporting(Highcharts);
Accessibility(Highcharts);

Highcharts.chart({
  chart: {
    renderTo: 'container',
    plotShadow: false,
    type: 'pie',
    style: {
      fontFamily: 'Inter, sans-serif',
    },
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
      dataLabels: [
        {
          connectorPadding: 0,
          // Adding a custom connector shape
          connectorShape: function (
            labelPosition: Highcharts.PositionObject,
            connectorPosition: { touchingSliceAt: { x: number; y: number } }
          ) {
            const thisObj = this as ConnectorThis;

            // Determine the position of the label relative to the pie chart center
            const chart = thisObj.series.chart;
            const centerX = chart.plotLeft + chart.plotWidth / 2;
            const centerY = chart.plotTop + chart.plotHeight / 2;

            const labelX = labelPosition.x;
            const labelY = labelPosition.y;

            // Extract the actual positions from the connectorPosition object
            const { touchingSliceAt } = connectorPosition;

            let path = [];

            // data label value
            const label = thisObj.name;
            const point = chart.series[0].points.find(
              (point) => point.name === label
            );
            const pointWidth = point?.itemWidth ? point.itemWidth - 16 : 0;

            // Custom connector logic
            if (labelX >= centerX && labelY <= centerY) {
              // Top right quadrant: vertical line up, then horizontal line right
              path = [
                ['M', touchingSliceAt.x, touchingSliceAt.y],
                ['L', touchingSliceAt.x, labelY - 10],
                ['L', labelX + pointWidth, labelY - 10],
              ];
            } else if (labelX >= centerX && labelY > centerY) {
              // Bottom right quadrant: vertical line down, then horizontal line right
              path = [
                ['M', touchingSliceAt.x, touchingSliceAt.y],
                ['L', touchingSliceAt.x, labelY + 10],
                ['L', labelX + pointWidth, labelY + 10],
              ];
            } else if (labelX < centerX && labelY <= centerY) {
              // Top left quadrant: vertical line top, then horizontal line left
              path = [
                ['M', touchingSliceAt.x, touchingSliceAt.y],
                ['L', touchingSliceAt.x, labelY - 10],
                ['L', labelX - pointWidth, labelY - 10],
              ];
            } else {
              // Bottom left quadrant: vertical line down, then horizontal line left
              path = [
                ['M', touchingSliceAt.x, touchingSliceAt.y],
                ['L', touchingSliceAt.x, labelY + 10],
                ['L', labelX - pointWidth, labelY + 10],
              ];
            }

            return path;
          },
        },
      ],
    },
  ],
});
