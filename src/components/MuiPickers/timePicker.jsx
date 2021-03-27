import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardTimePicker } from '@material-ui/pickers';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';

import { noop } from '../../utils/noop';

const useStyle = makeStyles({
  helperText: {
    color: 'red',
  },
});

const TimePicker = ({
  value,
  onChange,
  name,
  error,
  errorMessage,
  ...props
}) => {
  const styles = useStyle();

  return (
    <>
      <KeyboardTimePicker
        margin='normal'
        id='time-picker'
        value={value}
        onChange={(date) => onChange(name, date)}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
        error={error}
        {...props}
      />
      {error && (
        <FormHelperText className={styles.helperText}>
          {errorMessage}
        </FormHelperText>
      )}
    </>
  );
};

TimePicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

TimePicker.defaultProps = {
  onChange: noop,
  value: new Date(),
};

export default TimePicker;
