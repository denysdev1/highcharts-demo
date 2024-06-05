import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import Accessibility from 'highcharts/modules/accessibility';

// Adding other modules to Highcharts
Exporting(Highcharts);
Accessibility(Highcharts);

const data1 = [631, 727, 3202, 721];
const data2 = [814, 841, 3714, 726];
const data3 = [1276, 1007, 4561, 746];
const maxs = [];

for (const dataSet of [data1, data2, data3]) {
  maxs.push(Math.max(...dataSet));
}

const max = Math.round(Math.max(...maxs) * 1.1);

console.log('max', max);

const makeDummy = (data: number[]) => {
  const dummyData: number[] = [];

  data.forEach((v) => {
    dummyData.push(max - v);
  });

  return dummyData;
};

let dummyData1 = makeDummy(data1);
let dummyData2 = makeDummy(data2);
let dummyData3 = makeDummy(data3);

Highcharts.chart({
  chart: {
    renderTo: 'container',
    type: 'bar',
  },
  title: {
    text: 'Historic World Population by Region',
    align: 'left',
    style: {
      color: '#53AA8A',
    },
  },
  subtitle: {
    text:
      'Source: <a ' +
      'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
      'target="_blank">Wikipedia.org</a>',
    align: 'left',
  },
  xAxis: {
    categories: ['Africa', 'America', 'Asia', 'Europe'],
    title: {
      text: null,
    },
    gridLineWidth: 1,
    lineWidth: 0,
  },
  yAxis: {
    min: 0,
    max,
    title: {
      text: 'Population (millions)',
      align: 'high',
    },
    labels: {
      overflow: 'justify',
    },
    gridLineWidth: 0,
    reversed: true,
  },
  tooltip: {
    valueSuffix: ' millions',
  },
  plotOptions: {
    bar: {
      borderRadius: '50%',
      groupPadding: 0.1,
    },
    series: {
      stacking: 'normal',
    },
  },
  colors: ['#53AA8A', '#C3A355', '#4A8E55', '#000000', '#29624F'],
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    y: 50,
    x: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    shadow: true,
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      showInLegend: false,
      enableMouseTracking: false,
      stack: 'a',
      type: 'bar',
      color: '#ddd',
      data: dummyData1,
    },
    {
      showInLegend: false,
      enableMouseTracking: false,
      stack: 'b',
      type: 'bar',
      color: '#ddd',
      data: dummyData2,
    },
    {
      showInLegend: false,
      enableMouseTracking: false,
      stack: 'c',
      type: 'bar',
      color: '#ddd',
      data: dummyData3,
    },
    {
      stack: 'a',
      type: 'bar',
      name: 'Year 1990',
      data: data1,
    },
    {
      stack: 'b',
      type: 'bar',
      name: 'Year 2000',
      data: data2,
    },
    {
      stack: 'c',
      type: 'bar',
      name: 'Year 2018',
      data: data3,
    },
  ],
});
