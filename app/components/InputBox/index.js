/**
 *
 * InputBox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function InputBox(props) {
  return <WrappedInput {...props} />;
}

InputBox.propTypes = {
  type: PropTypes.string,
};

export default InputBox;

export const WrappedInput = styled.input`
  border: none;
  color: rgba(9, 30, 66, 0.87);
  border-radius: 5px;
  line-height: 1.5;
  padding: 6px 20px;
  width: 100%;
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
`;
