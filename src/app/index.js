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

    for (let i = 0; i <= 199; i++) {
      chart.newPoint();
    }
    if (index === 0 || index === 1) {
      setInterval(() => {
        let index = chart.getData().length - 1,
          point = chart.getData()[index];
        chart.setPoint(index, {
          value: point.value + Math.random() * (Math.random() > 0.5 ? 1 : -1),
          time: +new Date(),
        });
      }, 200);
    }
    if (index !== 0) {
      setInterval(() => {
        let pointIndex = chart.getData().length - 1,
          point = chart.getData()[pointIndex],
          value = point.value;
        if (index === 2 || index === 3) {
          value = value + Math.random() * (Math.random() > 0.5 ? 1 : -1);
        }
        chart.newPoint({
          value,
          time: +new Date(),
        });
      }, [0, 40, 100, 300][index]);
    }
  });
  let pieCharts = document.querySelectorAll('.chart-donut');
  pieCharts.forEach((item, index) => {
    let canvas = item.querySelector('canvas'),
      chart = new Donut({
        settings: {
          line: {},
        },
        canvas,
        data: (() => {
          let result = [];
          for (let i = 0; i <= Math.random() * 10; i++) {
            result.push({
              value: Math.random(),
              label: 'Label ' + i,
            });
          }
          return result;
        })(),
      });
  });
});

// [
//   {
//     value: 2,
//     label: 'First',
//   },
//   {
//     value: 2,
//     label: 'Second',
//   },
// ],
