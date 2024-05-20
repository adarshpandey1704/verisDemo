import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types';

const EventDatePicker = ({ name, handleChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          defaultValue={dayjs('2022-04-17')}
          name={name}
          onChange={(newVal) => handleChange(newVal, 'eventDate')}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

EventDatePicker.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default EventDatePicker;
