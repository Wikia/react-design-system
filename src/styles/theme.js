const palette = {
  aqua: '#00d6d6',
  black: '#1a1a1a',
  coral: '#ff6a64',
  darkGray: '#5f7a7b',
  lightGray: '#f2f5f5',
  link: '#00acac',
  linkHover: '#008989',
  midLightGray: '#dee7e5',
  middleGray: '#bed1cf',
  mint: '#5df2ae',
  navy: '#002a32',
  pine: '#006661',
  plum: '#833c58',
  purple: '#460084',
  red: '#ee1a41',
  warmGray: '#eeecdc',
  yellow: '#dfec24',
  white: '#fff',
  alert: '#d71035',
  warning: '#dfec24',
  success: '#4cda9a',
  message: '#460084',
};

const spacing = {
  unit: 8,
};

const shape = {
  borderRadius: 4,
};

export default {
  colors: {
    primary: palette.aqua,
    primaryText: '#fff',
    secondary: palette.yellow,
    background: '#fff',
    link: palette.link,
    bodyText: palette.darkGray,
    alert: palette.alert,
    warning: palette.warning,
    success: palette.success,
    message: palette.message,
    palette,
  },
  typography: {
    base: 16,
    minus3: 10,
    minus2: 12,
    minus1: 14,
    plus1: 18,
    plus2: 24,
    plus3: 28,
    lineHeight: {
      minus2: 1.29,
    },
    weight: {
      bold: 400,
      strong: 600,
    },
  },
  shape,
  spacing,
  transition: {
    duration: 100,
  },
};

