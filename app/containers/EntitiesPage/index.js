/**
 *
 * EntitiesPage
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
import makeSelectEntitiesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function EntitiesPage() {
  useInjectReducer({ key: 'entitiesPage', reducer });
  useInjectSaga({ key: 'entitiesPage', saga });

  return (
    <div>
      <Helmet>
        <title>EntitiesPage</title>
        <meta name="description" content="Description of EntitiesPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

EntitiesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  entitiesPage: makeSelectEntitiesPage(),
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
)(EntitiesPage);
