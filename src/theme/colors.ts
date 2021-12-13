import { DeepPartial, Theme } from '@chakra-ui/react';

interface ExtendedColors {
  neutralDarkest: string;
  neutralDarker: string;
  neutralDark: string;
  neutralLightest: string;
  neutralLighter: string;
  neutralLight: string;

  // Functional
  success: string;
  error: string;

  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  accentDark: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  accentLight: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
}

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['current' | 'purple']>
> &
  ExtendedColors = {
  // Basic
  neutralDarkest: '#141a1e',
  neutralDarker: '#1a2227',
  neutralDark: '#202a30',
  neutralLightest: '#fff',
  neutralLighter: '#c7d2da',
  neutralLight: '#505b63',

  

  // Functional
  success: '#00d897',
  error: '#f1356e',

  // Main
  primary: {
    '50': '#7cd2b2',
    '100': '#66cba5',
    '200': '#50c398', //
    '300': '#3abc8b',
    '400': '#24b47e',
    '500': '#24b47e', //
    '600': '#20a271',
    '700': '#1d9065',
    '800': '#197e58',
    '900': '#166c4c',
  },
  accentDark: {
    '50': '#FDF7E7',
    '100': '#FAE9BC',
    '200': '#F7DB91',
    '300': '#F4CD66',
    '400': '#F1BF3C',
    '500': '#EEB111',
    '600': '#BF8D0D',
    '700': '#8F6A0A',
    '800': '#5F4707',
    '900': '#302303',
  },
  accentLight: {
    '50': '#E9FBF3',
    '100': '#C3F4DD',
    '200': '#9CEDC7',
    '300': '#75E5B1',
    '400': '#4FDE9B',
    '500': '#28D785',
    '600': '#20AC6B',
    '700': '#188150',
    '800': '#105635',
    '900': '#082B1B',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
