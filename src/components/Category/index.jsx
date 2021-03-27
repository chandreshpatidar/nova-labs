import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { noop } from '../../utils/noop';
import { categoryType } from '../../constants/category';
import BuyerProfile from '../BuyerProfile';

const useStyles = makeStyles({
  root: {
    border: '1px solid #3f51b5',
  },
  button: {
    borderRadius: 0,
    width: 200,
  },
});

const Category = ({ moduleType, onChangeModule }) => {
  const styles = useStyles();

  const getVariant = (type) => {
    if (type === moduleType) {
      return 'contained';
    }
    return 'text';
  };

  return (
    <Box paddingY={5} mr={20}>
      <Grid container justify='space-between'>
        <Grid item>
          {moduleType === categoryType.BUYER ? (
            <BuyerProfile />
          ) : (
            <Box paddingX={5}>
              <Typography align='left'>
                Please select <b>Service Provider</b> to create{' '}
                <b>appointment slot</b>
                <br />
                and <b>get appointment request</b>
              </Typography>
            </Box>
          )}
        </Grid>
        <Grid item>
          <Grid className={styles.root}>
            <Button
              color='primary'
              variant={getVariant(categoryType.BUYER)}
              className={styles.button}
              onClick={() => onChangeModule(categoryType.BUYER)}
            >
              Buyer
            </Button>
            <Button
              color='primary'
              variant={getVariant(categoryType.SERVICE_PROVIDER)}
              className={styles.button}
              onClick={() => onChangeModule(categoryType.SERVICE_PROVIDER)}
            >
              Service Provider
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

Category.propTypes = {
  moduleType: PropTypes.string.isRequired,
  onChangeModule: PropTypes.func.isRequired,
};

Category.defaultProps = {
  moduleType: 'buyer',
  onChangeModule: noop,
};

export default Category;
