/**
 *
 * RuleList
 *
 */

import React, { memo, Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// eslint-disable-next-line react/prefer-stateless-function
class RuleList extends Component {
  getListItems = data => {
    const els = [];
    data.forEach(rule => {
      els.push(
        <ListItem
          key={rule.id}
          selected={rule.id === this.props.selectedId}
          onClick={() => this.props.handleSelected(rule.id)}
        >
          {rule.name}
        </ListItem>,
      );
    });
    return els;
  };

  render() {
    return (
      <ListWrapper>{this.getListItems(this.props.data || [])}</ListWrapper>
    );
  }
}

RuleList.propTypes = {
  data: PropTypes.array,
  selectedId: PropTypes.string,
  handleSelected: PropTypes.func,
};

export default memo(RuleList);

export const ListWrapper = styled.div`
  width: 200px;
`;

export const ListItem = styled.div`
  background-color: #1b998b;
  color: white;
  padding: 10px 25px;
  border-radius: 5px;
  text-decoration: none;
  display: block;
  opacity: ${props => (props.selected ? '1' : '0.5')};
  border: 1px solid #fff;
  font-size: 14px;
`;
