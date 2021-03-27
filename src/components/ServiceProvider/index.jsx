import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import { AppointmentContext } from '../../context/appointment/appointment';
import MuiAutoComplete from '../MuiAutoComplete';
import { noop } from '../../utils/noop';

const ServiceProvider = ({ onChange, value }) => {
  const { state } = useContext(AppointmentContext);
  const { serviceProviders } = state;

  return (
    <Grid item md={6}>
      <MuiAutoComplete
        options={serviceProviders}
        label="Select Service Provider"
        value={value}
        getOptionLabel={(option) => option.name}
        onChange={(event, option) => onChange(option)}
      />
    </Grid>
  );
};

ServiceProvider.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

ServiceProvider.defaultProps = {
  onChange: noop,
};

export default ServiceProvider;
