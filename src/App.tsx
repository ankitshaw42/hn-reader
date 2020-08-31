import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Top from './pages/top';
import New from './pages/new';
import Show from './pages/show';
import Ask from './pages/ask';
import Jobs from './pages/jobs';

const App = () => {
  return (
    <Router>
      <Layout>
        <Route path="/top" component={Top} />
        <Route path="/new" component={New} />
        <Route path="/show" component={Show} />
        <Route path="/ask" component={Ask} />
        <Route path="/jobs" component={Jobs} />

        <Route path="/" render={() => <Redirect to="/top" />} />
      </Layout>
    </Router>
  );
};

export default App;
