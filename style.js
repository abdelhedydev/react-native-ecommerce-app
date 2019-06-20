import { Dimensions } from 'react-native';
import { isNumber } from 'lodash';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

export const colors = {
  primary: '#000d1a',
  pink: '#b30047',
  green: '#00802b'
};

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
};

const isPercent = val => (isNumber(val) && val >= 0 && val <= 100);

export const widthPercentage = val => (isPercent(val) ? (val / 100) * dimensions.fullWidth : 0);

export const heightPercentage = val => (isPercent(val) ? (val / 100) * dimensions.fullHeight : 0);
