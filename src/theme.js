import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    retro: {
      background: '#05061B', // koyu mor lacivert
      accent: '#E0AAFF', // parlak mor ışık
      primary: '#7B2CBF', // mor
      secondary: '#3A0CA3', // koyu mor
      highlight: '#4CC9F0', // neon mavi
      neonPink: '#FF18B9', // neon pembe
      neonPurple: '#BC13FE', // neon mor
      darkBg: '#030015', // çok koyu lacivert
    },
  },
  fonts: {
    heading: "'Orbitron', sans-serif",
    body: "'Chakra Petch', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: 'retro.background',
        color: 'white',
      },
      '*::selection': {
        backgroundColor: 'retro.primary',
        color: 'white',
      },
    },
  },
  components: {
    Button: {
      variants: {
        neon: {
          bg: 'retro.primary',
          color: 'white',
          _hover: {
            bg: 'retro.secondary',
            boxShadow: '0 0 15px #BC13FE',
            transform: 'scale(1.05)',
          },
          _active: {
            bg: 'retro.secondary',
            transform: 'scale(0.95)',
          },
          transition: 'all 0.2s ease',
        },
      },
    },
    Link: {
      variants: {
        neon: {
          position: 'relative',
          color: 'retro.accent',
          _hover: {
            textDecoration: 'none',
            color: 'retro.highlight',
            textShadow: '0 0 8px #4CC9F0',
          },
        },
      },
    },
  },
});

export default theme; 