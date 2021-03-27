import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import MuiPickers from '../MuiPickers';
import ServiceProvider from '../ServiceProvider';
import { noop } from '../../utils/noop';
import { DATE, FROM_TIME, TO_TIME } from '../../constants/pickerTypes';
import { formValidation } from './validation';
import { AppointmentContext } from '../../context/appointment/appointment';

const AppointmentForm = ({
  date,
  fromTime,
  toTime,
  onChange,
  serviceProvider,
  onSelectServiceProvider,
  onCreateSlot,
}) => {
  const [isValidate, setIsValidate] = useState({
    to: false,
    from: false,
    disable: true,
  });
  const { state } = useContext(AppointmentContext);
  const { serviceProviders } = state;

  useEffect(() => {
    handleFormValidation();
  }, [date, fromTime, toTime]);

  const handleFormValidation = () => {
    const dates = { date, fromTime, toTime };
    const res = formValidation(
      serviceProviders,
      serviceProvider,
      date,
      fromTime,
      toTime,
      dates
    );
    setIsValidate(res);
  };

  return (
    <>
      <ServiceProvider
        value={serviceProvider}
        onChange={onSelectServiceProvider}
      />
      {Boolean(Object.keys(serviceProvider || {}).length) && (
        <>
          <Box marginY={5}>
            <Divider />
            <Box marginY={5}>
              <Grid item md={12}>
                <Grid container justify='space-between'>
                  <Typography>Select Date:</Typography>
                  <Button
                    disabled={isValidate.disable}
                    color='primary'
                    variant='outlined'
                    onClick={onCreateSlot}
                  >
                    Create Slot
                  </Button>
                </Grid>
                <MuiPickers
                  variant='date'
                  label='Select Date'
                  name={DATE}
                  value={date}
                  onChange={onChange}
                />
              </Grid>
            </Box>
            <Box marginY={5}>
              <Grid container>
                <Grid item md={6}>
                  <Typography>Select Start Time:</Typography>
                  <MuiPickers
                    variant='time'
                    label='From'
                    name={FROM_TIME}
                    value={fromTime}
                    onChange={onChange}
                    error={isValidate.from}
                    errorMessage='Time is already taken.'
                  />
                </Grid>
                <Grid item md={6}>
                  <Typography>Select End Time:</Typography>
                  <MuiPickers
                    variant='time'
                    label='To'
                    name={TO_TIME}
                    value={toTime}
                    onChange={onChange}
                    error={isValidate.to}
                    errorMessage='Time must be greater than start time / time is already taken.'
                  />
                </Grid>
              </Grid>
            </Box>
            <Divider />
          </Box>
        </>
      )}
    </>
  );
};

AppointmentForm.propTypes = {
  date: PropTypes.instanceOf(Date),
  fromTime: PropTypes.instanceOf(Date),
  toTime: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  serviceProvider: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    appointmentSlots: PropTypes.arrayOf(PropTypes.object),
  }),
  onSelectServiceProvider: PropTypes.func.isRequired,
  onCreateSlot: PropTypes.func.isRequired,
};

AppointmentForm.defaultProps = {
  onChange: noop,
  onCreateSlot: noop,
};

export default AppointmentForm;
