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
  render(){
    super.baseRender();
  }
}
