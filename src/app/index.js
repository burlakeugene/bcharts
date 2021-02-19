import Chart from '../package';
import './styles.scss';
window.addEventListener('load', () => {
  let lineCharts = document.querySelectorAll('.chart-line');
  lineCharts.forEach((item, index) => {
    let canvas = item.querySelector('canvas'),
      dataLength = 9,
      chart = new Chart.Plot({
        data: {
          labels: (() => {
            let array = [];
            for (let i = 0; i <= 3; i++) {
              array.push('Label ' + parseInt(i + 1));
            }
            return array;
          })(),
          datasets: [
            {
              name: 'Some bar data 1',
              type: 'bar',
              values: (() => {
                let array = [];
                for (let i = 0; i <= dataLength; i++) {
                  array.push(Math.random() * (Math.random() > 0.5 ? 1 : -1));
                }
                return array;
              })(),
            },
            {
              name: 'Some bar data 2',
              type: 'bar',
              values: (() => {
                let array = [];
                for (let i = 0; i <= dataLength; i++) {
                  array.push(Math.random() * (Math.random() > 0.5 ? 1 : -1));
                }
                return array;
              })(),
            },
            {
              name: 'Some line data line',
              type: 'line',
              values: (() => {
                let array = [];
                for (let i = 0; i <= dataLength; i++) {
                  array.push(Math.random() * (Math.random() > 0.5 ? 1 : -1));
                }
                return array;
              })(),
            },
          ],
        },
        canvas,
      });
  });
  let donutCharts = document.querySelectorAll('.chart-donut');
  donutCharts.forEach((item, index) => {
    let canvas = item.querySelector('canvas'),
      chart = new Chart.Donut({
        canvas,
        settings: {
          texts: {
            slicePercent: {
              enable: true
            }
          }
        },
        data: (() => {
          let result = [];
          for (let i = 0; i <= Math.random() * 10; i++) {
            result.push({
              value: Math.random().toFixed(2),
              label: 'Label ' + i,
            });
          }
          return result;
        })(),
      });
  });
  let pieCharts = document.querySelectorAll('.chart-pie');
  pieCharts.forEach((item, index) => {
    let canvas = item.querySelector('canvas'),
      chart = new Chart.Pie({
        canvas,
        settings: {
          texts: {
            slicePercent: {
              enable: true
            }
          }
        },
        data: (() => {
          let result = [];
          for (let i = 0; i <= Math.random() * 10; i++) {
            result.push({
              value: Math.random().toFixed(2),
              label: 'Label ' + i,
            });
          }
          return result;
        })(),
      });
  });

  let radarCharts = document.querySelectorAll('.chart-radar');
  radarCharts.forEach((item, index) => {
    let canvas = item.querySelector('canvas'),
      chart = new Chart.Radar({
        canvas,
        data: [{
          label: 'First',
          value: 3
        }, {
          label: 'Second',
          value: 2
        }, {
          label: 'Third',
          value: 1
        }, {
          label: 'Fourth',
          value: 1
        }, {
          label: 'Fifth',
          value: 1
        }]
      });
  });
});
