import Highcharts from 'highcharts';

declare module 'highcharts' {
  interface PointOptionsObject extends Highcharts.PointOptionsObject {
    country?: string;
  }

  interface SeriesBubbleOptions extends Highcharts.SeriesBubbleOptions {
    colorByPoint: boolean;
  }
}
