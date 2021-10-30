import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#FFFAFA', '#4C5270')(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontsize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#ADA7A7',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'section-subtitle': {
        textDecoration: 'underline',
        fontsize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#ADA7A7',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#6EAB97', '#FFB067')(props),
      textUnderlineOffset: 3
    })
  }
};

const fonts = {
  heading:
    "@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');"
};

const colors = {
  glassTeal: '#04D4F0'
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
});

export default theme;
