import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import NewsPage from './pages';

const App = () => {
  return (
    <Router>
      <Layout>
        <Route path="/top">
          <NewsPage pageName="news" />
        </Route>

        <Route path="/new">
          <NewsPage pageName="newest" />
        </Route>

        <Route path="/show">
          <NewsPage pageName="show" />
        </Route>

        <Route path="/ask">
          <NewsPage pageName="ask" />
        </Route>

        <Route path="/jobs">
          <NewsPage pageName="jobs" />
        </Route>

        <Redirect to="/top" />
      </Layout>
    </Router>
  );
};

export default App;
