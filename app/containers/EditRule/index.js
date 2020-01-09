/**
 *
 * EditRule
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
import makeSelectEditRule from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function EditRule() {
  useInjectReducer({ key: 'editRule', reducer });
  useInjectSaga({ key: 'editRule', saga });

  return (
    <div>
      <Helmet>
        <title>EditRule</title>
        <meta name="description" content="Description of EditRule" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

EditRule.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  editRule: makeSelectEditRule(),
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
)(EditRule);
