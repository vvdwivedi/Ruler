/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderWrapper>
      <Logo>Ruler</Logo>
    </HeaderWrapper>
  );
}

Header.propTypes = {};

export default memo(Header);

export const HeaderWrapper = styled.div`
  display: flex;
  height: 60px;
  background-color: #fff;
`;

export const Logo = styled.div`
  height: 100%;
  line-height: 60px;
  padding: 0 30px;
  color: #1b998b;
  font-size: 30px;
`;
