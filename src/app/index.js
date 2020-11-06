import { Plot, Donut, Pie } from '../package';
import './styles.scss';
window.addEventListener('load', () => {
  let lineCharts = document.querySelectorAll('.chart-line');
  lineCharts.forEach((item, index) => {
    let canvas = item.querySelector('canvas'),
      chart = new Plot({
        data: {
          labels: ['first', 'second', 'third'],
          data: [{
            name: 'Some line data',
            type: 'line',
            values: [1, 2, 10]
          }, {
            name: 'Some bar data',
            type: 'bar',
            values: [5, -4, 3]
          }]
        },
        canvas,
      });
  });
  let donutCharts = document.querySelectorAll('.chart-donut');
  donutCharts.forEach((item, index) => {
    let canvas = item.querySelector('canvas'),
      chart = new Donut({
        canvas,
        data: (() => {
          let result = [];
          for (let i = 0; i <= Math.random() * 10; i++) {
            result.push({
              value: Math.random().toFixed(2),
              label: 'Label ' + i
            });
          }
          return result;
        })(),
      });
  });
  let pieCharts = document.querySelectorAll('.chart-pie');
  pieCharts.forEach((item, index) => {
    let canvas = item.querySelector('canvas'),
      chart = new Pie({
        canvas,
        data: (() => {
          let result = [];
          for (let i = 0; i <= Math.random() * 10; i++) {
            result.push({
              value: Math.random().toFixed(2),
              label: 'Label ' + i
            });
          }
          return result;
        })(),
      });
  });
});