/**
 *
 * RuleList
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function RuleList() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

RuleList.propTypes = {};

export default memo(RuleList);
