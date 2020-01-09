/**
 *
 * ExpressionGroup
 *
 */

import React, { memo, Component } from 'react';
import isObject from 'lodash/isObject';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SelectBox from '../SelectBox/Loadable';
import Button from '../Button/Loadable';
import Expression from '../Expression/Loadable';

const operands = [
  { value: 'and', label: 'All of the following rules are satisfied (AND)' },
  { value: 'or', label: 'Any child rule is satisfied (OR)' },
  { value: 'not', label: 'Following is not satisfied (NOT)' },
];

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

class ExpressionGroup extends Component {
  getExpressions = exps => {
    const els = [];
    exps.forEach(exp => {
      if (exp.expressions) {
        const isGrouped = exp.expressions.filter(ex => isObject(ex)).length;
        if (isGrouped) {
          els.push(
            <ExpressionGroup
              handleExpressionUpdate={val =>
                this.handleExpressionGroupUpdate(val)
              }
              handleOperandUpdate={val => this.handleOperandUpdate(exp.id, val)}
              key={exp.id}
              data={exp}
            />,
          );
        } else {
          els.push(
            <Expression
              key={exp.id}
              data={exp}
              formOptions={{
                comparators,
                entities,
              }}
              handleChange={(key, value) =>
                this.handleExpressionChange(exp.id, key, value)
              }
            />,
          );
        }
      }
    });
    return els;
  };

  handleOperandUpdate = (id, val) => {
    const current = Object.assign({}, this.props.data);
    current.expressions.forEach((exp, i) => {
      if (exp.id === id) {
        // eslint-disable-next-line no-param-reassign
        exp.operand = val;
        current.expressions[i] = exp;
      }
    });
    this.props.handleExpressionUpdate(current.expressions);
  };

  handleExpressionChange = (id, key, value) => {
    const current = Object.assign({}, this.props.data);
    current.expressions.forEach(exp => {
      if (exp.id === id) {
        // eslint-disable-next-line no-param-reassign
        exp[key] = value;
      }
    });
    this.props.handleExpressionUpdate(current.expressions);
  };

  handleAddGroup = () => {
    const current = Object.assign({}, this.props.data);
    if (!current.expressions) current.expressions = [];
    current.expressions.push({
      id: `tempc_123${current.expressions.length + 4005}`,
      operand: 'and',
      expressions: [
        {
          id: `tesp_123${current.expressions.length + 7001}`,
          operand: '>',
          expressions: [],
        },
      ],
    });
    this.props.handleExpressionUpdate(current.expressions);
  };

  handleAddRule = () => {
    const current = Object.assign({}, this.props.data);
    if (!current.expressions) current.expressions = [];
    current.expressions.push({
      id: `temp_123${current.expressions.length + 2001}`,
      operand: '>',
      expressions: [],
    });
    this.props.handleExpressionUpdate(current.expressions);
  };

  handleExpressionGroupUpdate = value => {
    const current = Object.assign({}, this.props.data);
    current.expressions.forEach((exp, i) => {
      if (exp.id === value.id) {
        // eslint-disable-next-line no-param-reassign
        current.expressions[i] = value;
      }
    });
    this.props.handleExpressionUpdate(current.expressions);
  };

  getColor = op => {
    switch (op) {
      case 'and':
        return 'rgb(255, 235, 59, 0.4)';
      case 'or':
        return 'rgb(27, 153, 139, 0.4)';
      case 'not':
        return 'rgb(255, 152, 0, 0.4)';
      default:
        return '#fff';
    }
  };

  render() {
    const rules = this.props.data || {};
    const color = this.getColor(rules.operand);
    return (
      <GroupWrapper>
        <OperandWrapper background={color}>
          <Col style={{ flex: 1 }}>
            <SelectBox
              options={operands}
              value={rules.operand || ''}
              fieldName="operand"
              onChange={(field, val) => this.props.handleOperandUpdate(val)}
            />
          </Col>
          <Col>
            <Button onClick={this.handleAddGroup}>Add Group</Button>
          </Col>
          <Col noPadding>
            <Button onClick={this.handleAddRule}>Add Rule</Button>
          </Col>
        </OperandWrapper>
        <ExpressionWrapper>
          {this.getExpressions(rules.expressions || [])}
        </ExpressionWrapper>
      </GroupWrapper>
    );
  }
}

ExpressionGroup.propTypes = {
  data: PropTypes.object,
  handleExpressionUpdate: PropTypes.func,
  handleOperandUpdate: PropTypes.func,
};

export default memo(ExpressionGroup);

export const OperandWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${props => props.background};
  padding: 10px;
  border-radius: 5px;
`;

export const Col = styled.div`
  padding-right: ${props => (props.noPadding ? '0' : '30px')};
`;

export const ExpressionWrapper = styled.div`
  padding: 20px;
  padding-right: 0;
`;

export const GroupWrapper = styled.div`
  border-left: 2px solid #1b998b;
  border-radius: 5px;
  padding: 20px;
  padding-right: 0;
  padding-bottom: 0;
  margin-top: 30px;
`;
