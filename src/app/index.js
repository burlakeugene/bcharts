import Chart from '../package';
import './styles.scss';
import { Request, Url } from 'burlak';
const request = new Request(),
  url = new Url();
window.addEventListener('load', () => {
  let canvas = document.querySelectorAll('canvas');
  canvas.forEach(item => {
    let chart = new Chart({
        canvas: item
      }),
      symbol = url.getParam('symbol');
    setInterval(() => {
      if (symbol) {
        request
          .get({
            url: 'https://quotes.instaforex.com/api/quotesTick',
            clearData: true,
            data: {
              q: symbol
            }
          })
          .then(res => {
            res && res[0] && chart.newDot({
              value: (res[0].ask + res[0].bid) / 2
            });
          });
      } else {
        chart.newDot();
      }
    }, 100);
  });
});
