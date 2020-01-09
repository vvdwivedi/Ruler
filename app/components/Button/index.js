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
  color: white;
  padding: 10px 25px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  opacity: 0.8;
  border: 1px solid #fff;
  font-size: 14px;
`;
