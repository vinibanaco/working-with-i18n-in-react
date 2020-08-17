import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import styles from './App.module.css';

import UserContext from './cross-cutting/contexts/user';
import Header from './components/header';
import Page1 from './modules/page-1';
import Page2 from './modules/page-2';

function App() {
  const [language, setLanguage] = useState('enUS');

  const userContextValue = {
    language,
    setLanguage,
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={userContextValue}>
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
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
