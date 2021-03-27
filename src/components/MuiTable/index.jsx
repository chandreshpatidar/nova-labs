import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import MuiTableHead from './TableHead';
import MuiTableBody from './TableBody';
import NotFound from './NotFound';

const MuiTable = ({ headers, rows, title }) => {
  return (
    <>
      <Typography align='center'>
        <b>{title}</b>
      </Typography>
      <Box marginY={5}>
        <TableContainer component={Paper}>
          <Table>
            <MuiTableHead headers={headers} />
            <MuiTableBody rows={rows} />
          </Table>
          {!rows.length && <NotFound />}
        </TableContainer>
      </Box>
    </>
  );
};

MuiTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.node),
  title: PropTypes.string,
};

export default MuiTable;
