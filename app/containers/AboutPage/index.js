/**
 *
 * AboutPage
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
import makeSelectAboutPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function AboutPage() {
  useInjectReducer({ key: 'aboutPage', reducer });
  useInjectSaga({ key: 'aboutPage', saga });

  return (
    <div>
      <Helmet>
        <title>AboutPage</title>
        <meta name="description" content="Description of AboutPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AboutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  aboutPage: makeSelectAboutPage(),
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
)(AboutPage);
