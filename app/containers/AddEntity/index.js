/**
 *
 * AddEntity
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
import makeSelectAddEntity from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function AddEntity() {
  useInjectReducer({ key: 'addEntity', reducer });
  useInjectSaga({ key: 'addEntity', saga });

  return (
    <div>
      <Helmet>
        <title>AddEntity</title>
        <meta name="description" content="Description of AddEntity" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AddEntity.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addEntity: makeSelectAddEntity(),
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
)(AddEntity);
