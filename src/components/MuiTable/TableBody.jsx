import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';

const MuiTableBody = ({ rows }) => {
  return <TableBody>{rows.map((row) => row)}</TableBody>;
};

MuiTableBody.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.node),
};

MuiTableBody.defaultProps = {
  rows: [],
};

export default MuiTableBody;
