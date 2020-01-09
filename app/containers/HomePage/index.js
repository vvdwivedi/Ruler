/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import RuleForm from '../../components/RuleForm/Loadable';
const sampleData = {
  name: 'Test Rule',
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
          { id: 'abc_13', operand: '>', expressions: ['order_value', '2500'] },
          { id: 'abc_12', operand: '<', expressions: ['customer_age', '30'] },
        ],
      },
    ],
  },
};
export default function HomePage() {
  return (
    <div>
      <RuleForm formData={sampleData} />
    </div>
  );
}
