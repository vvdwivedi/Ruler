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

class RuleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: this.props.formData || {},
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
      if (!current.expression) current.expression = {};
      current.expression.expressions = value;
      return {
        formData: current,
      };
    });
  };

  handleOperandUpdate = value => {
    this.setState(state => {
      const current = Object.assign({}, state.formData);
      if (!current.expression) current.expression = {};
      current.expression.operand = value;
      return {
        formData: current,
      };
    });
  };

  handleSave = () => {
    const data = Object.assign({}, this.state.formData);
    console.log(data);
  };

  render() {
    const data = this.state.formData || {};
    const expressions = data.expression || {};
    const readOnly = this.props.readOnly || false;
    return (
      <div>
        <form>
          <FormGroup>
            <FormLabel htmlFor="name">This rule is called</FormLabel>
            <InputBox
              type="text"
              id="name"
              disabled={readOnly}
              style={{ flex: 1 }}
              placeholder="rule name"
              value={data.name || ''}
              onChange={e => this.handleChange('name', e.target.value)}
              inline
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="description">and can be described as</FormLabel>
            <InputBox
              type="text"
              id="description"
              disabled={readOnly}
              style={{ flex: 1 }}
              value={data.description || ''}
              onChange={e => this.handleChange('description', e.target.value)}
              placeholder="explain rule details"
              inline
            />
          </FormGroup>
          <FormGroup block>
            <p>The rule passes when</p>
            <ExpressionGroup
              data={expressions}
              handleExpressionUpdate={(key, val) =>
                this.handleExpressionUpdate(key, val)
              }
              disabled={readOnly}
              handleOperandUpdate={val => this.handleOperandUpdate(val)}
            />
          </FormGroup>
        </form>
        {!readOnly ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '30px',
            }}
          >
            <Button onClick={this.handleSave}>Save</Button>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

RuleForm.propTypes = {
  formData: PropTypes.object,
  readOnly: PropTypes.bool,
};

export default memo(RuleForm);
