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

class ExpressionGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: this.props.data || {},
    };
  }

  getExpressions = exressions => {
    const els = [];
    exressions.forEach(exp => {
      if (exp.expressions) {
        const isGrouped = exp.expressions.filter(ex => isObject(ex)).length;
        if (isGrouped) {
          els.push(<ExpressionGroup key={exp.id} data={exp} />);
        } else {
          els.push(
            <Expression
              key={exp.id}
              data={exp}
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

  handleExpressionChange = (id, key, value) => {
    console.log(id, key, value);
    // this.props.handleChange(); send total updated value
  };

  handleAddGroup = () => {};

  handleAddRule = () => {
    this.setState(state => {
      const current = Object.assign({}, state.formData);
      if (!current.expressions) current.expressions = [];
      current.expressions.push({
        id: `temp_123${current.expressions.length + 2001}`,
        operand: '>',
        expressions: [],
      });
      return {
        formData: current,
      };
    });
  };

  render() {
    const rules = this.state.formData || {};
    return (
      <GroupWrapper>
        <OperandWrapper>
          <Col style={{ flex: 1 }}>
            <SelectBox
              options={operands}
              value={rules.operand || ''}
              fieldName="operand"
              onChange={() => {}}
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
};

export default memo(ExpressionGroup);

export const OperandWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
`;

export const Col = styled.div`
  padding-right: ${props => (props.noPadding ? '0' : '30px')};
`;

export const ExpressionWrapper = styled.div`
  padding: 30px;
  padding-right: 0;
`;

export const GroupWrapper = styled.div`
  border-left: 3px solid #1b998b;
  border-radius: 5px;
  padding: 30px;
  padding-right: 0;
  margin-top: 30px;
  margin-bottom: 30px;
`;
