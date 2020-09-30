import {
  generateRandomColor,
  generateDate,
  getPointOnArc,
  colorChangeTone,
  getContrastColor,
} from '../../common';
import defaultSettings from './defaultSettings';
import Chart from '../chart';

export default class Donut extends Chart {
  constructor(props) {
    props.defaultSettings = defaultSettings;
    super(props);
  }
  prepareData(data = []) {
    let sum = data.reduce(
      (acc, item) => acc + (parseFloat(item.value) || 0),
      0
    );
    data.forEach((item) => {
      item.percent = (100 / sum) * item.value;
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
  generatePolygon({ count = 20, x, y, radius, lineWidth, startPi, endPi }) {
    let polygon = [],
      temp = (endPi - startPi) / count;
    temp = isFinite(temp) ? temp : 0;
    for (let i = 0; i <= count; i++) {
      polygon.push(
        getPointOnArc(x, y, radius + lineWidth / 2, startPi + temp * i)
      );
    }
    for (let i = 0; i <= count; i++) {
      polygon.push(
        getPointOnArc(x, y, radius - lineWidth / 2, endPi - temp * i)
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
  drawDonut() {
    let { canvas, settings, data, cursor } = this,
      { offset, line, texts, hoverPanel } = settings,
      { context, element } = canvas,
      sideSize = Math.min(
        element.clientHeight - offset.top - offset.bottom - line.styles.width,
        element.clientWidth - offset.left - offset.right - line.styles.width
      ),
      half = sideSize / 2,
      radius = half > 0 ? half : 1,
      x = element.clientWidth / 2 + offset.left - offset.right,
      y = element.clientHeight / 2 + offset.top - offset.bottom,
      lineWidth = line.styles.width,
      { animated, volumed } = line,
      hoveredValue = 20;
    data = this.prepareData(data);
    let piOffset = -(Math.PI / 2);
    for (let i = 0; i <= data.length - 1; i++) {
      let startPi = piOffset,
        endPi = (2 * Math.PI * data[i].percent) / 100 + piOffset;
      piOffset = endPi;
      let polygon = this.generatePolygon({
          x,
          y,
          radius,
          lineWidth,
          startPi,
          endPi,
        }),
        mouseInPath =
          hoverPanel.enable &&
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
            setTimeout(() => {
              data[i].state += 1;
              this.render();
            }, 1000 / 60);
          }
        } else {
          data[i].state = hoveredValue;
        }
      } else {
        if (animated) {
          if (data[i].state > 0) {
            setTimeout(() => {
              data[i].state -= 1;
              this.render();
            }, 1000 / 60);
          }
          else if(data[i].state <= 0){
            data[i].state = 0;
          }
        } else {
          data[i].state = 0;
        }
      }

      //draw arc
      context.save();
      context.beginPath();
      context.strokeStyle = colorChangeTone(data[i].color, data[i].state);
      context.lineWidth = lineWidth;
      context.fillStyle = 'transparent';
      context.arc(x, y, radius + data[i].state, startPi, endPi);
      context.fill();
      context.stroke();
      context.restore();

      // draw inner arc
      if (volumed) {
        context.save();
        context.beginPath();
        context.strokeStyle = colorChangeTone(
          data[i].color,
          -50 + data[i].state
        );
        context.lineWidth = lineWidth / 2 + data[i].state;
        context.fillStyle = 'transparent';
        let innerRadius = radius - lineWidth / 4;
        if (innerRadius < 0) innerRadius = 0;
        context.arc(x, y, innerRadius + data[i].state / 2, startPi, endPi);
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
            radius + lineWidth,
            (startPi + endPi) / 2
          );
        context.fillText(pointText, point.x, point.y);
      }
    }
    //draw center
    if (texts.center.enable) {
      context.font = '800 20px arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = texts.center.styles.color;
      context.fillText(texts.center.text, x, y);
    }
  }
  drawHoverPanel() {
    let { canvas, settings, data = [], cursor } = this,
      { element, context } = canvas,
      { hoverPanel } = settings,
      hovered = data.filter((d) => {
        return d.hovered;
      });
    hovered = hovered.length ? hovered[0] : false;
    if (hovered && hoverPanel && hoverPanel.enable) {
      let texts = [
        hovered.label,
        hovered.value,
        parseFloat(hovered.percent.toFixed(2)) + '%',
      ];
      context.font = '100 12px arial';
      let width =
          Math.max(
            ...texts.map((text) => {
              return context.measureText(text).width;
            })
          ) + 14,
        height = 18 * texts.length,
        leftCenter = cursor.x,
        topOffset = 10,
        left = cursor.x - width / 2,
        invert = false,
        top = cursor.y - height - topOffset;
      if (top < 0) {
        invert = true;
        top = cursor.y + topOffset;
      }
      if (left + width > element.clientWidth) {
        left = element.clientWidth - width;
      }
      if (left < 0) left = 0;
      context.strokeStyle = context.fillStyle = hoverPanel.styles.background;
      context.beginPath();
      if (invert) {
        context.moveTo(leftCenter, top - 5);
        context.lineTo(leftCenter - 5, top);
        context.lineTo(leftCenter + 5, top);
      } else {
        context.moveTo(leftCenter, top + height + 5);
        context.lineTo(leftCenter - 5, top + height);
        context.lineTo(leftCenter + 5, top + height);
      }
      context.fill();
      context.stroke();
      context.beginPath();
      context.roundRect(
        left,
        top,
        width,
        height,
        hoverPanel.styles.borderRadius
      );
      context.fill();
      context.stroke();
      context.font = '100 12px arial';
      context.textAlign = 'left';
      context.textBaseline = 'middle';
      context.fillStyle = hoverPanel.styles.color;
      texts.forEach((text, i) => {
        context.fillText(text, left + 7, top + 14 * (i + 1));
      });
    }
  }
  render() {
    if (this.renderTimeout) clearTimeout(this.renderTimeout);
    this.renderTimeout = setTimeout(() => {
      super.commonRender();
      this.drawBackground();
      this.drawDonut();
      this.drawHoverPanel();
    }, 0);
  }
}
