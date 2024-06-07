export type ConnectorThis = {
  name: string;
  series: {
    chart: {
      plotLeft: number;
      plotTop: number;
      plotWidth: number;
      plotHeight: number;
      series: {
        points: { name: string; itemWidth: number }[];
      }[];
    };
  };
};
