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
        lineWidth: 1,
        gradient: false
      },
      offset: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20
      },
      tick: 1000,
      dotsLimit: 30,
      dotsOffset: 0,
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
  newDot(value) {
    let { dots } = this.getDots('all'),
      { dotsOffset, tick } = this.state,
      lastDot = dots[dots.length - 1],
      prevValue = lastDot ? lastDot.value : 0,
      randomValue = Math.random() * (Math.random() > 0.5 ? -1 : 1),
      time = +new Date();
    value = value || prevValue + randomValue;
    if (dotsOffset) dotsOffset++;
    dots.push({
      value,
      animatedValue: prevValue,
      step: ((value - prevValue) / 60) * (tick / 1000),
      time
    });
    this.setState({
      dotsOffset,
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
    this.listeners();
    this.render();
    this.runDotsReceive();
  }
  listeners() {
    let { canvas } = this.state,
      { element } = canvas,
      pushed = false,
      x = 0;
    element.addEventListener('mousedown', e => {
      pushed = true;
      x = e.clientX;
    });
    element.addEventListener('mouseup', e => {
      pushed = false;
      x = 0;
    });
    element.addEventListener('mousemove', e => {
      let {dotsOffset} = this.state;
      if(pushed){
        dotsOffset += e.clientX - x;
        x = e.clientX;
        this.setState({
          dotsOffset: dotsOffset >= 0 ? dotsOffset : 0
        })
      }
    });
  }
  render() {
    this.clearCanvas();
    this.drawBackground();
    this.drawLine();
    this.drawIndicator();
    requestAnimationFrame(this.render.bind(this));
  }
  getDots(type) {
    let { dots, dotsOffset, dotsLimit } = this.state,
      draw = [...dots];
    if (dotsOffset) {
      let rest = draw.length - dotsOffset,
        moreThenLimit = rest > dotsLimit;
      if(!moreThenLimit){
        dotsOffset = draw.length - dotsLimit;
        this.setState({
          dotsOffset
        })
      }
      draw = draw.slice(0, moreThenLimit ? rest : dotsLimit);
    }
    if (draw.length > dotsLimit) {
      draw = draw.slice(draw.length - dotsLimit, draw.length);
    }
    let drawMax = draw.length ? draw[0].value : 0,
      drawMin = draw.length ? draw[0].value : 0,
      max = dots.length ? dots[0].value : 0,
      min = dots.length ? dots[0].value : 0;
    for (let i = 0; i <= dots.length - 1; i++) {
      let { value } = dots[i];
      if (value > max) max = value;
      if (value < min) min = value;
    }
    for (let i = 0; i <= draw.length - 1; i++) {
      let { value } = draw[i];
      if (value > drawMax) drawMax = value;
      if (value < drawMin) drawMin = value;
    }
    let result = {
      all: {
        dots,
        max,
        min
      },
      draw: {
        dots: draw,
        max: drawMax,
        min: drawMin
      },
      last: dots[dots.length - 1],
      first: dots[0]
    };
    return type && result[type] ? result[type] : result;
  }
  getIndicatorCoords() {
    let { canvas, indicator, offset } = this.state,
      { element } = canvas,
      { styles, animation } = indicator,
      { draw, last } = this.getDots(),
      {
        lineStart,
        lineEnd,
        lineView,
        lineTop,
        lineBottom,
        lineHeight
      } = this.getLineDrawCoords();
    let y = styles.width * animation.scaleTo * -1;
    if (last) {
      y =
        lineTop +
        lineHeight -
        lineHeight *
          (((last.value - draw.min) * 100) / (draw.max - draw.min) / 100);
      if (!y) y = lineHeight / 2 + lineTop;
      if (y > lineBottom) y = lineBottom;
      if (y < lineTop) y = lineTop;
    }
    return {
      x: element.clientWidth - (offset.right || 0) - styles.width / 2,
      y
    };
  }
  drawIndicator() {
    let { x, y } = this.getIndicatorCoords(),
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
  getLineDrawCoords() {
    let { canvas, offset } = this.state,
      { element } = canvas,
      lineStart = element.clientWidth - offset.right,
      lineEnd = offset.left,
      lineView = lineStart - lineEnd,
      lineTop = offset.top,
      lineBottom = element.clientHeight - offset.bottom,
      lineHeight = lineBottom - lineTop;
    return {
      lineStart,
      lineEnd,
      lineView,
      lineTop,
      lineBottom,
      lineHeight
    };
  }
  drawLine() {
    let { canvas, styles, offset, dotsLimit, dotsOffset } = this.state,
      { background, lineColor, lineWidth } = styles,
      { context, element } = canvas,
      { draw } = this.getDots(),
      { dots, min, max } = draw,
      {
        lineStart,
        lineEnd,
        lineView,
        lineTop,
        lineBottom,
        lineHeight
      } = this.getLineDrawCoords();
    if (!dots.length) return;
    let linePartWidth = lineView / (dots.length - 1);
    for (let i = dots.length - 1; i >= 0; i--) {
      let { value } = dots[i];
      dots[i].x = lineEnd + linePartWidth * i;
      dots[i].y =
        lineTop +
        lineHeight -
        lineHeight * (((value - min) * 100) / (max - min) / 100);
      if (!dots[i].y) dots[i].y = lineHeight / 2 + lineTop;
    }

    context.beginPath();
    context.lineWidth = lineWidth;
    context.strokeStyle = lineColor;
    context.lineJoin = 'round';
    if (styles.gradient) {
      let gradient = context.createLinearGradient(0, lineTop, 0, lineHeight);
      gradient.addColorStop(0, lineColor);
      gradient.addColorStop(1, background);
      context.fillStyle = gradient;
      context.lineTo(lineStart, lineHeight);
    }
    // dots = this.smoothPoints(dots, 6);

    for (let i = dots.length - 1; i >= 0; i--) {
      let dot = dots[i];
      context.lineTo(dot.x, dot.y);
    }
    if (styles.gradient) context.lineTo(lineEnd, lineBottom);
    context.fill();
    context.stroke();
    if (styles.gradient) {
      context.beginPath();
      context.lineWidth = lineWidth + 1;
      context.strokeStyle = background;
      context.lineTo(lineEnd, 0);
      context.lineTo(lineEnd, element.clientHeight);
      context.lineTo(lineStart, element.clientHeight);
      context.lineTo(lineStart, 0);
      context.stroke();
    }
  }
}
