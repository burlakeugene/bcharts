import { deepClone } from './common';

Date.prototype.formatting = function (format) {
  var yyyy = this.getFullYear().toString();
  format = format.replace(/yyyy/g, yyyy);
  var mm = (this.getMonth() + 1).toString();
  format = format.replace(/mm/g, mm[1] ? mm : '0' + mm[0]);
  var dd = this.getDate().toString();
  format = format.replace(/dd/g, dd[1] ? dd : '0' + dd[0]);
  var hh = this.getHours().toString();
  format = format.replace(/hh/g, hh[1] ? hh : '0' + hh[0]);
  var ii = this.getMinutes().toString();
  format = format.replace(/ii/g, ii[1] ? ii : '0' + ii[0]);
  var ss = this.getSeconds().toString();
  format = format.replace(/ss/g, ss[1] ? ss : '0' + ss[0]);
  return format;
};

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  this.beginPath();
  this.moveTo(x + r, y);
  this.arcTo(x + w, y, x + w, y + h, r);
  this.arcTo(x + w, y + h, x, y + h, r);
  this.arcTo(x, y + h, x, y, r);
  this.arcTo(x, y, x + w, y, r);
  this.closePath();
  return this;
};

CanvasRenderingContext2D.prototype.drawCurve = function (points, config = {}) {
  points = deepClone(points);
  const { closePath } = config;

  if (!points.length) {
    return;
  }

  if (closePath) {
    points[0] = {
      x: (points[points.length - 1].x + points[1].x) / 2,
      y: (points[points.length - 1].y + points[1].y) / 2,
    };
    points.push(points[0]);
  }

  this.beginPath();

  this.moveTo(points[0].x, points[0].y);

  let x, y;

  for (let i = 0; i < points.length - 1; i++) {
    x = (points[i].x + points[i + 1].x) / 2;
    y = (points[i].y + points[i + 1].y) / 2;
    this.quadraticCurveTo(points[i].x, points[i].y, x, y);
  }

  const lastPoint = points[points.length - 1];

  this.quadraticCurveTo(lastPoint.x, lastPoint.y, lastPoint.x, lastPoint.y);
  this.stroke();

  return this;
};

CanvasRenderingContext2D.prototype.drawLineCurve = function (points) {
  function gradient(a, b) {
    return (b.y - a.y) / (b.x - a.x);
  }

  points = deepClone(points);
  let f, t, nexP, dx2, dy2;
  //f = 0, will be straight line
  //t suppose to be 1, but changing the value can control the smoothness too
  if (typeof f == 'undefined') f = 0.3;
  if (typeof t == 'undefined') t = 0.6;

  this.beginPath();
  this.moveTo(points[0].x, points[0].y);

  var m = 0;
  var dx1 = 0;
  var dy1 = 0;

  var preP = points[0];
  for (var i = 1; i < points.length; i++) {
    var curP = points[i];
    nexP = points[i + 1];
    if (nexP) {
      m = gradient(preP, nexP);
      dx2 = (nexP.x - curP.x) * -f;
      dy2 = dx2 * m * t;
    } else {
      dx2 = 0;
      dy2 = 0;
    }
    this.bezierCurveTo(
      preP.x - dx1,
      preP.y - dy1,
      curP.x + dx2,
      curP.y + dy2,
      curP.x,
      curP.y
    );
    dx1 = dx2;
    dy1 = dy2;
    preP = curP;
  }
  this.stroke();

  return this;
};
