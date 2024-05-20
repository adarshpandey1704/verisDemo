import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import PropTypes from 'prop-types';

const CutsomTimePicker = ({ name, handleChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker
          defaultValue={dayjs('2022-04-17T15:30')}
          name={name}
          onChange={(newVal) => handleChange(newVal, 'eventTime')}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

CutsomTimePicker.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default CutsomTimePicker;
