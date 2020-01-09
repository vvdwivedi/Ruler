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
const entities = [
  { value: 'montly_rental', label: 'Monthly Rental' },
  { value: 'order_value', label: 'Order Value' },
  { value: 'customer_age', label: 'Customer Age' },
];

const comparators = [
  { value: '>', label: 'is greater than' },
  { value: '>=', label: 'is greater or equal to' },
  { value: '<', label: 'is less than' },
  { value: '<=', label: 'is less or equal to' },
  { value: '=', label: 'is equal to' },
  { value: '!=', label: 'is not equal to' },
  { value: 'in', label: 'contains' },
  { value: 'notin', label: 'does not contains' },
];

/* eslint-disable react/prefer-stateless-function */
class Expression extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        entity: '',
        comparator: '',
        value: '',
      },
    };
  }

  handleChange = (field, value) => {
    this.setState(state => {
      const current = Object.assign({}, state.formData);
      current[field] = value;
      return {
        formData: current,
      };
    });
  };

  handleOperandChange = (field, value) => {
    this.props.handleChange(field, value);
  };

  render() {
    const data = this.props.data || {};
    return (
      <ExpressionWrapper>
        <Col>
          <SelectBox
            options={entities}
            value={data.entity || ''}
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
            value={data.value || ''}
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
};

export default memo(Expression);

export const ExpressionWrapper = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 5px;
  background: #fff;
  width: 100%;
  margin-bottom: 10px;
`;

export const Col = styled.div`
  flex: 1;
  padding-right: ${props => (props.noPadding ? '0' : '30px')};
`;
