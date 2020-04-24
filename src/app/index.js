import Chart from '../package';
import './styles.scss';
import { Request, Url } from 'burlak';
const request = new Request(),
  url = new Url();
window.addEventListener('load', () => {
  let charts = document.querySelectorAll('.chart');
  charts.forEach((item) => {
    let div = item.querySelector('div'),
      canvas = item.querySelector('canvas'),
      chart = new Chart({
        canvas,
        actions: {
          mouseOverPoint: (point) => {},
          mouseEnterLine: () => {},
          mouseLeaveLine: () => {},
        },
        settings: {
          timeFormat: {
            line: 'hh:ii:ss',
            current: 'hh:mm:ss',
          },
          data: {
            limit: {
              value: 200,
              min: 50,
            },
          },
        },
      });

    for (let i = 0; i <= 199; i++) {
      chart.newPoint();
    }
    setInterval(() => {
      let index = chart.getData().length - 1,
        point = chart.getData()[index];
      chart.setPoint(index, {
        value: point.value + Math.random() * (Math.random() > 0.5 ? 1 : -1),
        time: +new Date(),
      });
    }, 500);
    setInterval(() => {
      let index = chart.getData().length - 1,
        point = chart.getData()[index];
      chart.newPoint({
        value: point.value,
        time: +new Date(),
      });
    }, 5000);
  });
});
