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

CanvasRenderingContext2D.prototype.bezierCurveMulti = function (
  points,
  tension
) {
  tension = tension || 0.25;
  var l = points.length;
  if (l < 2) return;
  if (l == 2) {
    this.moveTo(points[0][0], points[0][1]);
    this.lineTo(points[1][0], points[1][1]);
    return this;
  }
  function h(x, y) {
    return Math.sqrt(x * x + y * y);
  }
  var cpoints = [];
  points.forEach(function () {
    cpoints.push({});
  });

  for (var i = 1; i < l - 1; i++) {
    var pi = points[i],
      pp = points[i - 1],
      pn = points[i + 1],
      rdx = pn[0] - pp[0],
      rdy = pn[1] - pp[1],
      rd = h(rdx, rdy),
      dx = rdx / rd,
      dy = rdy / rd,
      dp = h(pi[0] - pp[0], pi[1] - pp[1]),
      dn = h(pi[0] - pn[0], pi[1] - pn[1]),
      cpx = pi[0] - dx * dp * tension,
      cpy = pi[1] - dy * dp * tension,
      cnx = pi[0] + dx * dn * tension,
      cny = pi[1] + dy * dn * tension;

    cpoints[i] = {
      cp: [cpx, cpy],
      cn: [cnx, cny],
    };
  }
  cpoints[0] = {
    cn: [
      (points[0][0] + cpoints[1].cp[0]) / 2,
      (points[0][1] + cpoints[1].cp[1]) / 2,
    ],
  };
  cpoints[l - 1] = {
    cp: [
      (points[l - 1][0] + cpoints[l - 2].cn[0]) / 2,
      (points[l - 1][1] + cpoints[l - 2].cn[1]) / 2,
    ],
  };

  this.moveTo(points[0][0], points[0][1]);

  for (i = 1; i < l; i++) {
    var p = points[i],
      cp = cpoints[i],
      cpp = cpoints[i - 1];
    this.bezierCurveTo(cpp.cn[0], cpp.cn[1], cp.cp[0], cp.cp[1], p[0], p[1]);
  }
  return this;
};
