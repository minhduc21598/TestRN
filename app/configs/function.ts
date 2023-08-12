import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const getFontSize = (f: number) => f;

export const getLineHeight = (f: number) => f;

export const getHeight = () => height;

export const getWidth = () => width;

export const WIDTH = (w: number) => width * (w / 375);

export const HEIGHT = (h: number) => height * (h / 812);
