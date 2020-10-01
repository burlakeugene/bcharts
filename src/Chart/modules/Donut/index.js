import Slice from '../Slice';

export default class Donut extends Slice {
  constructor(props) {
    props.type = 'donut';
    super(props);
  }
}
