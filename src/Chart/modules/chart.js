import { deepMerge } from '../common';

export default class Common {
  constructor(props) {
    let {
      canvas = false,
      data = {},
      defaultSettings = {},
      settings = {},
      actions = {},
    } = props;
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
    this.settings = defaultSettings;
    this.timeStamp = +new Date();
    this.setSettings(settings);
    this.commonInit();
  }
  setSettings(newSettings = {}) {
    deepMerge(this.settings, newSettings);
    this.render();
  }
  getSettings() {
    return this.settings;
  }
  setData(data) {
    this.data = data;
    this.render();
  }
  getData() {
    return this.data;
  }
  setRatio() {
    let { canvas } = this,
      { context, element } = canvas,
      ratio = window.devicePixelRatio || 1;
    element.width = element.clientWidth * ratio;
    element.height = element.clientHeight * ratio;
    context.scale(ratio, ratio);
  }
  clearCanvas() {
    let { canvas } = this,
      { context, element } = canvas;
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
  commonInit() {
    this.commonListeners();
    this.render();
  }
  commonListeners() {
    let { canvas } = this,
      { context, element } = canvas;
    window.addEventListener('resize', () => {
      this.render();
    });
    element.addEventListener('mousemove', (e) => {
      let { settings } = this,
        elementOffset = element.getBoundingClientRect(),
        x = e.clientX - elementOffset.left,
        y = e.clientY - elementOffset.top;
      this.cursor = {
        x,
        y,
      };
      this.render();
    });
    element.addEventListener('mouseout', (e) => {
      this.cursor = {
        x: 0,
        y: 0,
      };
      this.render();
    });
  }
  commonRender() {
    this.setRatio();
    this.clearCanvas();
  }
}
