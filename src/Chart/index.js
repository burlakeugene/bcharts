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
      styles: {
        background: '#000000',
        lineColor: '#ffffff',
        lineWidth: 3
      },
      tick: 1000,
      dots: []
    };
    this.intervals = {};
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
    this.render();
  }
  clearCanvas() {
    let { canvas } = this.state,
      width = canvas.element.width;
    canvas.context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.element.width = 1;
    canvas.element.width = width;
  }
  resize() {
    this.render();
  }
  init() {
    let { canvas } = this.state;
    window.addEventListener('resize', this.resize.bind(this));
    this.render();
    this.runDotsReceive();
  }
  render() {
    this.clearCanvas();
    this.renderBackground();
    this.renderLine();
    this.renderDot();
    requestAnimationFrame(this.render.bind(this));
  }
  renderDot() {}
  renderBackground() {
    let { canvas, styles } = this.state,
      { context, element } = canvas,
      { background } = styles;
    element.width = element.clientWidth;
    element.height = element.clientHeight;
    context.fillStyle = background;
    context.fillRect(0, 0, element.width, element.height);
  }
  renderLine() {
    let { canvas, dots, styles } = this.state,
      { background, lineColor, lineWidth } = styles,
      { context, element } = canvas;
    if (!dots.length) return;
    let gradient = context.createLinearGradient(0, 0, 0, element.height);
    gradient.addColorStop(0, lineColor);
    gradient.addColorStop(1, background);
    context.fillStyle = gradient;
    context.strokeStyle = lineColor;
    context.lineWidth = lineWidth;
    context.moveTo(Math.random(), Math.random());
    context.beginPath();
    for (let i = 0; i < dots.length; i++) {
      let dot = dots[i],
        prevDot = dots[i - 1];
      context.lineTo(
        Math.random() * dots.length * 100,
        Math.random() * dots.length * 100
      );
      // context.bezierCurveTo(
      // );
    }
    context.fill();
    context.stroke();
  }
}
