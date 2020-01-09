/**
 *
 * Expression
 *
 */

import React, { memo, Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SelectBox from '../SelectBox/Loadable';
import InputBox from '../InputBox/Loadable';

/* eslint-disable react/prefer-stateless-function */
class Expression extends Component {
  handleChange = (field, value) => {
    const current = Object.assign({}, this.props.data);
    current.expressions[field === 'entity' ? 0 : 1] = value;
    this.props.handleChange('expressions', current.expressions);
  };

  handleOperandChange = (field, value) => {
    this.props.handleChange(field, value);
  };

  render() {
    const data = this.props.data || {};
    const { expressions = [] } = data;
    const { comparators = [], entities = [] } = this.props.formOptions;
    const entity = expressions[0];
    const value = expressions[1];
    return (
      <ExpressionWrapper>
        <Col>
          <SelectBox
            options={entities}
            value={entity}
            placeholder="Select Entity"
            fieldName="entity"
            onChange={this.handleChange}
          />
        </Col>
        <Col>
          <SelectBox
            options={comparators}
            value={data.operand || ''}
            placeholder="Select rule"
            fieldName="operand"
            onChange={this.handleOperandChange}
          />
        </Col>
        <Col noPadding>
          <InputBox
            type="text"
            placeholder="Enter value"
            value={value}
            onChange={e => this.handleChange('value', e.target.value)}
          />
        </Col>
      </ExpressionWrapper>
    );
  }
}

Expression.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func,
  formOptions: PropTypes.object,
};

export default memo(Expression);

export const ExpressionWrapper = styled.div`
  display: flex;
  padding: 5px 0;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;
`;

export const Col = styled.div`
  flex: 1;
  padding-right: ${props => (props.noPadding ? '0' : '30px')};
`;
