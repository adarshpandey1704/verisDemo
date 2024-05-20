import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from '../pages/Styled';
import { Grid, Box, Typography } from '@mui/material';
import CustomTextField from './CustomTextField';

const EventTextInput = ({
  label,
  buttonLabel,
  onButtonClick,
  typographyText,
  handleChange,
  name
}) => {
  return (
    <StyledContainer>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontWeight: 'bold' }}>{typographyText}</Typography>
          <CustomTextField
            label={label}
            buttonLabel={buttonLabel}
            onButtonClick={onButtonClick}
            handleChange={handleChange}
            name={name}
          />
        </Box>
      </Grid>
    </StyledContainer>
  );
};

// PropTypes validation
EventTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  typographyText: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default EventTextInput;
