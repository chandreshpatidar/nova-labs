import React, { useState } from 'react';

import BuyerContainer from '../../components/BuyerContainer';
import Category from '../../components/Category';
import ServiceProviderContainer from '../../components/ServiceProviderContainer';
import { categoryType } from '../../constants/category';

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState(categoryType.BUYER);

  const onChangeModule = (type) => {
    setActiveModule(type);
  };

  return (
    <>
      <Category moduleType={activeModule} onChangeModule={onChangeModule} />
      {activeModule === categoryType.BUYER ? (
        <BuyerContainer />
      ) : (
        <ServiceProviderContainer />
      )}
    </>
  );
};

export default Dashboard;
