import React, { useContext } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { AppointmentContext } from '../../context/appointment/appointment';
import { getDate, getTime } from '../../utils/date';
import MuiTable from '../MuiTable';
import { appointmentListTabel } from '../../constants/tableHeaders';

const BuyerAppointments = () => {
  const { state } = useContext(AppointmentContext);
  const { customer, appointments } = state;

  const getRows = () => {
    return appointments.map((appointment) => (
      <>
        {appointment.user.id === customer.id && (
          <TableRow key={appointment.serviceProvider.name}>
            <TableCell>{appointment.serviceProvider.name}</TableCell>
            <TableCell>{getDate(appointment.date)}</TableCell>
            <TableCell>
              {getTime(appointment.slot.fromTime)}
              {' - '}
              {getTime(appointment.slot.toTime)}
            </TableCell>
            <TableCell>{appointment.status}</TableCell>
          </TableRow>
        )}
      </>
    ));
  };

  return (
    <MuiTable
      rows={getRows()}
      headers={appointmentListTabel}
      title='Appointment List'
    />
  );
};

export default BuyerAppointments;
