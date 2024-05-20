import React from 'react';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import AvatarGroup from '@mui/material/AvatarGroup';
import images1 from '../images/avtar1.jpg';
import images2 from '../images/avtar2.jpg';
import images3 from '../images/avtar3.jpg';

const Container = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  max-width: 1124px;
  width: 100%;
`;

const ImageAvtars = () => {
  return (
    <Container>
      <Stack direction="row" spacing={2}>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src={images1} />
          <Avatar alt="Travis Howard" src={images2} />
          <Avatar alt="Cindy Baker" src={images3} />
          <Avatar alt="Agnes Walker" src={images2} />
          <Avatar alt="Trevor Henderson" src={images3} />
        </AvatarGroup>
      </Stack>
    </Container>
  );
};

export default ImageAvtars;
