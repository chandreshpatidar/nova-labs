import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { AppointmentContext } from '../../context/appointment/appointment';

const BuyerProfile = () => {
  const { state } = useContext(AppointmentContext);
  const { customer } = state;

  return (
    <Box paddingX={5}>
      <Typography align='left'>
        You are logged in as <b>{customer.name}</b>
      </Typography>
      <Typography align='left'>
        Please select <b>Service Provider</b> to book an appointment
      </Typography>
    </Box>
  );
};

export default BuyerProfile;
