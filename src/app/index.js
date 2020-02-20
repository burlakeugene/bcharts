import Chart from '../package';
import './styles.scss';

window.addEventListener('load', () => {
  let canvas = document.querySelector('#chart');
  let chart = new Chart({
    canvas,
    limit: 30,
    offset: 0
  });
  setInterval(() => {
    chart.newDot();
  }, 100)
});
