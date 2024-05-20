import React from 'react';
import { StyledContainer } from '../pages/Styled';
import { StyledAvatarBox } from './Styled';
import { Grid } from '@mui/material';
import ImageAvtars from './ImageAvtars';

const EventAvtars = () => {
  return (
    <StyledContainer>
      <Grid item xs={12}>
        <StyledAvatarBox>
          <ImageAvtars />
        </StyledAvatarBox>
      </Grid>
    </StyledContainer>
  );
};

export default EventAvtars;
