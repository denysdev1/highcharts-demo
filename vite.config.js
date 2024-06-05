// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        barChart: resolve(__dirname, 'src/bar-chart/index.html'),
        donutChart: resolve(__dirname, 'src/donut-chart/index.html'),
        donutWithInnerChart: resolve(
          __dirname,
          'src/donut-with-inner-chart/index.html'
        ),
        pieWithLegend: resolve(__dirname, 'src/pie-with-legend/index.html'),
        radialBarChart: resolve(__dirname, 'src/radial-bar-chart/index.html'),
        usPopulationDensity: resolve(
          __dirname,
          'src/us-population-density/index.html'
        ),
      },
    },
  },
});