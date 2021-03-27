import React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import AppointmentBookingContainer from '../AppointmentBookingContainer';
import BuyerAppointments from '../BuyerAppointments';

const BuyerContainer = () => (
  <>
    <Divider />
    <Box p={5}>
      <Grid container>
        <Grid item md={6}>
          <AppointmentBookingContainer />
        </Grid>
        <Grid item md={1}>
          <Divider orientation='vertical' />
        </Grid>
        <Grid item md={5}>
          <BuyerAppointments />
        </Grid>
      </Grid>
    </Box>
  </>
);

export default BuyerContainer;
