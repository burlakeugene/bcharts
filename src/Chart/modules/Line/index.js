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

export default class Line extends Chart {
  constructor(props){
    props.defaultSettings = defaultSettings;
    super(props);
  }
  drawBackground() {
    let { canvas, settings } = this,
      { view } = settings,
      { context, element } = canvas,
      { background } = view.styles;
    context.fillStyle = background;
    context.fillRect(0, 0, element.width, element.height);
  }
  render(){
    super.commonRender();
    this.drawBackground();
  }
}
