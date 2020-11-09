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
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    },
    styles: {
      background: '',
      borderColor: '#2b2a49',
      borderRadius: 5,
      borderWidth: 2,
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
    digits: 2,
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
