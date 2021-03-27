import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TableRow from '@material-ui/core/TableRow';

import { AppointmentContext } from '../../context/appointment/appointment';
import { getDate, getDateTime, getTime } from '../../utils/date';
import MuiTable from '../MuiTable';
import { appointmentStatus } from '../../constants/category';
import { appointmentRequestTabel } from '../../constants/tableHeaders';

const useStyles = makeStyles({
  button: {
    marginInlineEnd: 10,
  },
});

const AppointmentRequest = ({ serviceProvider }) => {
  const { state, actions } = useContext(AppointmentContext);
  const { appointments, customer } = state;
  const styles = useStyles();

  // method for accept appointment request
  const onAcceptAppointment = (appointmentIndex) => {
    actions.acceptAppointment(appointmentIndex);
  };

  // method for reject appointment request
  const onRejectAppoinment = (appointmentIndex, date) => {
    const confirmation = window.confirm(
      `Do you want to reject appointment for ${customer.name} at ${getDateTime(
        date
      )} ?`
    );
    if (confirmation) {
      actions.rejectAppointment(appointmentIndex);
    }
  };

  const getRows = () => {
    return appointments.map((appointment, appointmentIndex) => (
      <>
        {appointment?.serviceProvider?.id === serviceProvider?.id && (
          <TableRow key={appointmentIndex}>
            <TableCell>{appointment.user.name}</TableCell>
            <TableCell>{getDate(appointment.date)}</TableCell>
            <TableCell>
              {getTime(appointment.slot.fromTime)}
              {' - '}
              {getTime(appointment.slot.toTime)}
            </TableCell>
            <TableCell>
              <Grid container>
                {appointment.status === appointmentStatus.PENDING ? (
                  <>
                    <IconButton
                      className={styles.button}
                      color='primary'
                      variant='outlined'
                      onClick={() => onAcceptAppointment(appointmentIndex)}
                    >
                      <CheckIcon />
                    </IconButton>
                    <IconButton
                      color='secondary'
                      variant='outlined'
                      onClick={() =>
                        onRejectAppoinment(
                          appointmentIndex,
                          appointment.slot.slotTime
                        )
                      }
                    >
                      <ClearIcon />
                    </IconButton>
                  </>
                ) : (
                  appointment.status
                )}
              </Grid>
            </TableCell>
          </TableRow>
        )}
      </>
    ));
  };

  return serviceProvider?.id ? (
    <MuiTable
      headers={appointmentRequestTabel}
      rows={getRows()}
      title='Appointment Requests'
    />
  ) : null;
};

AppointmentRequest.propTypes = {
  serviceProvider: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    appointmentSlots: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default AppointmentRequest;
