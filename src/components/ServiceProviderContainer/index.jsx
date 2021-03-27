import React, { useContext, useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import AppointmentForm from '../AppointmentForm';
import { DATE, TO_TIME, FROM_TIME } from '../../constants/pickerTypes';
import { AppointmentContext } from '../../context/appointment/appointment';
import AppointmentRequests from '../AppointmentRequests';
import { getRandomId } from '../../utils/faker';
import SlotList from '../SlotList';

const ServiceProviderContainer = () => {
  const [serviceProvider, setServiceProvider] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [fromTime, setFromTime] = useState(null);
  const [toTime, setToTime] = useState(null);

  const { actions } = useContext(AppointmentContext);

  const onSelectServiceProvider = (user) => {
    setServiceProvider(user);
  };

  const onChangeDate = (type, date) => {
    switch (type) {
      case DATE:
        setSelectedDate(date);
        break;

      case FROM_TIME:
        setFromTime(date);
        break;

      case TO_TIME:
        setToTime(date);
        break;

      default:
        break;
    }
  };

  const resetFormData = () => {
    setSelectedDate(null);
    setFromTime(null);
    setToTime(null);
  };

  const onCreateSlot = () => {
    const slotData = {
      id: getRandomId(),
      date: selectedDate,
      slots: [
        {
          id: getRandomId(),
          fromTime,
          toTime,
        },
      ],
    };
    actions.createSlot(serviceProvider.id, slotData);
    resetFormData();
  };

  return (
    <Box paddingX={5}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <AppointmentForm
            date={selectedDate}
            fromTime={fromTime}
            toTime={toTime}
            onChange={onChangeDate}
            serviceProvider={serviceProvider}
            onSelectServiceProvider={onSelectServiceProvider}
            onCreateSlot={onCreateSlot}
          />
          <SlotList serviceProvider={serviceProvider} />
        </Grid>
        <Grid item md={1}>
          <Divider orientation='vertical' />
        </Grid>
        <Grid item md={5}>
          <AppointmentRequests serviceProvider={serviceProvider} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceProviderContainer;
