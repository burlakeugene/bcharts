import { deepMerge, isFunction, colorChangeTone } from '../common';

export default class Chart {
  constructor(props) {
    let {
      canvas = false,
      data = {},
      defaultSettings = {},
      settings = {},
      actions = {},
      type,
    } = props;
    this.type = type;
    this.actions = actions;
    this.canvas = {
      element: canvas,
      context: canvas.getContext('2d'),
      isCanvas:
        (canvas instanceof Element || canvas instanceof HTMLDocument) &&
        canvas.tagName.toLowerCase() === 'canvas',
    };
    this.data = data;
    this.cursor = { x: 0, y: 0 };
    this.settings = JSON.parse(JSON.stringify(defaultSettings));
    this.timeStamp = +new Date();
    this.setSettings(settings);
    this.state = {
      loading: this.settings.animated ? 0 : 1,
    };
    this.commonInit();
  }
  setSettings(newSettings = {}) {
    deepMerge(this.settings, newSettings);
    this.render({
      from: 'setSettings',
    });
  }
  getSettings() {
    return this.settings;
  }
  setData(data) {
    this.data = data;
    this.render({
      from: 'setData',
    });
  }
  getData() {
    return this.data;
  }
  setRatio() {
    let { canvas } = this,
      { context, element } = canvas,
      ratio = window.devicePixelRatio || 1;
    element.width = element.clientWidth * ratio;
    element.height = element.clientHeight * ratio;
    context.scale(ratio, ratio);
  }
  clearCanvas() {
    let { canvas } = this,
      { context, element } = canvas;
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
  loading() {
    if (this.state.loading >= 1) return;
    setTimeout(() => {
      this.state.loading += 60 / 2000;
      this.state.loading = this.state.loading > 1 ? 1 : this.state.loading;
      this.render({
        from: 'loading',
      });
      this.loading();
    }, 1000 / 60);
  }
  commonInit() {
    this.render({
      from: 'commonInit',
    });
    this.loading();
    this.commonListeners();
  }
  commonListeners() {
    let { canvas } = this,
      { context, element } = canvas;
    window.addEventListener('resize', () => {
      this.render({
        from: 'resize',
      });
    });
    element.addEventListener('mousemove', (e) => {
      let { settings } = this,
        elementOffset = element.getBoundingClientRect(),
        x = e.clientX - elementOffset.left,
        y = e.clientY - elementOffset.top;
      this.cursor = {
        x,
        y,
      };
      this.render({
        from: 'mousemove',
      });
    });
    element.addEventListener('mouseout', (e) => {
      this.cursor = {
        x: 0,
        y: 0,
      };
      this.render({
        from: 'mouseout',
      });
    });
  }
  drawTooltip({ title = '', elements = [], x, y, render } = {}) {
    let { canvas, settings, data = [], cursor } = this,
      { element, context } = canvas,
      { tooltip } = settings,
      { styles } = tooltip;
    if (!x) x = cursor.x;
    if (!y) y = cursor.y;
    if (tooltip && tooltip.enable) {
      context.font = '100 ' + styles.fontSize + 'px arial';
      context.textAlign = 'left';
      context.textBaseline = 'middle';
      let { width, height } = (() => {
          let width = 0,
            height = 0;
          if (title && title.text) {
            let currentWidth = context.measureText(title.text).width;
            if (width < currentWidth) width = currentWidth;
            title.height = styles.padding.top * 2 + styles.fontSize * 1.286;
            title.y = title.height / 2;
            height += title.height;
          }
          if (elements.length) {
            elements.forEach((element) => {
              if (element.colorPanel && element.colorPanel.color) {
                element.colorPanel.height = 5;
                element.colorPanel.y = height;
                height += 5;
              }
              if (element.texts) {
                element.texts.forEach((text, index) => {
                  if (text.text) {
                    let currentWidth = context.measureText(text.text).width;
                    if (width < currentWidth) width = currentWidth;
                    text.height = styles.fontSize * 1.286;
                    text.y = height + text.height / 2;
                    if (!index) {
                      text.height += styles.padding.top;
                      text.y += styles.padding.top;
                    }
                    if (index === element.texts.length - 1) {
                      text.height += styles.padding.bottom;
                    }
                    height += text.height;
                  }
                });
              }
              if (element.footer && element.footer.text) {
                let currentWidth = context.measureText(element.footer.text)
                  .width;
                if (width < currentWidth) width = currentWidth;
                element.footer.height =
                  styles.padding.bottom + styles.fontSize * 1.286;
                element.footer.y =
                  height +
                  element.footer.height / 2 -
                  styles.padding.bottom / 2;
                height += element.footer.height;
              }
            });
          }
          width += styles.padding.left + styles.padding.right;
          return {
            width,
            height,
          };
        })(),
        center = x,
        topOffset = 10,
        left = x - width / 2,
        invert = false,
        top = y - height - topOffset;
      if (top < styles.borderWidth) {
        invert = true;
        top = y + topOffset;
      }
      if (left + width > element.clientWidth - styles.borderWidth) {
        left = element.clientWidth - width - styles.borderWidth;
      }
      if (left < styles.borderWidth) left = styles.borderWidth;
      context.fillStyle = styles.background;
      context.strokeStyle = styles.borderColor;
      context.lineWidth = styles.borderWidth;
      context.beginPath();
      context.roundRect(left, top, width, height, styles.borderRadius);
      context.closePath();
      context.stroke();
      context.fill();

      context.beginPath();
      if (invert) {
        context.moveTo(center - 5, top);
        context.lineTo(center, top - 5);
        context.lineTo(center + 5, top);
        context.lineTo(center + 10, top + 5);
        context.lineTo(center - 10, top + 5);
      } else {
        context.moveTo(center - 5, top + height);
        context.lineTo(center, top + height + 5);
        context.lineTo(center + 5, top + height);
        context.lineTo(center + 10, top + height - 5);
        context.lineTo(center - 10, top + height - 5);
      }
      context.closePath();
      context.stroke();
      context.fill();

      context.save();
      context.beginPath();
      context.lineWidth = 0;
      context.strokeStyle = styles.background;
      if (invert) {
        context.rect(
          left + styles.borderWidth + styles.borderRadius,
          top + styles.borderWidth / 2,
          width - styles.borderWidth * 2 - styles.borderRadius * 2,
          10
        );
      } else {
        context.rect(
          left + styles.borderWidth + styles.borderRadius,
          top + height - 10 - styles.borderWidth / 2,
          width - styles.borderWidth * 2 - styles.borderRadius * 2,
          10
        );
      }
      context.fill();
      context.stroke();
      context.restore();

      context.fillStyle = styles.color;
      if (title && title.text) {
        context.fillText(title.text, left + styles.padding.left, top + title.y);
      }
      elements.forEach((element) => {
        context.fillStyle = styles.color;
        if (element.colorPanel && element.colorPanel.color) {
          context.save();
          context.fillStyle = element.colorPanel.color;
          context.beginPath();
          context.rect(left, top + element.colorPanel.y, width, 3);
          context.fill();
          context.restore();
        }
        if (element.texts) {
          element.texts.forEach((text, i) => {
            if (text.text) {
              context.fillText(
                text.text,
                left + styles.padding.left,
                top + text.y
              );
            }
          });
        }

        if (element.footer && element.footer.text) {
          context.fillStyle = colorChangeTone(styles.color, -50);
          context.fillText(
            element.footer.text,
            left + styles.padding.left,
            top + element.footer.y
          );
        }
      });
      if (render && isFunction(render)) {
        render({
          context,
          styles,
          box: {
            width,
            height,
            top: top,
            left: left,
            bottom: top + height,
            right: left + width,
          },
        });
      }
    }
  }
  commonRender() {
    this.setRatio();
    this.clearCanvas();
  }
}
