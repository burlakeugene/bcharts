function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}

export const generateDate = (time, format = 'hh:ii:ss') => {
  let result = '';
  time = new Date(time);
  result = time.formatting(format);
  return result;
};

export const deepMerge = (obj1, obj2) => {
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

export const deepClone = (o) => {
  if (typeof o != 'object') {
    return o;
  }
  if (!o) {
    return o;
  }
  var r = o instanceof Array ? [] : {};
  for (var i in o) {
    if (o.hasOwnProperty(i)) {
      r[i] = deepClone(o[i]);
    }
  }
  return r;
};

export const addEventListeners = (element, events, func) => {
  events.forEach((event) => {
    element.addEventListener(event, func);
  });
};

export const generateRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const getPointOnArc = (x, y, radius, angle) => {
  return {
    x: x + Math.cos(angle) * radius,
    y: y + Math.sin(angle) * radius,
  };
};

export const colorChangeTone = (color, amount) => {
  amount = parseInt(amount);
  return (
    '#' +
    color
      .replace(/^#/, '')
      .replace(/../g, (color) =>
        (
          '0' +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
};

export const calcCenterOfPolygon = (points) => {
  let polygon = points.map((point) => {
      return [point.x, point.y];
    }),
    xs = polygon.map((x) => x[0]),
    ys = polygon.map((y) => y[1]),
    cx = (Math.min(...xs) + Math.max(...xs)) / 2,
    cy = (Math.min(...ys) + Math.max(...ys)) / 2;
  return {
    x: cx,
    y: cy,
  };
};

export const getIntersection = ({ A, B, C, D }) => {
  let result = {
    x: 0,
    y: 0,
    intersected: false,
  };
  if (!A || !B || !C || !D) return result;
  let d =
    ((C.x - A.x) * (B.y - A.y) - (B.x - A.x) * (C.y - A.y)) /
    ((B.x - A.x) * (D.y - C.y) - (D.x - C.x) * (B.y - A.y));
  result.x = C.x + (D.x - C.x) * d;
  result.y = C.y + (D.y - C.y) * d;
  result.intersected = (() => {
    let v1 = (D.x - C.x) * (A.y - C.y) - (D.y - C.y) * (A.x - C.x),
      v2 = (D.x - C.x) * (B.y - C.y) - (D.y - C.y) * (B.x - C.x),
      v3 = (B.x - A.x) * (C.y - A.y) - (B.y - A.y) * (C.x - A.x),
      v4 = (B.x - A.x) * (D.y - A.y) - (B.y - A.y) * (D.x - A.x);
    return v1 * v2 < 0 && v3 * v4 < 0;
  })();
  return result;
};

export const getContrastColor = (hex, bw) => {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);
  if (bw) {
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
  }
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  return '#' + padZero(r) + padZero(g) + padZero(b);
};

export const isFunction = (func) => {
  return {}.toString.call(func) === '[object Function]';
};

export const prepareColor = (color) => {
  if(color.length === 4){
    let nextColor = '#';
    for(let i = 1; i <= color.length - 1; i++){
      nextColor += color[i]+color[i];
    }
    color = nextColor;
  }
  return color;
}