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