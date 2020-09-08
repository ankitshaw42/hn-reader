import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import NewsPage from './pages/NewsPage';
import UserInfo from './pages/UserInfo';
import LinkDetails from './pages/LinkDetails';
import Header from './components/Header';

const newsPages = ['news', 'newest', 'show', 'ask', 'jobs'];

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        {newsPages.map((page) => (
          <Route path={`/${page}`} key={page}>
            <NewsPage pageName={page} />
          </Route>
        ))}

        <Route path="/user/:userName">
          <UserInfo />
        </Route>

        <Route path="/link/:linkId">
          <LinkDetails />
        </Route>

        {/* Redirect all other links to top page */}
        <Redirect to="/news" />
      </Switch>
    </Router>
  );
};

export default App;
