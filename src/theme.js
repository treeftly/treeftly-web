import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
  sizes: {
    fullVH: '100vh',
    maxContent: 'max-content',
  },
  colors: {
    primary: {
      50: '#ddfefa',
      100: '#b8f5ed',
      200: '#90ece2',
      300: '#67e5d6',
      400: '#40ddca',
      500: '#29c4b1',
      600: '#1a9889', // primary color
      700: '#0d6d62',
      800: '#00423b',
      900: '#001815',
    },
    secondary: {
      50: '#fff4db',
      100: '#ffe2af',
      200: '#ffcf7f',
      300: '#ffbb4d', // secondary color
      400: '#ffa81d',
      500: '#e68e05',
      600: '#b36f00',
      700: '#804f00',
      800: '#4e2f00',
      900: '#1e0f00',
    },
    gradientBg:
      'linear-gradient(43deg, rgba(42,218,197,0.9738095921962535) 0%, rgb(255, 207, 129) 100%)',
  },
})
