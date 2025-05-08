import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: '#1a1a2e',
        color: '#e6e6fa',
      },
    },
  },
  colors: {
    purple: {
      50: '#f5e6ff',
      100: '#dbb2ff',
      200: '#c180ff',
      300: '#a64dff',
      400: '#8c1aff',
      500: '#7300e6',
      600: '#5900b3',
      700: '#400080',
      800: '#26004d',
      900: '#0d001a',
    },
    retro: {
      background: '#1a1a2e',
      primary: '#7300e6',
      secondary: '#a64dff',
      accent: '#e6e6fa',
      text: '#ffffff',
    },
  },
  fonts: {
    heading: '"Press Start 2P", cursive',
    body: 'Roboto, sans-serif',
  },
  components: {
    Button: {
      variants: {
        retro: {
          bg: 'purple.500',
          color: 'white',
          border: '2px solid',
          borderColor: 'purple.200',
          boxShadow: '0 4px 0 #400080',
          _hover: {
            bg: 'purple.400',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 0 #400080',
          },
          _active: {
            transform: 'translateY(0)',
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

export default theme; 