import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { AppointmentContext } from '../../context/appointment/appointment';
import { getTime } from '../../utils/date';

const AvailableSlots = ({ serviceProvider }) => {
  const { state, actions } = useContext(AppointmentContext);
  const { availableSlots, selectedSlot, appointments } = state;

  // method get button status
  const getButtonStatus = (slotId) => {
    return appointments?.some((appointment) =>
      appointment.slot.id === slotId
        ? appointment.status === 'Pending' || appointment.status === 'Accepted'
        : false
    );
  };

  const onSelectSlot = (slotId) => {
    actions.selectSlot(slotId);
  };

  const onTakeAppointment = () => {
    actions.takeAppointment(serviceProvider);
  };

  return (
    Boolean(availableSlots?.slots?.length) && (
      <>
        <Box mt={5}>
          <Grid container>
            <Grid item md={8}>
              <Typography>Available Slots</Typography>
            </Grid>
            <Grid item md={4}>
              {Boolean(Object.keys(selectedSlot).length) && (
                <Button
                  color='primary'
                  variant='outlined'
                  onClick={onTakeAppointment}
                >
                  Book Appointment
                </Button>
              )}
            </Grid>
          </Grid>

          <Grid container>
            {availableSlots.slots.map((slot) => (
              <Box key={slot.id} m={1}>
                <Button
                  color='secondary'
                  disabled={getButtonStatus(slot.id)}
                  variant={
                    selectedSlot.slot === slot ? 'contained' : 'outlined'
                  }
                  onClick={() => onSelectSlot(slot.id)}
                >
                  {`${getTime(slot.fromTime)}
                  -
                  ${getTime(slot.toTime)}`}
                </Button>
              </Box>
            ))}
          </Grid>
        </Box>
      </>
    )
  );
};

AvailableSlots.propTypes = {
  serviceProvider: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    appointmentSlots: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default AvailableSlots;
