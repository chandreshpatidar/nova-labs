import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { AppointmentContext } from '../../context/appointment/appointment';
import MuiTable from '../MuiTable';
import { getDate, getTime } from '../../utils/date';
import { createdSlotTable } from '../../constants/tableHeaders';

const SlotList = ({ serviceProvider }) => {
  const { state } = useContext(AppointmentContext);
  const { serviceProviders } = state;

  const getSlots = () => {
    const spIndex = serviceProviders.findIndex(
      (sp) => sp?.id === serviceProvider?.id
    );
    if (spIndex === -1) {
      return [];
    } else {
      const rows = serviceProviders?.[spIndex]?.appointmentSlots?.map(
        (appointment) =>
          appointment.slots?.map((slot, slotIndex) => (
            <TableRow key={slotIndex}>
              <TableCell>{getDate(appointment.date)}</TableCell>
              <TableCell>
                {getTime(slot.fromTime)}
                {' - '}
                {getTime(slot.toTime)}
              </TableCell>
            </TableRow>
          ))
      );
      return rows || [];
    }
  };

  return serviceProvider?.id ? (
    <MuiTable
      headers={createdSlotTable}
      rows={getSlots()}
      title='Created Slots'
    />
  ) : null;
};

SlotList.propTypes = {
  serviceProvider: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    appointmentSlots: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default SlotList;
