import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import UploadText from './UploadText';
import { StyledEventUpload, StyledTypography } from './Styled';

const EventUpload = ({ typographyText, handleChange, name }) => {
  return (
    <Grid item xs={12}>
      <StyledEventUpload p="8px 12px">
        <StyledTypography>{typographyText}</StyledTypography>
        <UploadText handleChange={handleChange} name={name} />
      </StyledEventUpload>
    </Grid>
  );
};

EventUpload.propTypes = {
  label: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  typographyText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default EventUpload;
