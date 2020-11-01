import {
  generateRandomColor,
  generateDate,
  getPointOnArc,
  colorChangeTone,
  getContrastColor,
} from '../../common';
import defaultSettings from './defaultSettings';
import Chart from '../chart';

export default class Slices extends Chart {
  constructor(props) {
    props.defaultSettings = defaultSettings;
    super(props);
  }
  prepareData(data = []) {
    let total = data.reduce(
      (acc, item) => acc + (parseFloat(item.value) || 0),
      0
    );
    data.forEach((item) => {
      item.percent = (100 / total) * item.value;
      item.total = total;
      item.color = item.color || generateRandomColor();
      item.state = item.state || 0;
    });
    return data;
  }
  drawBackground() {
    let { canvas, settings } = this,
      { view } = settings,
      { context, element } = canvas,
      { background } = view.styles;
    context.fillStyle = background;
    context.fillRect(0, 0, element.width, element.height);
  }
  generatePolygon({ count = 20, x, y, radius, sliceWidth, startPi, endPi }) {
    let polygon = [],
      temp = (endPi - startPi) / count;
    temp = isFinite(temp) ? temp : 0;
    for (let i = 0; i <= count; i++) {
      polygon.push(
        getPointOnArc(x, y, radius + sliceWidth / 2, startPi + temp * i)
      );
    }
    for (let i = 0; i <= count; i++) {
      polygon.push(
        getPointOnArc(x, y, radius - sliceWidth / 2, endPi - temp * i)
      );
    }
    return polygon;
  }
  isPathHover({ x, y, polygon }) {
    var inside = false;
    for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      var xi = polygon[i].x,
        yi = polygon[i].y;
      var xj = polygon[j].x,
        yj = polygon[j].y;
      var intersect =
        yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  }
  drawSlices() {
    let { canvas, settings, data, cursor, type, state } = this,
      { offset, slice, texts, tooltip, animated } = settings,
      { context, element } = canvas,
      sideSize =
        Math.min(
          element.clientHeight -
            offset.top -
            offset.bottom -
            (type === 'donut' ? slice.styles.width : 0),
          element.clientWidth -
            offset.left -
            offset.right -
            (type === 'donut' ? slice.styles.width : 0)
        ) * state.loading,
      sliceWidth,
      radius,
      x = element.clientWidth / 2 + offset.left - offset.right,
      y = element.clientHeight / 2 + offset.top - offset.bottom,
      { volumed } = slice,
      hoveredValue = 20,
      piOffset = -(Math.PI / 2);
    data = this.prepareData(data);
    if (type === 'pie') {
      sliceWidth = sideSize / 2;
      radius = sideSize / 4;
    }
    if (type === 'donut') {
      if (slice.styles.width >= sideSize) {
        sliceWidth = sideSize;
      } else {
        sliceWidth = slice.styles.width;
      }
      radius = sideSize / 2;
    }
    for (let i = 0; i <= data.length - 1; i++) {
      let startPi = piOffset,
        endPi = (2 * Math.PI * data[i].percent) / 100 + piOffset;
      piOffset = endPi;
      let polygon = this.generatePolygon({
          x,
          y,
          radius,
          sliceWidth,
          startPi,
          endPi,
        }),
        mouseInPath =
          tooltip.enable &&
          this.isPathHover({
            x: cursor.x,
            y: cursor.y,
            polygon,
          });
      data[i].polygon = polygon;
      data[i].hovered = mouseInPath;

      //change color on hover
      if (data[i].hovered) {
        if (animated) {
          if (data[i].state < hoveredValue) {
            data[i].state += 1;
            this.render({
              from: 'Animated increase state',
            });
          }
        } else {
          data[i].state = hoveredValue;
          this.render({
            from: 'Increase state',
          });
        }
      } else {
        if (animated) {
          if (data[i].state > 0) {
            data[i].state -= 1;
            this.render({
              from: 'Animated decrease state',
            });
          }
        } else {
          data[i].state = 0;
          this.render({
            from: 'Decrease state',
          });
        }
      }

      let ring = [];

      ring.push({
        radius: radius + data[i].state / 2,
        width: sliceWidth + data[i].state,
        color: colorChangeTone(data[i].color, data[i].state),
        x,
        y,
        startPi,
        endPi,
      });
      if (volumed) {
        let volumeRadius, volumeWidth;
        if (type === 'donut') {
          volumeRadius = radius - sliceWidth / 4 + data[i].state / 2;
          volumeWidth = sliceWidth / 2 + data[i].state;
        }
        if (type === 'pie') {
          volumeRadius = radius - sliceWidth / 6 + data[i].state / 2;
          volumeWidth = volumeRadius * 2;
        }
        ring.push({
          radius: volumeRadius,
          width: volumeWidth,
          color: colorChangeTone(data[i].color, -50 + data[i].state),
          x,
          y,
          startPi,
          endPi,
        });
      }

      for (let r = 0; r <= ring.length - 1; r++) {
        context.save();
        context.beginPath();
        context.strokeStyle = ring[r].color;
        context.lineWidth = ring[r].width;
        context.fillStyle = 'transparent';
        context.arc(
          ring[r].x,
          ring[r].y,
          ring[r].radius > 0 ? ring[r].radius : 0,
          ring[r].startPi,
          ring[r].endPi
        );
        context.fill();
        context.stroke();
        context.restore();
      }

      //draw percent
      if (texts.partPercent.enable) {
        context.font = '100 10px arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = texts.partPercent.styles.color;
        let pointText = parseFloat(data[i].percent.toFixed(2)) + '%',
          point = getPointOnArc(
            x,
            y,
            radius + sliceWidth,
            (startPi + endPi) / 2
          );
        context.fillText(pointText, point.x, point.y);
      }
    }
    //draw center
    if (type === 'donut' && texts.center.enable) {
      context.font = '800 ' + 20 * state.loading + 'px arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = texts.center.styles.color;
      context.fillText(texts.center.text, x, y);
    }
  }
  drawTooltip() {
    let texts = [],
      hovered = this.data.find((item) => {
        return item.hovered;
      });
    if (hovered) {
      super.drawTooltip({
        title: {
          text: hovered.label,
        },
        elements: [
          {
            colorPanel: {
              color: hovered.color,
            },
            texts: [
              {
                text: 'Value: ' + hovered.value,
              },
              {
                text: 'Percent: ' + hovered.percent.toFixed(2) + '%',
              },
            ],
            footer: {
              text: 'Total: '+hovered.total,
            },
          },
        ],
        render: (obj) => {},
      });
    }
  }
  render(info = {}) {
    let time = 300;
    if (this.renderTimeout) clearTimeout(this.renderTimeout);
    // console.log('render ' + info.from);
    this.renderTimeout = setTimeout(() => {
      super.commonRender();
      this.drawBackground();
      this.drawSlices();
      this.drawTooltip();
    }, time / 60);
  }
}
