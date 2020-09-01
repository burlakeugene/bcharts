import {
  generateRandomColor,
  generateDate,
  deepMerge,
  getPointOnArc,
} from '../common';

export default class Donut {
  constructor({
    canvas = false,
    data = [],
    settings = {},
    offset = {
      top: 30,
      right: 30,
      bottom: 30,
      left: 30,
    },
    actions = {},
  }) {
    this.actions = actions;
    this.canvas = {
      element: canvas,
      context: canvas.getContext('2d'),
      isCanvas:
        (canvas instanceof Element || canvas instanceof HTMLDocument) &&
        canvas.tagName.toLowerCase() === 'canvas',
    };
    this.data = data;
    this.cursor = { x: 0, y: 0 };
    this.settings = {
      offset: { ...offset },
      view: {
        styles: {
          background: '#1a1e30',
        },
      },
      line: {
        styles: {
          width: 60,
          color: '#fff',
          background: 'transparent',
        },
      },
      texts: {
        center: {
          enable: true,
          text: '100%',
          styles: {
            font: '800 20px arial',
            textAlign: 'center',
            textBaseline: 'middle',
            color: '#fff',
          },
        },
        partPercent: {
          enable: true,
          styles: {
            font: '100 10px arial',
            textAlign: 'center',
            textBaseline: 'middle',
            color: '#fff',
          },
        },
      },
      timeStamp: +new Date(),
    };
    this.setSettings(settings);
    this.init();
  }
  prepareData(data = []) {
    let sum = data.reduce(
      (acc, item) => acc + (parseFloat(item.value) || 0),
      0
    );
    data.forEach((item) => {
      item.percent = (100 / sum) * item.value;
      item.color = item.color || generateRandomColor();
    });
    return data;
  }
  setSettings(newSettings = {}) {
    if (newSettings.offset) {
      newSettings.line = {};
      newSettings.line.offset = newSettings.offset;
    }
    deepMerge(this.settings, newSettings);
  }
  getSettings() {
    return this.settings;
  }
  setData(data) {
    this.data = data;
  }
  getData() {
    return this.data;
  }
  init() {
    this.listeners();
    this.render();
  }
  render() {
    this.drawBackground();
    this.drawDonut();
    requestAnimationFrame(this.render.bind(this));
  }
  drawBackground() {
    let { canvas, settings } = this,
      { view } = settings,
      { context, element } = canvas,
      { background } = view.styles,
      ratio = window.devicePixelRatio || 1;
    element.width = element.clientWidth * ratio;
    element.height = element.clientHeight * ratio;
    context.scale(ratio, ratio);
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
        getPointOnArc(x, y, radius - lineWidth * 1.5, endPi - temp * i)
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
      { offset, line, texts } = settings,
      { context, element } = canvas,
      sideSize = Math.min(
        element.clientHeight - offset.top - offset.bottom - line.styles.width,
        element.clientWidth - offset.left - offset.right - line.styles.width
      ),
      half = sideSize / 2,
      radius = half > 0 ? half : 1,
      x = element.clientWidth / 2 + offset.left - offset.right,
      y = element.clientHeight / 2 + offset.top - offset.bottom,
      lineWidth = line.styles.width / 2;
    data = this.prepareData(data);
    let piOffset = -(Math.PI / 2);
    //draw center
    if (texts.center.enable) {
      context.font = texts.center.styles.font;
      context.fillStyle = texts.center.styles.color;
      context.textAlign = texts.center.styles.textAlign;
      context.textBaseline = texts.center.styles.textBaseline;
      context.fillText(texts.center.text, x, y);
    }
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
        mouseInPath = this.isPathHover({
          x: cursor.x,
          y: cursor.y,
          polygon,
        });

      //draw arc
      context.save();
      context.beginPath();
      if(mouseInPath) context.filter = 'brightness(120%)';
      context.strokeStyle = data[i].color;
      context.lineWidth = lineWidth;
      context.fillStyle = line.styles.background;
      context.arc(x, y, radius, startPi, endPi);
      context.fill();
      context.stroke();
      context.restore();

      //draw inner arc
      context.save();
      context.beginPath();
      context.filter = mouseInPath ? 'brightness(70%)' : 'brightness(50%)';
      context.strokeStyle = data[i].color;
      context.lineWidth = lineWidth;
      context.fillStyle = line.styles.background;
      context.arc(
        x,
        y,
        radius - lineWidth > 0 ? radius - lineWidth : 1,
        startPi,
        endPi
      );
      context.fill();
      context.stroke();
      context.restore();

      //draw percent
      if (texts.partPercent.enable) {
        context.font = texts.partPercent.styles.font;
        context.fillStyle = texts.partPercent.styles.color;
        context.textAlign = texts.partPercent.styles.textAlign;
        context.textBaseline = texts.partPercent.styles.textBaseline;
        let pointText = parseFloat(data[i].percent.toFixed(2)) + '%',
          point = getPointOnArc(
            x,
            y,
            radius +
              lineWidth / 2 +
              context.measureText(pointText).width / 2 +
              5,
            (startPi + endPi) / 2
          );
        context.fillText(pointText, point.x, point.y);
      }
    }
  }
  listeners() {
    let { canvas, data } = this,
      { context, element } = canvas;
    element.addEventListener('mousemove', (e) => {
      let { settings } = this,
        elementOffset = element.getBoundingClientRect(),
        x = e.clientX - elementOffset.left,
        y = e.clientY - elementOffset.top;
      this.cursor = {
        x,
        y,
      };
    });
    element.addEventListener('mouseout', (e) => {
      this.cursor = {
        x: 0,
        y: 0,
      };
    });
  }
}
