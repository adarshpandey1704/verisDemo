import { styled } from '@mui/material/styles';
import { Grid, Typography, Box, Button, TableCell } from '@mui/material';
import CustomDropdown from '../components/CustomDurationSelector';

export const StyledContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '1024px',
  width: '100%',
  padding: theme.spacing(1, 2)
}));

export const StyledTypography = styled(Typography)(({ theme, p }) => ({
  ...theme.typography.h1,
  padding: p ? p : '0px'
}));

export const StyledBox = styled(Box)(({ justifyContent, mt }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: justifyContent ? justifyContent : 'center',
  marginTop: mt ? mt : '',
  width: '100%'
}));

export const StyledDropdownBox = styled(Box)(() => ({
  marginTop: '17px',
  marginLeft: '20px'
}));

export const StyledDropdown = styled(CustomDropdown)(() => ({
  marginTop: '20px',
  marginLeft: '15px'
}));

export const StyledButton = styled(Button)(({ bg }) => ({
  backgroundColor: bg ? bg : 'transparent'
}));

export const StyledHeading = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: 'bold'
}));

export const StyledTableCell = styled(TableCell)(() => ({
  fontSize: '14px',
  fontWeight: 'bold'
}));
