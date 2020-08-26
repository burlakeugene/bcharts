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
