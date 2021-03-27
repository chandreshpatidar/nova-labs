import React, { useContext, useState } from 'react';

import AvailableDates from '../AvailableDates';
import AvailableSlots from '../AvailableSlots';
import ServiceProvider from '../ServiceProvider';
import { AppointmentContext } from '../../context/appointment/appointment';

const AppointmentBookingContainer = () => {
  const [serviceProvider, setServiceProvider] = useState({});
  const [calendar, setCalendar] = useState([]);

  const { state, actions } = useContext(AppointmentContext);
  const { serviceProviders } = state;

  const onChangeServiceProvider = (user) => {
    actions.resetAvailableSlot();
    setServiceProvider(user);
    if (user) {
      getAppointmentDate(user.id);
    }
  };

  const getAppointmentDate = (spId) => {
    const spIndex = serviceProviders.findIndex((sp) => sp.id === spId);
    setCalendar(serviceProviders[spIndex].appointmentSlots);
  };

  return (
    <>
      <ServiceProvider
        value={serviceProvider}
        onChange={onChangeServiceProvider}
      />
      {Boolean(Object.keys(serviceProvider || {}).length) && (
        <AvailableDates calendar={calendar} />
      )}
      {Boolean(calendar.length) && (
        <AvailableSlots serviceProvider={serviceProvider} />
      )}
    </>
  );
};

export default AppointmentBookingContainer;
