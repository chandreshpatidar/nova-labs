import React from 'react';
import PropTypes from 'prop-types';
import AutoComplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const MuiAutoComplete = ({ label, options, ...props }) => {
  return (
    <AutoComplete
      options={options}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
      {...props}
    />
  );
};

MuiAutoComplete.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
};

MuiAutoComplete.defaultProps = {
  options: [],
};

export default MuiAutoComplete;
