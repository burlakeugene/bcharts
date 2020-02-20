export const generateDate = time => {
  let result = '';
  time = new Date(time);
  const getDay = day => {
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day];
    },
    getMonth = month => {
      return [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ][month];
    };
  result =
    (time.getHours() < 10 ? '0' + time.getHours() : time.getHours()) +
    ':' +
    (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()) +
    ':' +
    (time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds());
  return result;
};

export default class Chart {
  constructor({ canvas = false, data = [], limit = 20, offset = 0 }) {
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
        left: 30,
        right: 60,
        top: 20,
        bottom: 40
      },
      data: {
        offset,
        limit,
        array: data
      },
      timeLine: {
        enable: true,
        count: 5
      },
      valuesLine: {
        enable: true,
        resize: true,
        count: 10,
        digits: 2
      },
      timeStamp: +new Date()
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
      { data } = this.state,
      lastDot = dots[dots.length - 1],
      prevValue = lastDot ? lastDot.value : 0,
      randomValue = Math.random() * (Math.random() > 0.5 ? -1 : 1),
      time = +new Date();
    value = value || prevValue + randomValue;
    if (data.offset) data.offset++;
    dots.push({
      value,
      time
    });
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
  init() {
    this.listeners();
    this.render();
  }
  render() {
    this.clearCanvas();
    this.drawBackground();
    this.drawLine();
    this.drawTimes();
    this.drawValues();
    this.drawIndicator();
    requestAnimationFrame(this.render.bind(this));
  }
  getDots(type) {
    let { data } = this.state,
      { array, limit, offset } = data,
      draw = [...array];
    if (offset) {
      let rest = draw.length - offset,
        moreThenLimit = rest > limit;
      if (!moreThenLimit) {
        data.offset = draw.length - limit;
      }
      draw = draw.slice(0, moreThenLimit ? rest : limit);
    }
    if (draw.length > limit) {
      draw = draw.slice(draw.length - limit, draw.length);
    }
    let drawMax = draw.length ? draw[0].value : 0,
      drawMin = draw.length ? draw[0].value : 0,
      max = array.length ? array[0].value : 0,
      min = array.length ? array[0].value : 0;
    for (let i = 0; i <= array.length - 1; i++) {
      let { value } = array[i];
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
        dots: array,
        max,
        min
      },
      draw: {
        dots: draw,
        max: drawMax,
        min: drawMin
      },
      last: array[array.length - 1],
      first: array[0]
    };
    return type && result[type] ? result[type] : result;
  }
  getIndicatorCoords() {
    let { canvas, indicator, offset } = this.state,
      y,
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
  drawTimes() {
    let draw = this.getDots('draw'),
      {
        lineStart,
        lineEnd,
        lineView,
        lineTop,
        lineBottom,
        lineHeight
      } = this.getLineDrawCoords(),
      { canvas, timeLine, timeStamp } = this.state,
      { enable, count } = timeLine,
      { element, context } = canvas,
      dots = [...draw.dots],
      timesArray = [];
    if (!enable) return;
    let each = Math.ceil(dots.length / count),
      counter = 0;
    for (let i = dots.length - 1; i >= 0; i--) {
      if (dots.length <= count) timesArray.push(dots[i]);
      else {
        if (counter === each) counter = 0;
        if (!counter) timesArray.push(dots[i]);
        counter++;
        if (i === 0 && counter / each >= 1) {
          timesArray.push(dots[i]);
        }
      }
    }
    for (let i = 0; i <= timesArray.length - 1; i++) {
      let dot = timesArray[i];
      context.font = '100 12px sans-serif';
      context.fillStyle = '#fff';
      context.textAlign = 'center';
      context.textBaseline = 'bottom';
      context.fillText(
        generateDate(dot && dot.time ? dot.time : timeStamp),
        dot ? dot.x : 0,
        element.clientHeight - 12
      );
    }
  }
  drawValues() {
    let { max, min } = this.getDots('draw'),
      {
        lineStart,
        lineEnd,
        lineView,
        lineTop,
        lineBottom,
        lineHeight
      } = this.getLineDrawCoords(),
      { canvas, valuesLine } = this.state,
      { count, enable, digits } = valuesLine,
      { element, context } = canvas,
      valuesArray = [];
    if (!enable) return;
    valuesArray.push({
      text: max,
      y: lineTop
    });
    let yStep = lineHeight / (count - 1),
      yStart = lineTop + yStep,
      valueStep = (max - min) / (count - 1);
    for (let i = 1; i <= count - 2; i++) {
      valuesArray.push({
        text: max - valueStep * i,
        y: yStart
      });
      yStart += yStep;
    }
    valuesArray.push({
      text: min,
      y: lineBottom
    });
    for (let i = 0; i <= valuesArray.length - 1; i++) {
      let value = valuesArray[i];
      context.font = '100 12px sans-serif';
      context.fillStyle = '#fff';
      context.textAlign = 'right';
      context.textBaseline = 'middle';
      context.fillText(
        value.text.toFixed(digits),
        element.clientWidth - 6,
        value.y
      );
    }
  }
  drawLine() {
    let { canvas, line, view } = this.state,
      { gradient, color, width } = line.styles,
      { background } = view.styles,
      { context, element } = canvas,
      {
        lineStart,
        lineEnd,
        lineView,
        lineTop,
        lineBottom,
        lineHeight
      } = this.getLineDrawCoords(),
      draw = this.getDots('draw'),
      { dots, min, max } = draw,
      lineLastDot = lineStart,
      dotsLength = dots.length - 1;
    for (let i = dotsLength; i >= 0; i--) {
      let dot = dots[i],
        value = dot.value,
        partWidth = lineView / dotsLength;
      dot.x = lineLastDot;
      dot.y =
        lineTop +
        lineHeight -
        lineHeight * (((value - min) * 100) / (max - min) / 100);
      if (!dot.y) dot.y = lineHeight / 2 + lineTop;
      lineLastDot -= partWidth;
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
    for (let i = dotsLength; i >= 0; i--) {
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
  }
  listeners() {
    let { canvas, offset } = this.state,
      { element } = canvas,
      initialOffset = { ...offset },
      pushed = false,
      x = 0,
      y = 0,
      stopFunc = e => {
        pushed = false;
        x = 0;
        y = 0;
      };

    element.addEventListener('mouseup', stopFunc);
    element.addEventListener('mouseleave', stopFunc);

    element.addEventListener('mousedown', e => {
      pushed = {
        x: e.clientX,
        y: e.clientY
      };
      x = e.clientX;
      y = e.clientY;
    });

    element.addEventListener('mousemove', e => {
      let { data, valuesLine } = this.state,
        elementOffset = element.getBoundingClientRect();

      //line view
      if (
        e.clientX >= elementOffset.left &&
        e.clientX <= elementOffset.left + elementOffset.width - offset.right
      ) {
        element.style.cursor = 'crosshair';
        if (pushed) {
          let nextOffset = data.offset + e.clientX - x;
          data.offset = nextOffset < 0 ? 0 : nextOffset;
        }
      }

      //values panel
      if (
        valuesLine.enable &&
        valuesLine.resize &&
        e.clientX >= elementOffset.left + elementOffset.width - offset.right
      ) {
        element.style.cursor = 'row-resize';
        if (pushed) {
          let nextTop = y - e.clientY,
            nextBottom = e.clientY - y,
            zoomIn = e.clientY > y,
            zoomOut = e.clientY < y;
          if (zoomIn) {
            let maxTop =
                (elementOffset.height +
                  initialOffset.top -
                  initialOffset.bottom) /
                2,
              maxBottom =
                (elementOffset.height +
                  initialOffset.bottom -
                  initialOffset.top) /
                2;
            offset.top = (() => {
              if (offset.top - nextTop < maxTop) {
                return offset.top - nextTop;
              } else {
                return maxTop;
              }
            })();
            offset.bottom = (() => {
              if (offset.bottom + nextBottom < maxBottom) {
                return offset.bottom + nextBottom;
              } else {
                return maxBottom;
              }
            })();
          }
          if (zoomOut) {
            offset.top = (() => {
              if (offset.top - nextTop > initialOffset.top) {
                return offset.top - nextTop;
              } else {
                return initialOffset.top;
              }
            })();
            offset.bottom = (() => {
              if (offset.bottom + nextBottom > initialOffset.bottom) {
                return offset.bottom + nextBottom;
              } else {
                return initialOffset.bottom;
              }
            })();
          }
        }
      }

      if (pushed) {
        x = e.clientX;
        y = e.clientY;
      }
    });
  }
}
