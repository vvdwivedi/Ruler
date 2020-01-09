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

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <ContentArea>
        <Sidebar />
        <ContentWrapper>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </ContentWrapper>
      </ContentArea>
      <GlobalStyle />
    </AppWrapper>
  );
}
