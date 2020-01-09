/**
 *
 * ViewEntity
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
import makeSelectViewEntity from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function ViewEntity() {
  useInjectReducer({ key: 'viewEntity', reducer });
  useInjectSaga({ key: 'viewEntity', saga });

  return (
    <div>
      <Helmet>
        <title>ViewEntity</title>
        <meta name="description" content="Description of ViewEntity" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ViewEntity.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  viewEntity: makeSelectViewEntity(),
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
)(ViewEntity);
