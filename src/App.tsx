import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import NewsList from './pages/NewsList';
import UserInfo from './pages/UserInfo';
import LinkDetails from './pages/LinkDetails';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/top">
          <NewsList pageName="news" />
        </Route>

        <Route path="/new">
          <NewsList pageName="newest" />
        </Route>

        <Route path="/show">
          <NewsList pageName="show" />
        </Route>

        <Route path="/ask">
          <NewsList pageName="ask" />
        </Route>

        <Route path="/jobs">
          <NewsList pageName="jobs" />
        </Route>

        <Route path="/user/:userName">
          <UserInfo />
        </Route>

        <Route path="/link/:linkId">
          <LinkDetails />
        </Route>

        {/* Redirect all other links to top page */}
        <Redirect to="/top" />
      </Switch>
    </Router>
  );
};

export default App;
