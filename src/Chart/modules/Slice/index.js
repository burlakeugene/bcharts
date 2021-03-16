import {
  generateRandomColor,
  generateDate,
  getPointOnArc,
  colorChangeTone,
  getContrastColor,
  intersectionPolygon,
} from '../../common';
import defaultSettings from './defaultSettings';
import Chart from '../chart';

export default class Slices extends Chart {
  constructor(props) {
    props.defaultSettings = defaultSettings;
    super(props);
  }
  prepareData(data = []) {
    data = data.filter((item) => {
      return item.value > 0;
    });
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
  drawSlices() {
    let { canvas, settings, data, cursor, type, state } = this,
      { context, element } = canvas,
      sideSize =
        Math.min(
          element.clientHeight -
            settings.offset.top -
            settings.offset.bottom -
            (type === 'donut' ? settings.data.styles.width : 0),
          element.clientWidth -
            settings.offset.left -
            settings.offset.right -
            (type === 'donut' ? settings.data.styles.width : 0)
        ) * state.loading,
      sliceWidth,
      radius,
      x =
        element.clientWidth / 2 + settings.offset.left - settings.offset.right,
      y =
        element.clientHeight / 2 + settings.offset.top - settings.offset.bottom,
      { volumed } = settings.data,
      piOffset = -(Math.PI / 2);
    if (type === 'pie') {
      sliceWidth = sideSize / 2;
      radius = sideSize / 4;
    }
    if (type === 'donut') {
      if (settings.data.styles.width >= sideSize) {
        sliceWidth = sideSize;
      } else {
        sliceWidth = settings.data.styles.width;
      }
      radius = sideSize / 2;
    }
    for (let i = 0; i <= data.length - 1; i++) {
      let startPi = piOffset,
        endPi =
          (2 * Math.PI * state.loading * data[i].percent) / 100 + piOffset,
        hoveredValue = settings.data.hover.value * data[i].state;
      data[i].startPi = startPi;
      data[i].endPi = endPi;
      piOffset = endPi;
      let polygon = this.generatePolygon({
          x,
          y,
          radius: radius + hoveredValue / 2,
          sliceWidth: sliceWidth + hoveredValue,
          startPi,
          endPi,
        }),
        mouseInPath = intersectionPolygon({
          x: cursor.x,
          y: cursor.y,
          polygon,
        });
      data[i].polygon = polygon;
      data[i].hovered = mouseInPath;

      super.hover({
        item: data[i],
        isHovered: data[i].hovered,
      });

      let ring = [];
      ring.push({
        radius: radius + hoveredValue / 2,
        width: sliceWidth + hoveredValue,
        color: colorChangeTone(data[i].color, hoveredValue),
        x,
        y,
        startPi,
        endPi,
      });
      if (volumed) {
        let volumeRadius, volumeWidth;
        if (type === 'donut') {
          volumeRadius = radius - sliceWidth / 4 + hoveredValue / 2;
          volumeWidth = sliceWidth / 2 + hoveredValue;
        }
        if (type === 'pie') {
          volumeRadius = radius - sliceWidth / 6 + hoveredValue / 2;
          volumeWidth = volumeRadius * 2;
        }
        ring.push({
          radius: volumeRadius,
          width: volumeWidth,
          color: colorChangeTone(data[i].color, -50 + hoveredValue),
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
    }
    if (settings.texts.slicePercent.enable) {
      for (let i = 0; i <= data.length - 1; i++) {
        context.font =
          '100 ' + settings.texts.slicePercent.styles.fontSize + 'px arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = settings.texts.slicePercent.styles.color;
        let percentRadius = radius,
          hoveredValue = settings.data.hover.value * data[i].state;
        if (type === 'donut' && volumed) {
          percentRadius += sliceWidth / 4 + hoveredValue;
        }
        if (type === 'donut' && !volumed) {
          percentRadius += hoveredValue / 2;
        }
        if (type === 'pie' && volumed) {
          percentRadius += sliceWidth / 3 + hoveredValue;
        }
        if (type === 'pie' && !volumed) {
          percentRadius += hoveredValue / 2;
        }
        let pointText = parseFloat(data[i].percent.toFixed(2)) + '%',
          point = getPointOnArc(
            x,
            y,
            percentRadius,
            (data[i].startPi + data[i].endPi) / 2
          );
        context.fillText(pointText, point.x, point.y);
      }
    }
    //draw center
    if (settings.texts.center.enable) {
      context.font =
        '800 ' +
        settings.texts.center.styles.fontSize * state.loading +
        'px arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = settings.texts.center.styles.color;
      context.fillText(settings.texts.center.text, x, y);
    }
  }
  drawTooltip() {
    let hovered = this.data.find((item) => {
      return item.hovered;
    });
    if (hovered) {
      super.drawTooltip({
        title: {
          text: hovered.label,
        },
        panels: [
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
              text: 'Total: ' + hovered.total,
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
    this.renderTimeout = setTimeout(() => {
      super.baseRender();
      this.drawSlices();
      this.drawTooltip();
    }, time / 60);
  }
}
