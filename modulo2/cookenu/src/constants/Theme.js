import { createTheme } from '@mui/material/styles';
import { primaryColor } from './Colors';
import { neutralColor } from './Colors';

const theme = createTheme({
    palette: {
      primary: {
        main: primaryColor,
        contrastText: 'white',
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        contrastText: '#ffcc00',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
      text:{
          primary: neutralColor,
      }
    },
  });

export default theme