import Highcharts from 'highcharts';
import Map from 'highcharts/modules/map';
import Exporting from 'highcharts/modules/exporting';
import Accessibility from 'highcharts/modules/accessibility';
import { populationDensity } from './data';

// Adding other modules to Highcharts
Map(Highcharts);
Exporting(Highcharts);
Accessibility(Highcharts);

(async () => {
  const topology = await fetch(
    'https://code.highcharts.com/mapdata/countries/us/us-all.topo.json'
  ).then((response) => response.json());

  const data = populationDensity;

  // Make codes uppercase to match the map data
  data.forEach(function (p) {
    p.code = p.code.toUpperCase();
  });

  // Instantiate the map
  Highcharts.mapChart({
    chart: {
      map: topology,
      renderTo: 'us-population-density',
    },
    exporting: {
      enabled: false,
    },
    title: {
      text: 'US population density (/km²)',
    },
    legend: {
      symbolRadius: 0,
    },
    colorAxis: {
      type: 'linear',
      minColor: '#7FC7AD',
      maxColor: '#1E4D58',
      dataClasses: [
        {
          to: 10,
          color: '#808080',
        },
        {
          from: 10,
          to: 30,
          color: '#7FC7AD',
        },
        {
          from: 30,
          to: 50,
          color: '#53AA8A',
        },
        {
          from: 50,
          to: 70,
          color: '#39836B',
        },
        {
          from: 70,
          to: 90,
          color: '#25765B',
        },
        {
          from: 90,
          color: '#1E4D58',
        },
      ],
    },
    series: [
      {
        type: 'map',
        accessibility: {
          point: {
            valueDescriptionFormat:
              '{xDescription}, {point.value} ' + 'people per square kilometer.',
          },
        },
        data,
        joinBy: ['postal-code', 'code'],
        name: 'Population density',
        tooltip: {
          pointFormat: '{point.code}: {point.value}/km²',
        },
      },
    ],
  });
})();
