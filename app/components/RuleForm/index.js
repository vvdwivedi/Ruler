/* eslint-disable react/prefer-stateless-function */
/**
 *
 * RuleForm
 *
 */

import React, { memo, Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import InputBox from '../InputBox/Loadable';
import ExpressionGroup from '../ExpressionGroup/Loadable';
import Button from '../Button/Loadable';
import { FormGroup, FormLabel } from '../common/index';
const sampleData = {
  name: 'Test Rule',
  description: 'This is to test expressions',
  rules: {
    id: 'abc_123',
    operand: 'or',
    expressions: [
      { id: 'bc_123', operand: '>', expressions: ['montly_rental', '1200'] },
      {
        id: 'def_123',
        operand: 'and',
        expressions: [
          { id: 'abc_13', operand: '>', expressions: ['order_value', '2500'] },
          { id: 'abc_12', operand: '<', expressions: ['customer_age', '30'] },
        ],
      },
    ],
  },
};

class RuleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: this.props.formData || sampleData,
    };
  }

  componentDidUpdate(prevProps) {
    /* eslint-disable react/no-did-update-set-state */
    if (!isEqual(prevProps.formData, this.props.formData)) {
      this.setState({ formData: this.props.formData });
    }
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

  handleExpressionUpdate = value => {
    this.setState(state => {
      const current = Object.assign({}, state.formData);
      if (!current.rules) current.rules = {};
      current.rules.expressions = value;
      return {
        formData: current,
      };
    });
  };

  render() {
    const data = this.state.formData || {};
    const expressions = data.rules || {};
    return (
      <div>
        <form>
          <FormGroup>
            <FormLabel htmlFor="name">Create a rule called</FormLabel>
            <InputBox
              type="text"
              id="name"
              style={{ flex: 1 }}
              placeholder="rule name"
              value={data.name || ''}
              onChange={e => this.handleChange('name', e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="description">
              which can be described as
            </FormLabel>
            <InputBox
              type="text"
              id="description"
              style={{ flex: 1 }}
              value={data.description || ''}
              onChange={e => this.handleChange('description', e.target.value)}
              placeholder="explain rule details"
            />
          </FormGroup>
          <FormGroup block>
            <p>The rule passes when</p>
            <ExpressionGroup
              data={expressions}
              handleChange={updatedData =>
                this.handleExpressionUpdate(updatedData)
              }
            />
          </FormGroup>
        </form>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '30px',
          }}
        >
          <Button onClick={this.handleSave}>Save</Button>
        </div>
      </div>
    );
  }
}

RuleForm.propTypes = {
  formData: PropTypes.object,
};

export default memo(RuleForm);
