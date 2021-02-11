import { generateRandomColor } from '../../common';
import defaultSettings from './defaultSettings';
import Chart from '../chart';

export default class Example extends Chart {
  constructor(props) {
    props.defaultSettings = defaultSettings;
    super(props);
  }
  prepareData(data = []) {
    data.forEach((item) => {
      item.color = item.color || generateRandomColor();
      item.state = item.state || 0;
    });
    return data;
  }
  drawTooltip() {}
  drawRadar() {
    let { canvas, settings, data, cursor, type, state } = this,
      { context, element } = canvas,
      sideSize =
        Math.min(
          element.clientHeight - settings.offset.top - settings.offset.bottom,
          element.clientWidth - settings.offset.left - settings.offset.right
        ) * state.loading,
      sliceWidth = sideSize / 2,
      radius = sideSize / 4,
      x =
        element.clientWidth / 2 + settings.offset.left - settings.offset.right,
      y =
        element.clientHeight / 2 + settings.offset.top - settings.offset.bottom,
      { volumed } = settings.data,
      piOffset = -(Math.PI / 2);
    data = this.prepareData(data);
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
