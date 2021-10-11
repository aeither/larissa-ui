import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import components from './components';
import fonts from './fonts';
import styles from './styles';

export const customTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  styles,
  fonts,
  colors,
  components,
});
