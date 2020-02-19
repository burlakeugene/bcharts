import Chart from '../package';
import './styles.scss';

window.addEventListener('load', () => {
  let canvas = document.querySelector('#chart');
  let chart = new Chart({
    canvas,
    data: [1,2,3,4,5,6,1,8,9,10,11,12].map((i) => {
      return {
        value: i
      }
    }),
    limit: 10,
    offset: 0
  });
  setInterval(() => {
    chart.newDot();
  }, 500)
  
});
