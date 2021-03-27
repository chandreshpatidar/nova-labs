import React, { useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import { AppointmentContext } from './appointment';
import { appointmentReducer } from '../../reducer/appointment';
import { getDateTime, getSlot } from '../../utils/date';
import { appointmentStatus } from '../../constants/category';
import { getRandomId } from '../../utils/faker';
import {
  appointmentActionsType,
  appointmentInitialState,
} from '../../constants/reducer';

const AppointmentContextProvider = ({ children }) => {
  // use useReducer hook to create a reducer and return updated state data with dispatch method
  const [state, dispatch] = useReducer(
    appointmentReducer,
    appointmentInitialState
  );

  // use useMemo hook for optimizing the performance of application, it render only when one of the dependency has changes
  // it handles all the actions of context
  const actions = useMemo(() => ({
    selectDate: (date) => {
      dispatch({
        type: appointmentActionsType.SELECT_DATE,
        payload: date,
      });
    },

    selectSlot: (slotId) => {
      const slot = state.availableSlots.slots.find(
        (slot) => slot.id === slotId
      );
      const date = {
        slot,
        date: state.availableSlots.date,
        id: state.availableSlots.id,
      };

      dispatch({
        type: appointmentActionsType.SELECT_SLOT,
        payload: date,
      });
    },

    takeAppointment: (serviceProvider) => {
      const appointment = {
        ...state.selectedSlot,
        id: getRandomId(),
        user: state.customer,
        serviceProvider,
        status: appointmentStatus.PENDING,
      };

      dispatch({
        type: appointmentActionsType.TAKE_APPOINTMENT,
        payload: appointment,
      });

      alert('Your appointment request has sent to Service Provider.');
      alert('Please check Service Provider section for appointment requests.');
    },

    acceptAppointment: (appointmentIndex) => {
      const appointments = [...state.appointments];
      appointments[appointmentIndex] = {
        ...appointments[appointmentIndex],
        status: appointmentStatus.ACCEPTED,
      };

      dispatch({
        type: appointmentActionsType.APPOINTMENT_ACTION,
        payload: appointments,
      });

      const time = getDateTime(appointments[appointmentIndex].slot.slotTime);
      alert(
        `Appointment Accepted for ${state.customer.name} scheduled at ${time}`
      );
    },

    rejectAppointment: (appointmentIndex) => {
      const appointments = [...state.appointments];
      appointments[appointmentIndex] = {
        ...appointments[appointmentIndex],
        status: appointmentStatus.REJECTED,
      };

      dispatch({
        type: appointmentActionsType.APPOINTMENT_ACTION,
        payload: appointments,
      });
    },

    createSlot: (spId, data) => {
      const serviceProviders = state.serviceProviders.map((sp) => {
        if (sp.id === spId) {
          return {
            ...sp,
            appointmentSlots: getSlot(sp.appointmentSlots, data),
          };
        }
        return sp;
      });

      dispatch({
        type: appointmentActionsType.CREATE_SLOT,
        payload: serviceProviders,
      });
      alert('Appointment Slot created');
    },

    resetAvailableSlot: () => {
      dispatch({ type: appointmentActionsType.RESET_AVAILABLE_SLOT });
    },
  }));

  return (
    <AppointmentContext.Provider value={{ state, actions }}>
      {children}
    </AppointmentContext.Provider>
  );
};

AppointmentContextProvider.defaultProps = {
  children: document.createElement('div'),
};

AppointmentContextProvider.propTypes = {
  children: PropTypes.node,
};

export default AppointmentContextProvider;
