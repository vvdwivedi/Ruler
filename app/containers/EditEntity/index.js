/**
 *
 * EditEntity
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
import makeSelectEditEntity from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function EditEntity() {
  useInjectReducer({ key: 'editEntity', reducer });
  useInjectSaga({ key: 'editEntity', saga });

  return (
    <div>
      <Helmet>
        <title>EditEntity</title>
        <meta name="description" content="Description of EditEntity" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

EditEntity.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  editEntity: makeSelectEditEntity(),
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
)(EditEntity);
