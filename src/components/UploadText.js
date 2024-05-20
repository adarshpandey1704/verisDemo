import React from 'react';
import { Box, Typography } from '@mui/material';
import UploadButton from './UploadButton';
import PropTypes from 'prop-types';

const UploadText = ({ handleChange, name, value }) => {
  return (
    <Box style={{ padding: '8px 16px', backgroundColor: '#fafafa' }}>
      <UploadButton handleChange={handleChange} name={name} />
      <hr></hr>
      <Box
        style={{
          padding: '8px 16px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
        <Typography variant="p" fontWeight="bold">
          {value}
        </Typography>
        <span
          style={{
            borderRadius: '10px',
            backgroundColor: 'lightgray',
            marginLeft: '10px',
            padding: '5px'
          }}>
          1.2Mb
        </span>
      </Box>
    </Box>
  );
};

UploadText.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default UploadText;
