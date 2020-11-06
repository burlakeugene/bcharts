export default {
  animated: true,
  offset: {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30,
  },
  view: {
    styles: {
      background: '#1a1e30',
    },
  },
  slice: {
    volumed: true,
    styles: {
      width: 80,
      color: '#fff',
    },
    hover: {
      enable: true,
      value: 20
    }
  },
  texts: {
    center: {
      enable: false,
      text: '100%',
      styles: {
        color: '#fff',
      },
    },
    slicePercent: {
      enable: false,
      styles: {
        color: '#fff',
      },
    },
  },
  tooltip: {
    enable: true,
    styles: {
      color: '#ffffff',
      background: '#403f4c',
      borderColor: '#403f4c',
      borderWidth: 0,
      borderRadius: 3,
      fontSize: 12,
      padding: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
      },
    },
  },
};
