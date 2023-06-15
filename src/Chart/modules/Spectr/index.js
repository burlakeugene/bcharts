import defaultSettings from './defaultSettings';
import Chart from '../chart';

import {
  generateRandomColor,
  getPointOnArc,
  intersectionPolygon,
  colorChangeTone,
} from '../../common';

export default class Example extends Chart {
  constructor(props) {
    props.defaultSettings = defaultSettings;
    super(props);
  }
  getCoords() {
    let { canvas, settings } = this,
      { context, element } = canvas,
      width = Math.min(
        element.clientHeight - settings.offset.top - settings.offset.bottom,
        element.clientWidth - settings.offset.left - settings.offset.right
      ),
      x =
        element.clientWidth / 2 + settings.offset.left - settings.offset.right,
      y =
        element.clientHeight / 2 + settings.offset.top - settings.offset.bottom,
      piStart = -(Math.PI / 2),
      piPart = (Math.PI * 2) / settings.top.count;
    return {
      width,
      widthHalf: width / 2,
      x,
      y,
      piStart,
      piPart,
    };
  }
  drawTooltip() {}
  draw() {
    const { canvas, settings } = this;
    const { styles, count, top } = settings;
    const { context } = canvas;
    const coords = this.getCoords();

    for (let i = 0; i <= count - 1; i++) {
      context.strokeStyle = styles.color;
      context.lineWidth = styles.width;
      context.beginPath();

      for (let i = 0; i <= top.count - 1; i++) {
        let point = getPointOnArc(
          coords.x,
          coords.y,
          coords.widthHalf * Math.min(1, Math.random() + 0.3),
          coords.piStart + coords.piPart * i
        );

        if (!i) {
          context.moveTo(point.x, point.y);
        } else {
          context.lineTo(point.x, point.y);
        }
      }

      context.closePath();
      context.stroke();
    }
  }
  render(info = {}) {
    let time = 300;
    if (this.renderTimeout) clearTimeout(this.renderTimeout);
    this.renderTimeout = setTimeout(() => {
      super.baseRender();
      this.draw();
      this.drawTooltip();
    }, time / 60);
  }
}
