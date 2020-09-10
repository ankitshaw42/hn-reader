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

      <main className="mt-12 p-2 text-gray-800">
        <Switch>
          {newsPages.map((page) => (
            <Route path={`/${page}`} key={page}>
              <NewsPage pageName={page} />
            </Route>
          ))}

          <Route path="/user/:userName" component={UserInfo} />

          <Route path="/link/:linkId" component={LinkDetails} />

          {/* Redirect all other links to top page */}
          <Redirect to="/news" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
