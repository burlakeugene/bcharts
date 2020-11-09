import {
  generateRandomColor,
  generateDate,
  deepMerge,
  getPointOnArc,
  colorChangeTone,
  getContrastColor,
} from '../../common';
import defaultSettings from './defaultSettings';
import Chart from '../chart';

export default class Plot extends Chart {
  constructor(props) {
    props.defaultSettings = defaultSettings;
    super(props);
  }
  prepareData(data) {
    let maxLength = Math.max(
      ...data.datasets.map((datasets) => (datasets.values || []).length),
      data.labels.length
    );
    [data.labels, ...data.datasets.map((dataset) => dataset.values)].map(
      (current, index) => {
        if (current.length < maxLength) {
          let countDiff = maxLength - current.length - 1;
          for (let i = 0; i <= countDiff; i++) {
            current.push(index ? 0 : '');
          }
        }
      }
    );
    data.datasets.forEach((dataset) => {
      if (!dataset.color) dataset.color = generateRandomColor();
    });
    let bars = data.datasets.filter((dataset) => {
      return dataset.type === 'bar';
    });
    bars.forEach((bar, index) => {
      bar.count = bars.length;
      bar.index = index + 1;
    });
    return data;
  }
  getInterpolation(value, values) {
    let { canvas, settings } = this,
      { data, offset, grid } = settings,
      { element, context } = canvas,
      { line } = data,
      { lineWidth } = line.styles,
      max = Math.max(...values),
      min = Math.min(...values),
      top = offset.top + grid.offset.top + grid.styles.borderWidth,
      percent =
        ((value * this.state.loading -
          min * (min > 0 ? this.state.loading : 1)) *
          100) /
        (max - min) /
        100,
      height =
        element.clientHeight -
        offset.top -
        grid.offset.top -
        offset.bottom -
        grid.offset.bottom -
        grid.styles.borderWidth * 2,
      y = top + height - height * percent;
    return y;
  }
  drawGrid() {
    let { canvas, settings } = this,
      { grid, offset } = settings,
      { element, context } = canvas,
      { enable, horizontal, vertical, styles } = grid;
    if (!enable) return;
    context.save();
    let left = 0 + offset.left,
      right = element.clientWidth - offset.right - offset.left,
      top = 0 + offset.top,
      bottom = element.clientHeight - offset.bottom - offset.top;
    context.lineWidth = styles.borderWidth;
    context.strokeStyle = styles.borderColor;
    context.fillStyle = styles.background;
    if (styles.dash) context.setLineDash(styles.dash);
    context.beginPath();
    context.roundRect(left, top, right, bottom, styles.borderRadius);
    context.fill();
    context.closePath();
    context.stroke();
    context.restore();
    //horizontal lines
    if (horizontal && horizontal.enable) {
      context.save();
      let horizonalArray = [],
        horizontalStep =
          (element.clientHeight - offset.top - offset.bottom) /
          (horizontal.step + 1),
        horizontalStepPx =
          (element.clientHeight - offset.top - offset.bottom) / horizontal.step,
        yStart = offset.top,
        horizontalStyles = {
          ...styles,
          ...(horizontal.styles || {}),
        },
        horizontalType = horizontal.type || grid.type;
      if (horizontalType === 'px') {
        for (let i = 1; i < horizontalStepPx; i++) {
          let y = yStart + i * horizontal.step;
          horizonalArray.push(y);
        }
      } else {
        for (let i = 1; i < horizontal.step + 1; i++) {
          let y = yStart + i * horizontalStep;
          horizonalArray.push(y);
        }
      }
      context.lineWidth = horizontalStyles.borderWidth;
      context.strokeStyle = horizontalStyles.borderColor;
      if (horizontalStyles.dash) {
        context.setLineDash(horizontalStyles.dash);
      }
      for (let i = 0; i <= horizonalArray.length - 1; i++) {
        context.beginPath();
        context.lineTo(0 + offset.left, horizonalArray[i]);
        context.lineTo(element.clientWidth - offset.right, horizonalArray[i]);
        context.stroke();
      }
      context.restore();
    }

    //verical lines
    if (vertical && vertical.enable) {
      context.save();
      let verticalArray = [],
        verticalStep =
          (element.clientWidth - offset.right - offset.left) /
          (vertical.step + 1),
        verticalStepPx =
          (element.clientWidth - offset.right - offset.left) / vertical.step,
        xStart = offset.left,
        verticalStyles = {
          ...styles,
          ...(vertical.styles || {}),
        },
        verticalType = vertical.type || grid.type;

      if (verticalType === 'px') {
        for (let i = 1; i < verticalStepPx; i++) {
          let x = xStart + i * vertical.step;
          verticalArray.push(x);
        }
      } else {
        for (let i = 1; i < vertical.step + 1; i++) {
          let x = xStart + i * verticalStep;
          verticalArray.push(x);
        }
      }
      context.lineWidth = verticalStyles.borderWidth;
      context.strokeStyle = verticalStyles.borderColor;
      if (verticalStyles.dash) {
        context.setLineDash(verticalStyles.dash);
      }
      for (let i = 0; i <= verticalArray.length - 1; i++) {
        context.beginPath();
        context.lineTo(verticalArray[i], 0 + offset.top);
        context.lineTo(verticalArray[i], element.clientHeight - offset.bottom);
        context.stroke();
      }
      context.restore();
    }
    context.restore();
  }
  drawLabels() {
    let { canvas, settings, data } = this,
      { labels, offset, grid } = settings,
      { element, context } = canvas,
      { enable, styles } = labels;
    if (!enable) return;
    let start = offset.left + grid.offset.left,
      end = element.clientWidth - offset.right - grid.offset.right,
      width = (end - start) / (data.labels.length - 1),
      y = element.clientHeight - offset.bottom / 2;
    data.labels.forEach((label, index) => {
      let x = start + width * index;
      context.font = '100 ' + styles.fontSize + 'px arial';
      context.fillStyle = styles.color;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(label, x, y);
    });
  }
  getDatasets() {
    let { data } = this;
    return data.datasets;
  }
  getAllValues() {
    let datasets = this.getDatasets(),
      result = datasets.reduce((acc, dataset) => {
        return [...acc, ...dataset.values];
      }, [0]);
    return result;
  }
  drawValues() {
    let { canvas, settings } = this,
      { values, offset, grid } = settings,
      { element, context } = canvas,
      { enable, styles, digits } = values;
    if (!enable) return;
    let x = offset.left / 2,
      allValues = this.getAllValues(),
      max = Math.max(...allValues),
      min = Math.min(...allValues);
    context.font = '100 ' + styles.fontSize + 'px arial';
    context.fillStyle = styles.color;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    let count = 10,
      texts = [],
      stepDiff = (max - min) / (count - 1);
    for (let i = 0; i <= count - 1; i++) {
      let value = max - stepDiff * i;
      texts.push({
        value: i === 0 ? max : i === count - 1 ? min : value,
        x,
        y: this.getInterpolation(value, allValues),
      });
    }
    texts.forEach((text) => {
      context.fillText(text.value.toFixed(digits), text.x, text.y);
    });
  }
  drawData() {
    let { settings } = this,
      { data } = settings,
      { enable } = data,
      datasets = this.getDatasets();
    if (!enable) return;
    datasets.forEach((dataset) => {
      let { type } = dataset;
      type = type.toUpperCase();
      this['draw' + type] && this['draw' + type](dataset);
    });
  }
  getDrawRect(type) {
    let { canvas, settings } = this,
      { offset, grid } = settings,
      { element, context } = canvas,
      viewRect = {
        top: offset.top + grid.styles.borderWidth,
        left: offset.left + grid.styles.borderWidth,
        right: offset.right - grid.styles.borderWidth,
        bottom: offset.bottom - grid.styles.borderWidth,
        width:
          element.clientWidth -
          offset.left -
          offset.right -
          grid.styles.borderWidth * 2,
        height:
          element.clientHeight -
          offset.top -
          offset.bottom -
          grid.styles.borderWidth * 2,
      },
      gridRect = {
        top: viewRect.top + grid.offset.top,
        left: viewRect.left + grid.offset.left,
        right: viewRect.right - grid.offset.right,
        bottom: viewRect.bottom - grid.offset.bottom,
        width: viewRect.width - grid.offset.left - grid.offset.right,
        height: viewRect.height - grid.offset.top - grid.offset.bottom,
      },
      obj = {
        view: viewRect,
        grid: gridRect,
      };
    return type && obj[type] ? obj[type] : obj;
  }
  drawLINE(dataset, allValues) {
    let { canvas, settings } = this,
      { data, offset, grid } = settings,
      { element, context } = canvas,
      { line } = data,
      { lineWidth } = line.styles,
      { values, color } = dataset,
      drawRect = this.getDrawRect('grid'),
      drawStart = drawRect.left,
      partWidth = drawRect.width / (values.length - 1);
    context.strokeStyle = dataset.color;
    context.lineWidth = lineWidth;
    context.lineJoin = 'round';
    context.beginPath();
    values.forEach((value, index) => {
      let x = drawStart + partWidth * index,
        y = this.getInterpolation(value, this.getAllValues());
      if (!index) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    });
    context.stroke();
  }
  drawBAR(dataset, allValues) {
    let { canvas, settings } = this,
      { data, offset, grid } = settings,
      { element, context } = canvas,
      { bar } = data,
      { values, color } = dataset,
      drawRect = this.getDrawRect('grid'),
      drawStart = drawRect.left,
      partWidth = drawRect.width / values.length,
      partPadding = 10;
    partWidth -= partPadding;
    context.strokeStyle = dataset.color;
    context.fillStyle = dataset.color;
    values.forEach((value, index) => {
      context.beginPath();
      let barWidth = partWidth / dataset.count - partPadding / dataset.count,
        x =
          drawStart +
          partWidth * index +
          partPadding * (index + 1) +
          barWidth * (dataset.index - 1),
        xStart = x,
        xEnd = x + barWidth,
        y = this.getInterpolation(value, this.getAllValues()),
        y0 = this.getInterpolation(0, this.getAllValues());
      context.moveTo(xStart, y0);
      context.lineTo(xStart, y);
      context.lineTo(xEnd, y);
      context.lineTo(xEnd, y0);
      context.fill();
    });
  }
  render(info = {}) {
    let time = 300;
    if (this.renderTimeout) clearTimeout(this.renderTimeout);
    this.renderTimeout = setTimeout(() => {
      super.baseRender();
      this.drawGrid();
      this.drawLabels();
      this.drawValues();
      this.drawData();
    }, time / 60);
  }
}
