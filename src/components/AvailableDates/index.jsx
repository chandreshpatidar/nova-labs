import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { AppointmentContext } from '../../context/appointment/appointment';
import { getDate } from '../../utils/date';

const AvailableDates = ({ calendar }) => {
  const { state, actions } = useContext(AppointmentContext);
  const { availableSlots } = state;

  // fire method on select date
  const onSelectDate = (date) => {
    actions.selectDate(date);
  };

  return (
    <Box mb={5} mt={5}>
      <Typography>Calendar: (select date for appointment booking)</Typography>
      <Grid container>
        {calendar.length ? (
          calendar.map((date) => (
            <Box key={date.date} m={1}>
              <Button
                color='primary'
                variant={
                  availableSlots.id === date.id ? 'contained' : 'outlined'
                }
                onClick={() => onSelectDate(date)}
              >
                {getDate(date.date)}
              </Button>
            </Box>
          ))
        ) : (
          <Box p={5}>
            <Typography>
              This Service Provider does not have any appointment slot
            </Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

AvailableDates.propTypes = {
  calendar: PropTypes.arrayOf(PropTypes.shape({})),
};

export default AvailableDates;
