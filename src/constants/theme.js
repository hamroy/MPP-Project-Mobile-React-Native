import {Dimensions, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');

const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

export const COLORS = {
  // base colors
  primary: '#093499', // dark blue
  secondary: '#1A52D4', // blue

  green: '#66D59A',
  lightGreen: '#E6FEF0',

  lime: '#00BA63',
  emerald: '#2BC978',

  brown: '#C25004',
  lightBrown: '#FF6600',

  red: '#FF4134',
  lightRed: '#FFF1F0',

  purple: '#6B3CE9',
  lightpurple: '#F3EFFF',

  yellow: '#FFC664',
  lightyellow: '#FFF9EC',

  black: '#1E1F20',
  white: '#FFFFFF',

  lightGray: '#FCFBFC',
  gray: '#C1C3C5',
  darkgray: '#C3C6C7',

  transparent: 'transparent',
};

export const SIZES = {
  // global sizes
  base: getFontSize(8),
  font: getFontSize(14),
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: getFontSize(50),
  h1: getFontSize(30),
  h2: getFontSize(22),
  h3: getFontSize(20),
  h4: getFontSize(18),
  body1: getFontSize(30),
  body2: getFontSize(20),
  body3: getFontSize(16),
  body4: getFontSize(14),
  body5: getFontSize(12),

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontSize: SIZES.largeTitle,
    lineHeight: getFontSize(55),
  },
  h1: {
    fontWeight: '700',
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h1,
    lineHeight: getFontSize(36),
  },
  h2: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h2,
    lineHeight: getFontSize(30),
  },
  h3: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h3,
    lineHeight: getFontSize(22),
  },
  h4: {
    fontFamily: 'Roboto-Bold',
    fontSize: SIZES.h4,
    lineHeight: 22,
  },
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
