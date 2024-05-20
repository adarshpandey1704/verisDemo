import { createTheme } from '@mui/material/styles';
import { customColors } from './cutomColors';

const theme = createTheme({
  palette: {
    primary: {
      main: customColors.black10,
      default: customColors.gray10
    }
  },
  typography: {
    h1: {
      fontWeight: 600,
      fontSize: '30px',
      lineHeight: '40px',
      letterSpacing: '0.1rem'
    },
    h2: {
      fontWeight: 400,
      fontSize: '26px',
      lineHeight: '32px'
    },
    h3: {
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: '30px'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 768,
      lg: 1140,
      xl: 1400
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // backgroundColor: customColors.black10
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '5px 5px'
        }
      }
    }
  }
});

export default theme;
