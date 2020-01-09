/**
 *
 * Button
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Button(props) {
  return (
    <StyledButton type="button" {...props}>
      {props.children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.any,
};

export default memo(Button);

export const StyledButton = styled.button`
  background-color: #1b998b;
  border: none;
  color: white;
  padding: 11px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
`;
