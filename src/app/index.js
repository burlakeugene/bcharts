import { Plot, Donut, Pie } from '../package';
import './styles.scss';
window.addEventListener('load', () => {
  let lineCharts = document.querySelectorAll('.chart-line');
  lineCharts.forEach((item, index) => {
    let canvas = item.querySelector('canvas'),
      dataLength = 10,
      chart = new Plot({
        data: {
          labels: (() => {
            let array = [];
            for (let i = 0; i <= dataLength; i++) {
              array.push('Label ' + parseInt(i + 1));
            }
            return array;
          })(),
          datasets: [
            {
              name: 'Some bar data 1',
              type: 'bar',
              values: (() => {
                let array = [];
                for (let i = 0; i <= dataLength; i++) {
                  array.push(Math.random() * (Math.random() > 0.5 ? 1 : -1));
                }
                return array;
              })(),
            },
            {
              name: 'Some bar data 2',
              type: 'bar',
              values: (() => {
                let array = [];
                for (let i = 0; i <= dataLength; i++) {
                  array.push(Math.random() * (Math.random() > 0.5 ? 1 : -1));
                }
                return array;
              })(),
            },
            {
              name: 'Some bar data 2',
              type: 'bar',
              values: (() => {
                let array = [];
                for (let i = 0; i <= dataLength; i++) {
                  array.push(Math.random() * (Math.random() > 0.5 ? 1 : -1));
                }
                return array;
              })(),
            },
            {
              name: 'Some line data',
              type: 'line',
              values: (() => {
                let array = [];
                for (let i = 0; i <= dataLength; i++) {
                  array.push(Math.random() * (Math.random() > 0.5 ? 1 : -1));
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
