import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PropTypes from 'prop-types';
import { StyledTextField } from './Styled';

const CustomDropdownInput = ({ options, handleChange, name, value }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (value) => {
    // Handle menu item click, e.g., update state with selected value
    console.log('Selected value:', value);
    handleChange(value, name);
    handleCloseMenu();
  };

  return (
    <>
      <StyledTextField
        onClick={handleOpenMenu}
        value={value}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={handleOpenMenu}
              size="small"
              sx={{ display: 'flex', flexDirection: 'column' }}>
              <ArrowDropUpIcon sx={{ height: '12px', width: '15px' }} />
              <ArrowDropDownIcon sx={{ height: '12px', width: '15px' }} />
            </IconButton>
          )
        }}
      />
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
        {options.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value}
            onClick={() => handleMenuItemClick(option.value)}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

CustomDropdownInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default CustomDropdownInput;
