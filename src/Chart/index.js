export default class Chart {
  constructor({ canvas = false }) {
    this.state = {
      canvas: {
        element: canvas,
        context: canvas.getContext('2d'),
        isCanvas:
          (canvas instanceof Element || canvas instanceof HTMLDocument) &&
          canvas.tagName.toLowerCase() === 'canvas'
      },
      indicator: {
        styles: {
          color: '#27ca5d',
          width: 2
        },
        animation: {
          time: 1000,
          scaleTo: 5
        }
      },
      styles: {
        background: '#000000',
        lineColor: '#ffffff',
        lineWidth: 1
      },
      offset: {
        right: 20,
        left: 100,
        top: 20,
        bottom: 20
      },
      tick: 1000,
      dots: []
    };
    this.checkErrors();
    this.init();
  }
  checkErrors() {
    let { canvas } = this.state;
    if (!canvas.isCanvas)
      throw new Error(canvas.element + ' is not a canvas element');
  }
  newDot() {
    let { dots } = this.state,
      lastDot = dots[dots.length - 1],
      dot = Math.random() * (Math.random() > 0.5 ? -1 : 1),
      newDot = Math.abs((lastDot ? lastDot.value : 0) + dot);
    dots.push({
      value: newDot,
      time: +new Date()
    });
    this.setState({
      dots
    });
  }
  runDotsReceive() {
    let { tick } = this.state;
    setInterval(() => {
      this.newDot();
    }, tick);
  }
  setState(options, callback) {
    for (let option in options) {
      this.state[option] = options[option];
    }
    callback && callback();
  }
  clearCanvas() {
    let { canvas } = this.state,
      width = canvas.element.width;
    canvas.context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.element.width = 1;
    canvas.element.width = width;
  }
  resize() {}
  init() {
    window.addEventListener('resize', this.resize.bind(this));
    this.render();
    this.runDotsReceive();
  }
  render() {
    this.clearCanvas();
    this.drawBackground();
    this.drawLine();
    this.drawIndicator();
    requestAnimationFrame(this.render.bind(this));
  }
  getIndicatorCords() {
    let { canvas, indicator, offset } = this.state,
      { element } = canvas,
      { styles } = indicator;
    return {
      x: element.clientWidth - offset.right - styles.width / 2,
      y: element.clientHeight / 2
    };
  }
  drawIndicator() {
    let { x, y } = this.getIndicatorCords(),
      { indicator, canvas } = this.state,
      { styles, animation } = indicator,
      { context } = canvas;
    context.strokeStyle = 'transparent';

    context.save();
    if (!this.indicatorAnimatedState || this.indicatorAnimatedState >= 1)
      this.indicatorAnimatedState = 0;
    context.globalAlpha = 1 - this.indicatorAnimatedState;
    context.beginPath();
    context.arc(
      x,
      y,
      styles.width * this.indicatorAnimatedState * animation.scaleTo,
      0,
      2 * Math.PI
    );
    context.fillStyle = styles.color;
    context.fill();
    context.stroke();
    this.indicatorAnimatedState += 1 / 60 / (animation.time / 1000);
    context.restore();

    context.beginPath();
    context.arc(x, y, styles.width, 0, 2 * Math.PI);
    context.fillStyle = styles.color;
    context.fill();
    context.stroke();
  }
  drawBackground() {
    let { canvas, styles } = this.state,
      { context, element } = canvas,
      { background } = styles;
    element.width = element.clientWidth;
    element.height = element.clientHeight;
    context.fillStyle = background;
    context.fillRect(0, 0, element.width, element.height);
  }
  drawLine() {
    let { canvas, dots, styles, offset } = this.state,
      { background, lineColor, lineWidth } = styles,
      { context, element } = canvas;
    if (!dots.length) return;
    let max = (min = dots[dots.length - 1].value),
      mid = dots[dots.length - 1].value,
      min = dots[dots.length - 1].value,
      maxHeight = 0,
      minHeight = 0;
    for (let i = dots.length - 1; i >= 0; i--) {
      if (dots[i].value > max) max = dots[i].value;
      if (dots[i].value < min) min = dots[i].value;
    }
    let boxWidth = (offset.left || 0) / dots.length - 1;
    for (let i = dots.length - 1; i >= 0; i--) {
      dots[i].x =
        element.clientWidth -
        (element.clientWidth / (dots.length - 1) - boxWidth) * (dots.length - i - 1) -
        offset.right;
      dots[i].y =
        element.clientHeight -
        element.clientHeight *
          (((dots[i].value - min) * 100) / (max - min) / 100);
      if (dots[i].y < element.clientHeight / 2) {
        dots[i].y += offset.top || 0;
      } else {
        dots[i].y -= offset.bottom || 0;
      }
    }

    // let gradient = context.createLinearGradient(0, minHeight, 0, maxHeight);
    // gradient.addColorStop(0, lineColor);
    // gradient.addColorStop(1, background);

    context.beginPath();
    // context.fillStyle = gradient;
    context.strokeStyle = lineColor;
    context.lineWidth = lineWidth;
    // context.moveTo(dots[dots.length - 1].x, dots[dots.length - 1].y);
    for (let i = dots.length - 1; i >= 0; i--) {
      let dot = dots[i];
      context.lineTo(dot.x, dot.y);
      // context.bezierCurveTo(
      // );
    }
    context.fill();
    context.stroke();
  }
}
