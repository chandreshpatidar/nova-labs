import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tableHead: {
    fontWeight: 700,
  },
});

const MuiTableHead = ({ headers }) => {
  const styles = useStyles();
  return (
    <TableHead>
      <TableRow>
        {headers.map((header) => (
          <TableCell key={header} className={styles.tableHead}>
            {header}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

MuiTableHead.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
};

MuiTableHead.defaultProps = {
  headers: [],
};

export default MuiTableHead;
