/**
 *
 * ViewRule
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
import makeSelectViewRule from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ViewRule() {
  useInjectReducer({ key: 'viewRule', reducer });
  useInjectSaga({ key: 'viewRule', saga });

  return (
    <div>
      <Helmet>
        <title>ViewRule</title>
        <meta name="description" content="Description of ViewRule" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ViewRule.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  viewRule: makeSelectViewRule(),
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
)(ViewRule);
