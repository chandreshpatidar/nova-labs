import React from 'react';

import Dashboard from './pages/Dashboard';
import AppContextProvider from './context';

const App = () => {
  return (
    <AppContextProvider>
      <Dashboard />
    </AppContextProvider>
  );
};

export default App;
