import faker from 'faker';

export const getName = () => {
  return `${faker.name.firstName()} ${faker.name.lastName()}`;
};

export const getRandomId = () => faker.random.number();
