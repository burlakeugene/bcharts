export default {
  animated: true,
  offset: {
    top: 20,
    right: 20,
    bottom: 40,
    left: 60,
  },
  grid: {
    enable: true,
    offset: {
      top: 30,
      right: 30,
      bottom: 30,
      left: 30,
    },
    styles: {
      background: '',
      color: '#2b2a49',
      borderRadius: 5,
      width: 2,
    },
    horizontal: {
      step: 4,
      enable: true,
    },
    vertical: {
      step: 10,
      enable: true,
    },
  },
  labels: {
    enable: true,
    styles: {
      color: '#fff',
      fontSize: 12
    }
  },
  values: {
    enable: true,
    styles: {
      color: '#fff',
      fontSize: 12
    }
  },
  data: {
    enable: true,
    offset: 0,
    line: {
      styles: {
        lineWidth: 3
      }
    }
  }
};
