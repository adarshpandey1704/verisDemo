import React from 'react';
// import EventDateTime from '../components/EventDateTime';
import CutsomTimePicker from '../components/CutsomTimePicker';
import CustomDurationSelector from '../components/CustomDurationSelector';
import EventTextInput from '../components/EventTextInput';
import EventDatePicker from '../components/EventDatePicker';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import EventUpload from '../components/EventUpload';
import EventAvtars from '../components/EventAvtars';
import EventSwitch from '../components/EventSwitch';
import {
  StyledContainer,
  StyledTypography,
  StyledBox,
  StyledDropdownBox,
  StyledDropdown,
  StyledButton,
  StyledHeading
} from './Styled';
import { StyledDateTimeDiv } from '../components/Styled';
import { Typography, Grid } from '@mui/material';
import { postCaller } from '../apis/Apihelper';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useSnackbar } from 'notistack';

const EventSetup = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = React.useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    eventDuration: '0 hr',
    eventLocation: '',
    eventguest: '',
    eventNotification: '',
    eventReminder: '0 hr',
    eventUpload: ''
  });
  const [loader, setLoader] = React.useState(false);
  const [notification, setNotification] = React.useState('');

  console.log('formData', formData);

  const handleClick = (item) => {
    setNotification(item);
  };

  React.useEffect(() => {
    setFormData((previous) => ({
      ...previous,
      eventNotification: notification
    }));
  }, [notification]);

  const formatedDate = formData.eventDate ? formData.eventDate.format('YYYY-MM-DD') : '';
  const formatedTime = formData.eventTime ? formData.eventTime.format('HH:mm:ss') : '';
  console.log('formatedDate', formatedDate, formatedTime);

  const handleChange = (eventVal, name) => {
    if (name) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: eventVal
      }));
    } else {
      const { name, value } = eventVal.target;
      setFormData((previous) => ({
        ...previous,
        [name]: value
      }));
    }
  };

  const handleSubmit = async () => {
    console.log('hello');
    setLoader(true);
    const resp = await postCaller('createevent', formData);
    enqueueSnackbar('Your event details has beed created', { variant: 'success' });
    if (resp.success) {
      setLoader(false);
      navigate('/eventlist');
    } else {
      console.log('Something went wrong');
    }
  };

  const options = [
    { value: '6hr', label: '6 hour before' },
    { value: '12hr', label: '12 hours before' },
    { value: '24hr', label: '24 hours before' },
    { value: '48hr', label: '28 hours before' }
    // Add more options as needed
  ];
  return (
    <StyledContainer>
      {loader ? (
        <CircularProgress />
      ) : (
        <>
          <StyledTypography p="8px 16px">Create Event</StyledTypography>
          <EventTextInput
            label="Enter event name"
            buttonLabel="Add description"
            onButtonClick={handleSubmit}
            typographyText="Event Name"
            handleChange={handleChange}
            name="eventName"
          />
          <Grid container>
            <Grid item xs={12} md={4}>
              <StyledDateTimeDiv>
                <StyledHeading>Date</StyledHeading>
                <div>
                  <EventDatePicker name="eventDate" handleChange={handleChange} />
                </div>
              </StyledDateTimeDiv>
            </Grid>
            <Grid item xs={12} md={4}>
              <StyledDateTimeDiv>
                <StyledHeading>Time</StyledHeading>
                <div>
                  <CutsomTimePicker name="eventTime" handleChange={handleChange} />
                </div>
              </StyledDateTimeDiv>
            </Grid>
            <Grid item xs={12} md={4}>
              <StyledDateTimeDiv>
                <StyledHeading>Duration</StyledHeading>
                <div>
                  <CustomDurationSelector
                    options={options}
                    name="eventDuration"
                    handleChange={handleChange}
                    value={formData.eventDuration}
                  />
                </div>
              </StyledDateTimeDiv>
            </Grid>
            {formData?.eventDate && (
              <Typography color="gray">This event will take place on {formatedDate}</Typography>
            )}
          </Grid>
          <EventTextInput
            label="Choose Location"
            buttonLabel="Set Meeting room"
            onButtonClick={handleSubmit}
            typographyText="Location"
            handleChange={handleChange}
            name="eventLocation"
          />
          <EventTextInput
            label="contact@example.com"
            buttonLabel="Add"
            onButtonClick={handleSubmit}
            typographyText="Add guests"
            handleChange={handleChange}
            name="eventguest"
          />
          <EventAvtars />
          <StyledBox justifyContent="flex-start">
            <EventSwitch handleClick={handleClick} />
            <StyledDropdownBox>
              <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>Set Reminder</Typography>
              <StyledDropdown
                options={options}
                handleChange={handleChange}
                name="eventReminder"
                value={formData.eventReminder}
              />
            </StyledDropdownBox>
          </StyledBox>
          <EventUpload
            component="label"
            label="label"
            buttonLabel="Upload File"
            typographyText="Upload Attachments"
            startIcon={<CloudUploadIcon />}
            handleChange={handleChange}
            name="eventUpload"
            value={formData.eventUpload}
          />
          <StyledBox justifyContent="flex-end" mt="20px">
            <StyledButton bg="white">Cancel</StyledButton>
            <StyledButton variant="contained" bg="#00a0fb" onClick={handleSubmit}>
              Create Rvent
            </StyledButton>
          </StyledBox>
        </>
      )}
    </StyledContainer>
  );
};

export default EventSetup;
