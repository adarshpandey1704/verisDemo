import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  max-width: 1124px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  position: absolute !important;
  width: 140px;
  right: 7px;
  top: 7px;
  background-color: white !important;
  padding: 2px 5px !important;
  text-transform: capitalize !important;
`;

const StyledTextField = styled(TextField)`
  flex: 1;
  background-color: #fafafa !important;
  padding-top: 10px;
  padding-bottom: 10px;
  & .MuiOutlinedInput-input {
    padding: 10px 10px;
    color: blue;
    background-color: #fafafa;
    border-radius: 4px;
  }
  & .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: transparent; // Set border color to transparent
  }
`;

const CustomTextFieldWithButton = ({
  buttonLabel,
  onButtonClick,
  handleChange,
  name,
  ...textFieldProps
}) => {
  return (
    <Container>
      <StyledTextField {...textFieldProps} onChange={handleChange} name={name} />
      <StyledButton variant="contained" onClick={onButtonClick}>
        {buttonLabel}
      </StyledButton>
    </Container>
  );
};

CustomTextFieldWithButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.func.isRequired
};

export default CustomTextFieldWithButton;
