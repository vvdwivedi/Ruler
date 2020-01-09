/**
 *
 * RulesDashboard
 *
 */

import React, { memo, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRulesDashboard, { makeSelectRules } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { PageHeading, FlexDiv } from '../../components/common/index';
import RuleList from '../../components/RuleList/Loadable';
import RuleForm from '../../components/RuleForm/Loadable';
import * as actions from './actions';

const rules = [
  {
    name: 'Test Rule',
    id: 1,
    description: 'This is to test expressions',
    expression: {
      id: 'abc_123',
      operand: 'or',
      expressions: [
        { id: 'bc_123', operand: '>', expressions: ['montly_rental', '1200'] },
        {
          id: 'def_123',
          operand: 'and',
          expressions: [
            {
              id: 'abc_13',
              operand: '>',
              expressions: ['order_value', '2500'],
            },
            { id: 'abc_12', operand: '<', expressions: ['customer_age', '30'] },
          ],
        },
      ],
    },
  },
  {
    name: 'Test Rule 1 ',
    id: 2,
    description: 'This is to test expressions',
    expression: {
      id: 'abc_123',
      operand: 'or',
      expressions: [
        { id: 'bc_123', operand: '>', expressions: ['montly_rental', '1200'] },
        {
          id: 'def_123',
          operand: 'and',
          expressions: [
            {
              id: 'abc_13',
              operand: '>',
              expressions: ['order_value', '2500'],
            },
            { id: 'abc_12', operand: '<', expressions: ['customer_age', '30'] },
          ],
        },
      ],
    },
  },
  {
    name: 'Test Rule2 ',
    id: 3,
    description: 'This is to test expressions',
    expression: {
      id: 'abc_123',
      operand: 'or',
      expressions: [
        { id: 'bc_123', operand: '>', expressions: ['montly_rental', '1200'] },
        {
          id: 'def_123',
          operand: 'and',
          expressions: [
            {
              id: 'abc_13',
              operand: '>',
              expressions: ['order_value', '2500'],
            },
            { id: 'abc_12', operand: '<', expressions: ['customer_age', '30'] },
          ],
        },
      ],
    },
  },
  {
    name: 'Test Rule4',
    id: 4,
    description: 'This is to test expressions',
    expression: {
      id: 'abc_123',
      operand: 'or',
      expressions: [
        { id: 'bc_123', operand: '>', expressions: ['montly_rental', '1200'] },
        {
          id: 'def_123',
          operand: 'and',
          expressions: [
            {
              id: 'abc_13',
              operand: '>',
              expressions: ['order_value', '2500'],
            },
            { id: 'abc_12', operand: '<', expressions: ['customer_age', '30'] },
          ],
        },
      ],
    },
  },
];
export class RulesDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      rules: [],
    };
  }

  componentDidMount() {
    this.props.actions.fetchRulesRequest();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.rules !== this.props.rules) {
      const rules = this.props.rules || [];
      const selectedId = rules.length ? rules[0].id : null;
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ rules, selectedId });
    }
  }

  handleSelected = id => {
    this.setState({ selectedId: id });
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Rules Dashboard</title>
          <meta name="description" content="List of all rules" />
        </Helmet>
        <PageHeading>Rules</PageHeading>
        <FlexDiv>
          <RuleList
            data={this.state.rules}
            selectedId={this.state.selectedId}
            handleSelected={this.handleSelected}
          />
          {this.state.selectedId ? (
            <div style={{ padding: '0 30px', height: '100%', flex: 1 }}>
              <RuleForm
                readOnly
                formData={this.state.rules[this.state.selectedId]}
              />
            </div>
          ) : (
            ''
          )}
        </FlexDiv>
      </div>
    );
  }
}

RulesDashboard.propTypes = {
  actions: PropTypes.object.isRequired,
  rules: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  rulesDashboard: makeSelectRulesDashboard(),
  rules: makeSelectRules(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'rulesDashboard', reducer });
const withSaga = injectSaga({ key: 'rulesDashboard', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
  memo,
)(RulesDashboard);
