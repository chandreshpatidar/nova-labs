import moment from 'moment';
import { getDate } from '../../utils/date';

export const formValidation = (
  serviceProviders,
  serviceProvider,
  date,
  fromTime,
  toTime,
  timeSlot
) => {
  let errors = {
    to: false,
    from: false,
    disable: false,
  };

  // check error if no date and time selected
  const form = Object.keys(timeSlot);
  errors.disable = form.some((value) => timeSlot[value] === null);

  // check if new slot already exists
  // find selected service provider index
  const spIndex = serviceProviders.findIndex(
    (sp) => sp.id === serviceProvider.id
  );

  // get the existing slot data corresponding to the service provider
  const appointmentSlot = serviceProviders?.[spIndex]?.appointmentSlots?.find(
    (slot) => getDate(slot.date) === getDate(date)
  );

  // run, if part, if the slots not exists otherwise run else part
  if (appointmentSlot === undefined) {
    errors.from = false;
    errors.to = false;
  } else {
    for (let slot of appointmentSlot.slots) {
      // get formated form start date
      const compareFromDate = moment(
        getDate(date) + ' ' + moment(fromTime).format('hh:mm'),
        'DD-MMM-YYYY hh:mm A'
      );
      // get formated form end date
      const compareToDate = moment(
        getDate(date) + ' ' + moment(toTime).format('hh:mm'),
        'DD-MMM-YYYY hh:mm A'
      );
      // get formated existing start date
      const startDate = moment(
        getDate(appointmentSlot?.date) +
          ' ' +
          moment(slot.fromTime).format('hh:mm'),
        'DD-MMM-YYYY hh:mm A'
      );
      // get formated existing end date
      const endDate = moment(
        getDate(appointmentSlot?.date) +
          ' ' +
          moment(slot.toTime).format('hh:mm'),
        'DD-MMM-YYYY hh:mm A'
      );
      // compare new and existing slots
      const isFromBetween = compareFromDate.isBetween(startDate, endDate);
      const isToBetween = compareToDate.isBetween(startDate, endDate);
      if (isFromBetween) {
        errors.from = isFromBetween;
        errors.disable = true;
      }
      if (isToBetween) {
        errors.to = isToBetween;
        errors.disable = true;
      }
    }
  }

  // check if the start time if less than the end time
  const startTime = moment(fromTime, 'hh:mm');
  const endTime = moment(toTime, 'hh:mm');
  const isStartDate = endTime.isAfter(startTime);
  if (toTime && !isStartDate) {
    errors.to = true;
    errors.disable = true;
  }

  return errors;
};
