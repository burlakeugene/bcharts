import Slice from '../Slice';

export default class Pie extends Slice {
  constructor(props) {
    props.type = 'pie';
    super(props);
  }
}
