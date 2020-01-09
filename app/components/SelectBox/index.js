/**
 *
 * SelectBox
 *
 */

import React, { memo, Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Select from 'react-select';

class SelectBox extends Component {
  resolveOptionLabel = opt => opt[this.props.labelNode || 'label'];

  resolveOptionValue = opt => opt[this.props.valueNode || 'value'];

  handleChange = opt => {
    if (this.props.isMulti) {
      this.props.onChange(this.props.fieldName, opt);
    } else {
      this.props.onChange(
        this.props.fieldName,
        opt[this.props.valueNode || 'value'],
      );
    }
  };

  valueFromSelected = (opts, value) => {
    if (this.props.isMulti) {
      // return filter(opts, )
      return value;
    }
    return opts.find(o => o[this.props.valueNode || 'value'] === value);
  };

  render() {
    const { options, value, isMulti, placeholder, disabled } = this.props;
    return (
      <Select
        isMulti={!!isMulti}
        isDisabled={disabled}
        options={options}
        placeholder={placeholder}
        onChange={this.handleChange}
        isSearchable
        value={
          value !== undefined ? this.valueFromSelected(options, value) : null
        }
      />
    );
  }
}

SelectBox.propTypes = {
  options: PropTypes.array,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
  ]),
  placeholder: PropTypes.string,
  isMulti: PropTypes.bool,
  valueNode: PropTypes.string,
  labelNode: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  fieldName: PropTypes.string,
};

export default memo(SelectBox);
