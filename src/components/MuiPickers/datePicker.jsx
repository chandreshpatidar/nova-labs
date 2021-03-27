import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardDatePicker } from '@material-ui/pickers';

import { noop } from '../../utils/noop';

const DatePicker = ({ value, onChange, name, ...props }) => {
  return (
    <KeyboardDatePicker
      margin="normal"
      id="date-picker-dialog"
      format="MM/dd/yyyy"
      value={value}
      minDate={new Date()}
      onChange={(date) => onChange(name, date)}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
      {...props}
    />
  );
};

DatePicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

DatePicker.defaultProps = {
  onChange: noop,
  value: new Date(),
};

export default DatePicker;
