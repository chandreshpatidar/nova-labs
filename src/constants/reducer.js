import { customer, serviceProviders } from './customer';

export const appointmentInitialState = {
  serviceProviders,
  customer,
  availableSlots: {},
  selectedSlot: {},
  appointments: [],
};

export const appointmentActionsType = {
  SELECT_DATE: 'SELECT_DATE',
  SELECT_SLOT: 'SELECT_SLOT',
  TAKE_APPOINTMENT: 'TAKE_APPOINTMENT',
  APPOINTMENT_ACTION: 'APPOINTMENT_ACTION',
  CREATE_SLOT: 'CREATE_SLOT',
  RESET_AVAILABLE_SLOT: 'RESET_AVAILABLE_SLOT',
};
