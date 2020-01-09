/**
 *
 * EntityDashboard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectEntityDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function EntityDashboard() {
  useInjectReducer({ key: 'entityDashboard', reducer });
  useInjectSaga({ key: 'entityDashboard', saga });

  return (
    <div>
      <Helmet>
        <title>EntityDashboard</title>
        <meta name="description" content="Description of EntityDashboard" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

EntityDashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  entityDashboard: makeSelectEntityDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(EntityDashboard);
