import Chart from '../package';
import './styles.scss';

window.addEventListener('load', () => {
  let canvas = document.querySelector('#chart');
  new Chart({
    canvas
  });
});
