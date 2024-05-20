import React from 'react';
import { StyledEvent, StyledTypography, StyledNotificationBox, StyledButton } from './Styled';
import PropTypes from 'prop-types';

const EventSwitch = ({ handleClick }) => {
  return (
    <StyledEvent>
      <StyledTypography>Notification</StyledTypography>
      <StyledNotificationBox>
        <StyledButton
          variant="contained"
          sx={{ marginRight: '10px', cursor: 'pointer' }}
          onClick={() => handleClick('email')}>
          Email
        </StyledButton>
        <StyledButton sx={{ cursor: 'pointer' }} onClick={() => handleClick('slack')} bg="#fafafa">
          Slack
        </StyledButton>
      </StyledNotificationBox>
    </StyledEvent>
  );
};

EventSwitch.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default EventSwitch;
