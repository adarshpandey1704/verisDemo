import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const UploadButton = ({ handleChange, name }) => {
  const fileInputRef = React.useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(e) => handleChange(e.target.files[0].name, name)}
      />
      <Button
        style={{ height: '30px', backgroundColor: 'white' }}
        variant="contained"
        onClick={handleButtonClick}>
        Select Files
      </Button>
    </>
  );
};

UploadButton.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
export default UploadButton;
