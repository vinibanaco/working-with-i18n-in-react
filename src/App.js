import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import styles from './App.module.css';

import Header from './components/header';
import Page1 from './modules/page-1';
import Page2 from './modules/page-2';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className={styles.content}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/page-1" />
          </Route>
          <Route path="/page-1">
            <Page1 />
          </Route>
          <Route path="/page-2">
            <Page2 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
