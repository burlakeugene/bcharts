import { Line, Donut } from '../package';
import './styles.scss';
window.addEventListener('load', () => {
  let lineCharts = document.querySelectorAll('.chart-line');
  lineCharts.forEach((item, index) => {
    let canvas = item.querySelector('canvas'),
      chart = new Line({
        canvas,
        actions: {
          mouseOverPoint: (point) => {},
          mouseEnterLine: () => {},
          mouseLeaveLine: () => {},
        },
      });
  });
  let pieCharts = document.querySelectorAll('.chart-donut');
  pieCharts.forEach((item, index) => {
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
});