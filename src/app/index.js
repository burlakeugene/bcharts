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
          offset: {
            left: 50,
            right: 30,
          },
          data: {
            limit: {
              value: 100,
              min: 50,
            },
          },
          valuesLine: {
            position: 'left',
          },
          targetValue: {
            horizontalLine: {
              enable: false,
            },
            verticalLine: {
              topLineHidden: true
            },
            valueLabel: {
              // enable: false
            },
          },
          currentValue: {
            position: 'left',
            styles: {
              line: {
                dash: false,
                gradient: {
                  points: [
                    {
                      color: '#954ce9',
                    },
                    {
                      color: '#27ca5d',
                    },
                  ],
                },
              },
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
