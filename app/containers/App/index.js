/**
 *
 * App.js
 * This is skeleton around the app
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from '../../components/Header/Loadable';
import Sidebar from '../../components/Sidebar/Loadable';
import GlobalStyle from '../../global-styles';
import { AppWrapper, ContentWrapper, ContentArea } from './component';
import AboutPage from '../AboutPage/Loadable';
import AddRule from '../AddRule/Loadable';
import RulesDashboard from '../RulesDashboard/Loadable';
import ViewRule from '../ViewRule/Loadable';
import EditRule from '../EditRule/Loadable';
import AddEntity from '../AddEntity/Loadable';
import EntityDashboard from '../EntityDashboard/Loadable';
import ViewEntity from '../ViewEntity/Loadable';
import EditEntity from '../EditEntity/Loadable';

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <ContentArea>
        <Sidebar />
        <ContentWrapper>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/rules" component={RulesDashboard} />
            <Route exact path="/rules/new" component={AddRule} />
            <Route exact path="/rules/:id" component={ViewRule} />
            <Route exact path="/rules/:id/edit" component={EditRule} />
            <Route exact path="/entities" component={EntityDashboard} />
            <Route exact path="/entities/new" component={AddEntity} />
            <Route exact path="/entities/:id" component={ViewEntity} />
            <Route exact path="/entities/:id/edit" component={EditEntity} />
            <Route exact path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </ContentWrapper>
      </ContentArea>
      <GlobalStyle />
    </AppWrapper>
  );
}
