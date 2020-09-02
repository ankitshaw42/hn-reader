import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import NewsList from './pages/NewsList';
import UserInfo from './pages/UserInfo';

const App = () => {
  return (
    <Router>
      <Layout>
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

        {/* Redirect all other links to top page */}
        <Redirect to="/top" />
      </Layout>
    </Router>
  );
};

export default App;
