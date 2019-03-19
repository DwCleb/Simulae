import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './landingpage/LandingPage';
import GlobalStyle from './styles/global';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <div className="App">
      <Route
        exact
        path="/"
        render={() => (
          <LandingPage />
        )}
      />
    </div>
  </Fragment>
);

export default App;
