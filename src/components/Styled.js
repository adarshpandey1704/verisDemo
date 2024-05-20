import { styled } from '@mui/material/styles';
import { Grid, Typography, Box, TextField } from '@mui/material';

export const StyledContainer = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  alignItems: 'center',
  paddingTop: '0px'
}));

export const StyledDateTimeDiv = styled(Box)(() => ({
  flex: 1,
  padding: '0 8px',
  width: '100%',
  '& .child-div': {
    width: '100%'
  }
}));

export const StyledTypography = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: '18px'
}));

export const StyledTextField = styled(TextField)(() => ({
  marginTop: '10px'
}));

export const StyledAvatarBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const StyledEvent = styled(Box)(() => ({
  padding: '8px 16px'
}));

export const StyledNotificationBox = styled(Box)(({ p }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: p ? p : undefined,
  backgroundColor: '#fafafa',
  marginTop: '10px'
}));

export const StyledButton = styled(Box)(({ bg, color }) => ({
  backgroundColor: bg ? bg : 'white',
  color: color ? color : 'black'
}));

export const StyledEventUpload = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column'
}));
