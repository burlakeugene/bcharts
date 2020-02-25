const generateDate = time => {
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

const deepMerge = (obj1, obj2) => {
  for (var p in obj2) {
    try {
      if (obj2[p].constructor == Object) {
        obj1[p] = deepMerge(obj1[p], obj2[p]);
      } else {
        obj1[p] = obj2[p];
      }
    } catch (e) {
      obj1[p] = obj2[p];
    }
  }
  return obj1;
};

const retinaFix = (canvas) => {
  let dpr = window.devicePixelRatio || 1,
    rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  let context = canvas.getContext('2d');
  context.scale(dpr, dpr);
  return context;
}

export default class Chart {
  constructor({
    canvas = false,
    data = [],
    settings = {},
    offset = {
      left: 30,
      right: 50,
      top: 20,
      bottom: 40
    }
  }) {
    this.canvas = {
      element: canvas,
      context: retinaFix(canvas),
      isCanvas:
        (canvas instanceof Element || canvas instanceof HTMLDocument) &&
        canvas.tagName.toLowerCase() === 'canvas'
    };
    this.canvas.context.scale(2, 2);
    this.data = data;

    this.settings = {
      data: {
        offset: 0,
        limit: {
          value: 20
        }
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
      offset: { ...offset },
      line: {
        styles: {
          color: '#ffffff',
          width: 1,
          gradient: {
            from: '#ffffff',
            to: '#000000',
            enable: false
          }
        },
        offset: { ...offset }
      },
      view: {
        styles: {
          background: '#000000'
        }
      },
      target: {
        enable: true,
        coords: {
          x: 0,
          y: 0
        },
        styles: {
          lineColor: 'rgb(60,60,60)',
          lineWidth: 1,
          dotColor: '#fff',
          dotWidth: 4,
          panelBackground: 'rgb(60, 60, 60)',
          panelColor: '#fff'
        }
      },
      grid: {
        enable: true,
        steps: {
          x: 10,
          y: 5
        },
        styles: {
          color: 'rgb(20, 20, 20)',
          width: 1
        }
      },
      timeLine: {
        enable: true,
        resize: true,
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
    this.setSettings(settings);
    this.checkErrors();
    this.init();
  }
  setSettings(newSettings = {}) {
    if (newSettings.offset) {
      newSettings.line = {};
      newSettings.line.offset = newSettings.offset;
    }
    deepMerge(this.settings, newSettings);
  }
  getSettings() {
    return this.settings;
  }
  setData(data) {
    this.data = data;
  }
  getData() {
    return this.data;
  }
  getLast() {
    let last = this.getDots('last');
    return last;
  }
  checkErrors() {
    let { canvas } = this;
    if (!canvas.isCanvas)
      throw new Error(canvas.element + ' is not a canvas element');
  }
  newDot({ value = false, time = false } = {}) {
    let { dots } = this.getDots('all'),
      { settings } = this,
      { data } = settings,
      lastDot = dots[dots.length - 1],
      prevValue = lastDot ? lastDot.value : 0,
      randomValue = Math.random() * (Math.random() > 0.5 ? -1 : 1),
      currentTime = +new Date();
    time = time || currentTime;
    value = parseFloat(value) || value === 0 ? value : prevValue + randomValue;
    if (data.offset) data.offset++;
    dots.push({
      value,
      time
    });
  }
  init() {
    this.listeners();
    this.render();
  }
  render() {
    this.drawBackground();
    this.drawGrid();
    this.drawLine();
    this.drawTime();
    this.drawValues();
    this.drawTarget();
    this.drawIndicator();
    requestAnimationFrame(this.render.bind(this));
  }
  getDots(type) {
    let { settings } = this,
      { data } = settings,
      all = this.data,
      draw = [...this.data];
    if (data.offset) {
      let rest = draw.length - data.offset,
        moreThenLimit = rest > data.limit.value;
      if (!moreThenLimit) {
        data.offset = draw.length - data.limit.value;
      }
      draw = draw.slice(0, moreThenLimit ? rest : data.limit.value);
    }
    if (draw.length > data.limit.value) {
      draw = draw.slice(draw.length - data.limit.value, draw.length);
    }
    let drawMax = draw.length ? draw[0].value : 0,
      drawMin = draw.length ? draw[0].value : 0,
      max = data.length ? data[0].value : 0,
      min = data.length ? data[0].value : 0;
    for (let i = 0; i <= all.length - 1; i++) {
      let { value } = all[i];
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
        dots: all,
        max,
        min
      },
      draw: {
        dots: draw,
        max: drawMax,
        min: drawMin
      },
      last: all[all.length - 1],
      first: all[0]
    };
    return type && result[type] ? result[type] : result;
  }
  getIndicatorCoords() {
    let { canvas, settings } = this,
      { indicator, line } = settings,
      { offset } = line,
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
      x: element.clientWidth - (offset.right || 0),
      y
    };
  }
  drawIndicator() {
    let { x, y } = this.getIndicatorCoords(),
      { settings, canvas } = this,
      { indicator } = settings,
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
    let { canvas, settings } = this,
      { view } = settings,
      { context, element } = canvas,
      { background } = view.styles;
    element.width = element.clientWidth;
    element.height = element.clientHeight;
    context.fillStyle = background;
    context.fillRect(0, 0, element.width, element.height);
  }
  getLineDrawCoords() {
    let { canvas, settings } = this,
      { line } = settings,
      { offset } = line,
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
  drawTime() {
    let draw = this.getDots('draw'),
      {
        lineStart,
        lineEnd,
        lineView,
        lineTop,
        lineBottom,
        lineHeight
      } = this.getLineDrawCoords(),
      { canvas, settings } = this,
      { timeLine, timeStamp, offset } = settings,
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
      context.textBaseline = 'middle';
      context.fillText(
        generateDate(dot && dot.time ? dot.time : timeStamp),
        dot ? dot.x : 0,
        element.clientHeight - offset.bottom / 2 + 2
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
      { canvas, settings } = this,
      { valuesLine, offset } = settings,
      { count, enable, digits } = valuesLine,
      { element, context } = canvas,
      valuesArray = [];
    if (!enable) return;
    let yStep = lineHeight / (count - 1),
      yStart = lineTop + yStep,
      yMiddle = (element.clientHeight + offset.top - offset.bottom) / 2;
    if (min === max) {
      valuesArray.push({
        text: max,
        y: yMiddle
      });
      let topCount = (yMiddle - offset.top) / yStep,
        bottomCount = (yMiddle - offset.top) / yStep;
      for (let i = 1; i <= topCount; i++) {
        valuesArray.push({
          text: max + max * i,
          y: yMiddle - yStep * i
        });
      }
      for (let i = 1; i <= bottomCount; i++) {
        valuesArray.push({
          text: max - max * i,
          y: yMiddle + yStep * i
        });
      }
    } else {
      valuesArray.push({
        text: max,
        y: lineTop
      });
      let valueStep = (max - min) / (count - 1);
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
    }
    for (let i = 0; i <= valuesArray.length - 1; i++) {
      let value = valuesArray[i];
      context.font = '100 12px sans-serif';
      context.fillStyle = '#fff';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(
        value.text.toFixed(digits),
        element.clientWidth - offset.right / 2,
        value.y + 2
      );
    }
  }
  drawLine() {
    let { canvas, settings } = this,
      { line, view } = settings,
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
    if (gradient.enable) {
      context.lineTo(lineEnd, lineBottom);
      context.fill();
    }
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
  drawTarget() {
    let { canvas, settings } = this,
      { target, offset, valuesLine, timeStamp } = settings,
      { styles, coords } = target,
      { x, y } = coords,
      { element, context } = canvas,
      draw = this.getDots('draw'),
      dots = [...draw.dots],
      currentDot = false;
    if (!target.enable || !x || !y) return;
    for (let i = 0; i <= dots.length - 1; i++) {
      let dot = dots[i],
        dotNext = dots[i + 1];
      if (dotNext && x >= dot.x && x <= dotNext.x) {
        currentDot = (dotNext.x + dot.x) / 2 <= x ? dotNext : dot;
      }
    }

    if (!currentDot) return;

    //draw vertical line
    context.lineWidth = styles.lineWidth;
    context.strokeStyle = styles.lineColor;
    context.beginPath();
    context.moveTo(0 + offset.left, currentDot.y);
    context.lineTo(element.clientWidth - offset.right, currentDot.y);
    context.stroke();

    //draw horizontal line
    context.beginPath();
    context.moveTo(currentDot.x, 0 + offset.top);
    context.lineTo(currentDot.x, element.clientHeight - offset.bottom);
    context.stroke();

    //draw dot
    context.beginPath();
    context.strokeStyle = context.fillStyle = styles.dotColor;
    context.arc(currentDot.x, currentDot.y, styles.dotWidth, 0, 2 * Math.PI);
    context.fill();
    context.stroke();

    //draw panels
    let panels = {
      bottom: {
        background: styles.panelBackground,
        color: styles.panelColor,
        width: 80,
        height: offset.bottom,
        x: currentDot.x - 80 / 2,
        y: element.clientHeight - offset.bottom,
        text: generateDate(
          currentDot && currentDot.time ? currentDot.time : timeStamp
        )
      },
      right: {
        background: styles.panelBackground,
        color: styles.panelColor,
        width: offset.right,
        height: 20,
        x: element.clientWidth - offset.right,
        y: currentDot.y - 20 / 2,
        text: currentDot.value.toFixed(valuesLine.digits || 2)
      }
    };

    Object.values(panels).forEach(panel => {
      context.strokeStyle = context.fillStyle = panel.background;
      context.beginPath();
      context.rect(panel.x, panel.y, panel.width, panel.height);
      context.fill();
      context.stroke();
      context.font = '100 12px sans-serif';
      context.fillStyle = panel.color;
      context.textAlign = panel.textAlign;
      context.textBaseline = 'center';
      context.fillText(
        panel.text,
        panel.x + panel.width / 2,
        panel.y + panel.height / 2 + 2
      );
    });
  }
  drawGrid() {
    let { canvas, settings } = this,
      { grid, offset } = settings,
      { element, context } = canvas,
      { enable, steps, styles, type } = grid;
    if (!enable) return;
    context.lineWidth = styles.width;
    context.strokeStyle = styles.color;
    context.beginPath();
    context.lineTo(0 + offset.left, 0 + offset.top);
    context.lineTo(element.clientWidth - offset.right, 0 + offset.top);
    context.lineTo(
      element.clientWidth - offset.right,
      element.clientHeight - offset.bottom
    );
    context.lineTo(0 + offset.left, element.clientHeight - offset.bottom);
    context.lineTo(0 + offset.left, 0 + offset.top);
    context.stroke();
    let xArray = [],
      yArray = [],
      isPx = type === 'px',
      xStep = (element.clientWidth - offset.right - offset.left) / steps.x,
      xStart = 0 + offset.left,
      yStep = (element.clientHeight - offset.top - offset.bottom) / steps.y,
      yStart = 0 + offset.top;
    if (isPx) {
      for (let i = 1; i < xStep; i++) {
        let x = xStart + i * steps.x;
        xArray.push(x);
      }
      for (let i = 1; i < yStep; i++) {
        let y = yStart + i * steps.y;
        yArray.push(y);
      }
    } else {
      for (let i = 1; i < steps.x; i++) {
        let x = xStart + i * xStep;
        xArray.push(x);
      }
      for (let i = 1; i < steps.y; i++) {
        let y = yStart + i * yStep;
        yArray.push(y);
      }
    }
    for (let i = 0; i <= xArray.length - 1; i++) {
      context.beginPath();
      context.lineTo(xArray[i], 0 + offset.top);
      context.lineTo(xArray[i], element.clientHeight - offset.bottom);
      context.stroke();
    }
    for (let i = 0; i <= yArray.length - 1; i++) {
      context.beginPath();
      context.lineTo(0 + offset.left, yArray[i]);
      context.lineTo(element.clientWidth - offset.right, yArray[i]);
      context.stroke();
    }
  }
  listeners() {
    let { canvas, settings } = this,
      { target } = settings,
      { element } = canvas,
      pushed = false,
      x = 0,
      y = 0,
      targetClear = () => {
        target.coords = {
          x: false,
          y: false
        };
      },
      stopFunc = e => {
        pushed = false;
        x = 0;
        y = 0;
      };

    element.addEventListener('mouseup', () => {
      stopFunc();
    });
    element.addEventListener('mouseleave', () => {
      stopFunc();
      targetClear();
    });

    element.addEventListener('mousedown', e => {
      pushed = {
        x: e.clientX,
        y: e.clientY
      };
      x = e.clientX;
      y = e.clientY;
    });

    element.addEventListener('mousemove', e => {
      let { settings } = this,
        { valuesLine, timeLine, data, line, offset } = settings,
        { dots } = this.getDots('all'),
        elementOffset = element.getBoundingClientRect();
      targetClear();
      element.style.cursor = 'default';
      //target point
      if (
        e.clientX >= elementOffset.left + offset.left + 1 &&
        e.clientX <= elementOffset.left + elementOffset.width - offset.right &&
        e.clientY >= elementOffset.top + offset.top &&
        e.clientY <= elementOffset.bottom - offset.bottom
      ) {
        if (target.enable) {
          element.style.cursor = 'crosshair';
        }
        target.coords = {
          x: e.clientX - elementOffset.left,
          y: e.clientY - elementOffset.top
        };
      }

      //line view
      if (
        e.clientX >= elementOffset.left + line.offset.left &&
        e.clientX <=
          elementOffset.left + elementOffset.width - line.offset.right &&
        e.clientY >= elementOffset.top + offset.top &&
        e.clientY <= elementOffset.bottom - offset.bottom
      ) {
        if (pushed) {
          let nextOffset = data.offset + e.clientX - x;
          if (nextOffset < 0) nextOffset = 0;
          if (nextOffset > dots.length - data.limit.value)
            nextOffset = dots.length - data.limit.value;
          data.offset = nextOffset;
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
            let maxOffset = 60,
              maxTop =
                (elementOffset.height + offset.top - offset.bottom) / 2 -
                maxOffset,
              maxBottom =
                (elementOffset.height + offset.bottom - offset.top) / 2 -
                maxOffset;
            line.offset.top = (() => {
              if (line.offset.top - nextTop < maxTop) {
                return line.offset.top - nextTop;
              } else {
                return maxTop;
              }
            })();
            line.offset.bottom = (() => {
              if (line.offset.bottom + nextBottom < maxBottom) {
                return line.offset.bottom + nextBottom;
              } else {
                return maxBottom;
              }
            })();
          }
          if (zoomOut) {
            line.offset.top = (() => {
              if (line.offset.top - nextTop > offset.top) {
                return line.offset.top - nextTop;
              } else {
                return offset.top;
              }
            })();
            line.offset.bottom = (() => {
              if (line.offset.bottom + nextBottom > offset.bottom) {
                return line.offset.bottom + nextBottom;
              } else {
                return offset.bottom;
              }
            })();
          }
        }
      }

      // time panel
      if (
        timeLine.enable &&
        timeLine.resize &&
        e.clientX >= elementOffset.left + line.offset.left &&
        e.clientX <=
          elementOffset.left + elementOffset.width - line.offset.right &&
        e.clientY >= elementOffset.bottom - offset.bottom
      ) {
        element.style.cursor = 'col-resize';
        if (pushed) {
          let nextLimit = data.limit.value + e.clientX - x;
          data.limit.value = (() => {
            if (data.limit.min && nextLimit < data.limit.min) {
              return data.limit.min;
            } else if (data.limit.max && nextLimit > data.limit.max) {
              return data.limit.max;
            } else if (dots.length < nextLimit) {
              return dots.length;
            } else if (nextLimit <= 2) {
              return 2;
            } else {
              return nextLimit;
            }
          })();
        }
      }
      if (pushed) {
        x = e.clientX;
        y = e.clientY;
      }
    });
  }
}
