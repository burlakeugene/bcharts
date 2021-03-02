import { generateRandomColor, getPointOnArc } from '../../common';
import defaultSettings from './defaultSettings';
import Chart from '../chart';

export default class Example extends Chart {
  constructor(props) {
    props.defaultSettings = defaultSettings;
    super(props);
  }
  prepareData(data = {}) {
    let labels = data.labels;
    data.datasets.forEach((item) => {
      item.color = item.color || generateRandomColor();
      item.state = item.state || 0;
      if(item.values.length > labels.length) item.values.length = labels.length;
      if(item.values.length < labels.length){
        for(let i = item.values.length; i < labels.length; i++){
          item.values.push(0)
        }
      }
    });
    return data;
  }
  drawTooltip() {}
  drawRadar() {
    let { canvas, settings, data, cursor, type, state } = this,
      { context, element } = canvas,
      { scheme, labels } = settings,
      sideSize = Math.min(
        element.clientHeight - settings.offset.top - settings.offset.bottom,
        element.clientWidth - settings.offset.left - settings.offset.right
      ),
      sliceWidth = sideSize / 2,
      x =
        element.clientWidth / 2 + settings.offset.left - settings.offset.right,
      y =
        element.clientHeight / 2 + settings.offset.top - settings.offset.bottom,
      { volumed } = settings.data,
      piOffset = -(Math.PI / 2),
      piPart = (Math.PI * 2) / data.labels.length;
    for (let i = 0; i <= data.labels.length - 1; i++) {
      let point = getPointOnArc(x, y, sliceWidth, piOffset + piPart * i);
      context.strokeStyle = scheme.styles.color;
      context.lineWidth = scheme.styles.width;
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(point.x, point.y);
      context.fill();
      context.stroke();
      for (let l = 0; l <= scheme.count; l++) {
        let partSliceWidth = sliceWidth / scheme.count;
        let currentPoint = getPointOnArc(
            x,
            y,
            sliceWidth - partSliceWidth * l,
            piOffset + piPart * i
          ),
          prevPoint = getPointOnArc(
            x,
            y,
            sliceWidth - partSliceWidth * l,
            piOffset + piPart * (i - 1)
          );
        context.beginPath();
        context.moveTo(currentPoint.x, currentPoint.y);
        context.lineTo(prevPoint.x, prevPoint.y);
        context.fill();
        context.stroke();
      }
      if (labels.enable) {
        context.save();
        let point = getPointOnArc(
          x,
          y,
          sliceWidth + labels.offset,
          piOffset + piPart * i
        );
        let label = data.labels[i] || '';
        context.globalAlpha = 1 * state.loading;
        context.font =
          '100 ' + labels.styles.fontSize * state.loading + 'px arial';
        context.textAlign = (() => {
          if (point.x > x) return 'left';
          if (point.x < x) return 'right';
          return 'center';
        })();
        context.textBaseline = 'middle';
        context.fillStyle = labels.styles.color;
        context.fillText(label, point.x, point.y);
        context.restore();
      }
    }
    let flatList = data.datasets
        .map((data) => {
          return data.values;
        })
        .flat(),
      max = Math.max(...flatList);

    for (let i = 0; i <= data.datasets.length - 1; i++) {
      let dataset = data.datasets[i];
      context.strokeStyle = dataset.color;
      context.fillStyle = dataset.color;
      context.lineWidth = 1;
      context.beginPath();
      for (let d = 0; d <= dataset.values.length - 1; d++) {
        let value = dataset.values[d],
          percent = value / max,
          point = getPointOnArc(
            x,
            y,
            sliceWidth * percent * state.loading,
            piOffset + piPart * d
          );
        d === 0
          ? context.moveTo(point.x, point.y)
          : context.lineTo(point.x, point.y);
      }
      context.globalAlpha = 0.5;
      context.fill();
      context.globalAlpha = 1;
      context.closePath();
      context.stroke();
      for (let d = 0; d <= dataset.values.length - 1; d++) {
        let value = dataset.values[d],
          percent = value / max,
          point = getPointOnArc(
            x,
            y,
            sliceWidth * percent * state.loading,
            piOffset + piPart * d
          );
        context.beginPath();
        context.arc(point.x, point.y, 3, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
        context.stroke();
      }
    }
  }
  render(info = {}) {
    let time = 300;
    if (this.renderTimeout) clearTimeout(this.renderTimeout);
    this.renderTimeout = setTimeout(() => {
      super.baseRender();
      this.drawRadar();
      this.drawTooltip();
    }, time / 60);
  }
}
