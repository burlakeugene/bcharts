export default class Chart {
  constructor({ canvas = false }) {
    this.tabIsActive = true;
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
      line: {
        styles: {
          color: '#ffffff',
          width: 1,
          gradient: {
            from: '#ffffff',
            to: '#000000',
            enable: false
          }
        }
      },
      view: {
        styles: {
          background: '#000000'
        }
      },
      offset: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20
      },
      tick: 500,
      dotsLimit: 30,
      dotsOffset: 0,
      dots: []
    };
    this.checkErrors();
    this.init();
  }
  runDotsReceive() {
    let { tick } = this.state;
    setInterval(() => {
      this.tabIsActive ? this.newDotAnimate() : this.newDot();
    }, tick);
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
      time
    });
    this.setState({
      dotsOffset,
      dots
    });
  }
  newDotAnimate(value) {
    let { dots } = this.getDots('all'),
      { dotsOffset, tick } = this.state,
      lastDot = dots[dots.length - 1],
      prevValue = lastDot ? lastDot.value : 0,
      randomValue = Math.random() * (Math.random() > 0.5 ? -1 : 1),
      time = +new Date();
    value = value || prevValue + randomValue;
    if (dotsOffset) dotsOffset++;
    let animationTime = (60 * tick) / 1000,
      step = (value - prevValue) / animationTime;
    dots.push({
      value: prevValue,
      initialValue: prevValue,
      nextValue: value,
      animationTime,
      animationTimeInitial: animationTime,
      animationWidth: 0,
      step,
      time
    });
    this.setState({
      dotsOffset,
      dots
    });
  }
  newDotAnimateCheck(){

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
  render() {
    this.clearCanvas();
    this.drawBackground();
    this.drawLine();
    this.drawIndicator();
    requestAnimationFrame(this.render.bind(this));
  }
  getDots(type) {
    let { dots, dotsOffset, dotsLimit } = this.state,
      draw = [...dots],
      beforeFirst = false;
    if (dotsOffset) {
      let rest = draw.length - dotsOffset,
        moreThenLimit = rest > dotsLimit;
      if (!moreThenLimit) {
        dotsOffset = draw.length - dotsLimit;
        this.setState({
          dotsOffset
        });
      }
      draw = draw.slice(0, moreThenLimit ? rest : dotsLimit);
    }
    if (draw.length > dotsLimit) {
      beforeFirst = draw[draw.length - dotsLimit - 1];
      draw = draw.slice(draw.length - dotsLimit, draw.length);
      if (beforeFirst && !dotsOffset) draw = [beforeFirst, ...draw];
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
        min: drawMin,
        beforeFirst
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
    let { canvas, view } = this.state,
      { context, element } = canvas,
      { background } = view.styles;
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
    let { canvas, line, view, offset, dotsLimit, dotsOffset } = this.state,
      { gradient, color, width } = line.styles,
      { background } = view.styles,
      { context, element } = canvas,
      all = this.getDots('all'),
      {
        lineStart,
        lineEnd,
        lineView,
        lineTop,
        lineBottom,
        lineHeight
      } = this.getLineDrawCoords();
    if (!all.dots.length) return;

    //animation dots
    let dot = all.dots[all.dots.length - 1];
    if (dot.hasOwnProperty('nextValue')) {
      let isEnd = false;
      dot.value += dot.step;
      dot.animationTime--;
      dot.animationWidth =
        ((dot.animationTimeInitial - dot.animationTime) * 100) /
        dot.animationTimeInitial /
        100;
      if (dot.nextValue - dot.initialValue >= 0 && dot.value > dot.nextValue)
        isEnd = true;
      else if (
        dot.nextValue - dot.initialValue < 0 &&
        dot.value < dot.nextValue
      )
        isEnd = true;
      if (isEnd) {
        dot.value = dot.nextValue;
        delete dot.nextValue;
        delete dot.step;
        delete dot.initialValue;
        delete dot.animationTime;
        delete dot.animationTimeInitial;
        delete dot.animationWidth;
        this.newDotAnimateCheck();
      }
    }
    let draw = this.getDots('draw'),
      { dots, min, max, beforeFirst } = draw,
      lineLastDot = lineStart,
      restWidth = 0,
      dotsLength = dots.length,
      beforeFirstMixed = false;
    if (
      beforeFirst &&
      dots.find(item => {
        return item.animationWidth;
      })
    ) {
      beforeFirstMixed = true;
    }
    let partWidthBasic = lineView / (dotsLength - (!beforeFirstMixed ? 1 : 2));
    for (let i = dotsLength - 1; i >= 0; i--) {
      let dot = dots[i],
        value = dot.value,
        partWidth = partWidthBasic;
      if (dot.animationWidth) {
        partWidth *= dot.animationWidth;
        restWidth += lineView / (dotsLength - 1) - partWidth;
      }
      dots[i].x = lineLastDot;
      dots[i].y =
        lineTop +
        lineHeight -
        lineHeight * (((value - min) * 100) / (max - min) / 100);
      if (!dots[i].y) dots[i].y = lineHeight / 2 + lineTop;
      if (beforeFirstMixed) {
        lineLastDot -= partWidth;
      } else {
        // TODO: Glitch on little count of dots
        lineLastDot -= partWidth;
        lineLastDot -= restWidth / (dotsLength - 1);
      }
    }
    context.beginPath();
    context.lineWidth = width;
    context.strokeStyle = color;
    context.lineJoin = 'round';
    if (gradient.enable) {
      let fill = context.createLinearGradient(0, lineTop, 0, lineHeight);
      fill.addColorStop(0, gradient.from);
      fill.addColorStop(1, gradient.to);
      context.fillStyle = fill;
      context.lineTo(lineStart, lineHeight);
    }
    for (let i = dots.length - 1; i >= 0; i--) {
      let dot = dots[i];
      context.lineTo(dot.x, dot.y);
    }
    if (gradient.enable) context.lineTo(lineEnd, lineBottom);
    context.fill();
    context.stroke();
    if (gradient.enable) {
      context.beginPath();
      context.lineWidth = width + 1;
      context.strokeStyle = background;
      context.lineTo(lineEnd, 0);
      context.lineTo(lineEnd, element.clientHeight);
      context.lineTo(lineStart, element.clientHeight);
      context.lineTo(lineStart, 0);
      context.stroke();
    }
    // hide left offset behind block
    if (offset.left) {
      context.beginPath();
      context.lineWidth = 1;
      context.strokeStyle = background;
      context.rect(0, 0, offset.left - 2, element.clientHeight);
      context.fill();
      context.stroke();
    }
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
      let { dotsOffset } = this.state;
      if (pushed) {
        dotsOffset += e.clientX - x;
        x = e.clientX;
        this.setState({
          dotsOffset: dotsOffset >= 0 ? dotsOffset : 0
        });
      }
    });
    window.addEventListener('focus', () => {
      this.tabIsActive = true;
    })
    window.addEventListener('blur', () => {
      this.tabIsActive = false;
    })
  }
}
