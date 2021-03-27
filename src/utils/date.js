import moment from 'moment';
import { getRandomId } from './faker';

export const getTime = (date) => moment(date).format('hh:mm A');

export const getDate = (date) => moment(date).format('DD-MMM-YYYY');

export const getDateTime = (date) => moment(date).format('DD-MMM-YYYY hh:mm A');

// define method to get new appointment slot
export const getSlot = (slots, newSlot) => {
  const newSlots = [...slots];
  const time = {
    id: getRandomId(),
    fromTime: newSlot.slots[0].fromTime,
    toTime: newSlot.slots[0].toTime,
  };

  if (newSlots.length) {
    const slotIndex = newSlots.findIndex(
      (slot) => getDate(slot.date) === getDate(newSlot.date)
    );

    if (slotIndex === -1) {
      newSlots.push(newSlot);
    } else {
      newSlots[slotIndex].slots = [...newSlots[slotIndex].slots, { ...time }];
    }

    return newSlots;
  }
  return [newSlot];
};
