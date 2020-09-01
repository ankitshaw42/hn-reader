import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import NewsPage from './pages';

const App = () => {
  return (
    <Router>
      <Layout>
        <Route path="/top" component={NewsPage} />
        {/* <Route path="/new" component={New} />
        <Route path="/show" component={Show} />
        <Route path="/ask" component={Ask} />
        <Route path="/jobs" component={Jobs} /> */}

        <Route path="/" render={() => <Redirect to="/top" />} />
      </Layout>
    </Router>
  );
};

export default App;
