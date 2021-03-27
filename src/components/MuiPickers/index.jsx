import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import DatePicker from './datePicker';
import TimePicker from './timePicker';
import { noop } from '../../utils/noop';

const MuiPickers = ({
  variant,
  value,
  label,
  name,
  onChange,
  error,
  errorMessage,
}) => {
  const pickers = {
    date: DatePicker,
    time: TimePicker,
  };

  const Picker = pickers[variant];

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Picker
        label={label}
        value={value}
        onChange={onChange}
        name={name}
        error={error}
        errorMessage={errorMessage}
      />
    </MuiPickersUtilsProvider>
  );
};

MuiPickers.propTypes = {
  variant: PropTypes.oneOf(['date', 'time']).isRequired,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

MuiPickers.defaultProps = {
  variant: 'date',
  onChange: noop,
  error: false,
};

export default MuiPickers;
