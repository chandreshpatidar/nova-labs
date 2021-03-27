import React from 'react';
import PropTypes from 'prop-types';

import AppointmentContextProvider from './appointment/appointmentContextProvider';

// this is the root context provider, here we will render all context providers.
const AppContextProvider = ({ children }) => (
  <AppointmentContextProvider>{children}</AppointmentContextProvider>
);

AppContextProvider.defaultProps = {
  children: document.createElement('div'),
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
};

export default AppContextProvider;
