import Chart from '../package';
import './styles.scss';
import { Request } from 'burlak';
const request = new Request();
window.addEventListener('load', () => {
  let canvas = document.querySelector('#chart');
  let chart = new Chart({
    canvas,
    limit: 200,
    offset: 0
  });
  setInterval(() => {
    chart.newDot({
      // value: 1
    });
  }, 0);
});
