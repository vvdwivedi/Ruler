/**
 *
 * AddRule
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
import makeSelectAddRule from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function AddRule() {
  useInjectReducer({ key: 'addRule', reducer });
  useInjectSaga({ key: 'addRule', saga });

  return (
    <div>
      <Helmet>
        <title>AddRule</title>
        <meta name="description" content="Description of AddRule" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AddRule.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addRule: makeSelectAddRule(),
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
)(AddRule);
