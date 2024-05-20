import React from 'react';
import { StyledContainer, StyledDateTimeDiv, StyledTypography, StyledDuration } from './Styled';
import CustomDatePicker from './CustomDatePicker';
import CutsomTimePicker from './CutsomTimePicker';
import PropTypes from 'prop-types';

const EventDate = ({ handleChange, eventDate, eventTime, eventDuration }) => {
  const options = [
    { value: '30', label: '30 mins' },
    { value: '60', label: '60 mins' },
    { value: '90', label: '90 mins' },
    { value: '120', label: '120 mins' },
    { value: '150', label: '150 mins' }
    // Add more options as needed
  ];
  return (
    <StyledContainer>
      <StyledDateTimeDiv>
        <StyledTypography>Date</StyledTypography>
        <div>
          <CustomDatePicker name={eventDate} handleChange={handleChange} />
        </div>
      </StyledDateTimeDiv>
      <StyledDateTimeDiv>
        <StyledTypography>Time</StyledTypography>
        <div>
          <CutsomTimePicker name={eventTime} handleChange={handleChange} />
        </div>
      </StyledDateTimeDiv>
      <StyledDateTimeDiv>
        <StyledTypography>Duration</StyledTypography>
        <div>
          <StyledDuration options={options} name={eventDuration} handleChange={handleChange} />
        </div>
      </StyledDateTimeDiv>
    </StyledContainer>
  );
};

// PropTypes validation
EventDate.propTypes = {
  handleChange: PropTypes.func.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventTime: PropTypes.func.isRequired,
  eventDuration: PropTypes.string.isRequired
};

export default EventDate;
