import Chart from '../package';
import './styles.scss';
window.addEventListener('load', () => {
  let charts = document.querySelectorAll('.chart');
  charts.forEach((item, index) => {
    let div = item.querySelector('div'),
      canvas = item.querySelector('canvas'),
      chart = new Chart({
        canvas,
        actions: {
          mouseOverPoint: (point) => {},
          mouseEnterLine: () => {},
          mouseLeaveLine: () => {},
        }
      });

    for (let i = 0; i <= 199; i++) {
      chart.newPoint();
    }
    if(index === 0 || index === 1){
      setInterval(() => {
        let index = chart.getData().length - 1,
          point = chart.getData()[index];
        chart.setPoint(index, {
          value: point.value + Math.random() * (Math.random() > 0.5 ? 1 : -1),
          time: +new Date(),
        });
      }, 200);
    }
    if(index !== 0){
      setInterval(() => {
        let pointIndex = chart.getData().length - 1,
          point = chart.getData()[pointIndex],
          value = point.value;
        if(index === 2 || index === 3){
          value = value + Math.random() * (Math.random() > 0.5 ? 1 : -1);
        }
        chart.newPoint({
          value,
          time: +new Date(),
        });
      }, [0, 40, 100, 300][index]);
    }
  });
});
