/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import RuleForm from '../../components/RuleForm/Loadable';

export default function HomePage() {
  return (
    <div>
      <RuleForm />
    </div>
  );
}
