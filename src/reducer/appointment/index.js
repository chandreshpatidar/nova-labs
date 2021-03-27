import { appointmentActionsType } from '../../constants/reducer';

export const appointmentReducer = (state, action) => {
  switch (action.type) {
    case appointmentActionsType.SELECT_DATE:
      return {
        ...state,
        availableSlots: action.payload,
        selectedSlot: {},
      };

    case appointmentActionsType.SELECT_SLOT:
      return {
        ...state,
        selectedSlot: action.payload,
      };

    case appointmentActionsType.TAKE_APPOINTMENT:
      return {
        ...state,
        appointments: [...state.appointments, action.payload],
        selectedSlot: {},
      };

    case appointmentActionsType.APPOINTMENT_ACTION:
      return {
        ...state,
        appointments: action.payload,
      };

    case appointmentActionsType.CREATE_SLOT:
      return {
        ...state,
        serviceProviders: action.payload,
      };

    case appointmentActionsType.RESET_AVAILABLE_SLOT:
      return {
        ...state,
        availableSlots: {},
      };

    default:
      return state;
  }
};
