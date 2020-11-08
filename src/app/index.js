import { Plot, Donut, Pie } from '../package';
import './styles.scss';
window.addEventListener('load', () => {
  let lineCharts = document.querySelectorAll('.chart-line');
  lineCharts.forEach((item, index) => {
    let canvas = item.querySelector('canvas'),
      chart = new Plot({
        data: {
          labels: ['First', 'Second', 'Third'],
          datasets: [
            {
              name: 'Some line data',
              type: 'line',
              values: (() => {
                let length = 10;
                let array = [];
                for (let i = 0; i <= length; i++) {
                  array.push(Math.random() * -1);
                }
                return array;
              })(),
            },
            {
              name: 'Some bar data',
              type: 'line',
              values: (() => {
                let length = 10;
                let array = [];
                for (let i = 0; i <= length; i++) {
                  array.push(Math.random());
                }
                return array;
              })(),
            },
          ],
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
              label: 'Label ' + i,
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
              label: 'Label ' + i,
            });
          }
          return result;
        })(),
      });
  });
});
