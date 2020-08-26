import { generateRandomColor, generateDate, deepMerge } from '../common';

export default class Pie {
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
    this.data = this.prepareData(data);
    this.settings = {
      offset: { ...offset },
      view: {
        styles: {
          background: '#1a1e30',
        },
      },
      line: {
        styles: {
          width: 20,
          color: '#fff',
          background: 'transparent'
        }
      },
      timeStamp: +new Date(),
    };
    this.setSettings(settings);
    this.init();
  }
  prepareData(data){
    data = data.map((item) => {
      item.color = item.color || generateRandomColor();
      return item;
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
  drawDonut() {
    let { canvas, settings } = this,
      { offset, line } = settings,
      { context, element } = canvas,
      sideSize = Math.min(
        element.clientHeight - offset.top - offset.bottom - line.styles.width,
        element.clientWidth - offset.left - offset.right - line.styles.width
      ),
      half = sideSize / 2,
      radius = half > 0 ? half : 1,
      x = element.clientWidth / 2 + offset.left - offset.right,
      y = element.clientHeight / 2 + offset.top - offset.bottom;
    context.beginPath();
    context.strokeStyle = line.styles.color;
    context.lineWidth = line.styles.width;
    context.fillStyle = line.styles.background;
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
  }
  listeners() {}
}
