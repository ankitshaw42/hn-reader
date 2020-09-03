import React from 'react';
import Layout from './components/Layout';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import NewsList from './pages/NewsList';
import UserInfo from './pages/UserInfo';
import LinkDetails from './pages/LinkDetails';

const App = () => {
  return (
    <Router>
      <Layout>
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
      </Layout>
    </Router>
  );
};

export default App;
