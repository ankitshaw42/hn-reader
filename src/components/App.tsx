import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './Header';
import Loading from './Loading';

const NewsPage = lazy(() => import('../pages/NewsPage'));
const UserInfo = lazy(() => import('../pages/UserInfo'));
const LinkDetails = lazy(() => import('../pages/LinkDetails'));

const newsPages = ['news', 'newest', 'show', 'ask', 'jobs'];

export default function App() {
  return (
    <Router>
      <Header />

      <main className="mt-12 p-2 text-gray-800 max-w-4xl mx-auto">
        <Suspense fallback={<Loading />}>
          <Switch>
            {newsPages.map((page) => (
              <Route path={`/${page}`} key={page}>
                <NewsPage pageName={page} />
              </Route>
            ))}

            <Route path="/user/:userName" component={UserInfo} />

            <Route path="/link/:linkId" component={LinkDetails} />

            {/* Redirect all other links to news page */}
            <Redirect to="/news" />
          </Switch>
        </Suspense>
      </main>
    </Router>
  );
}
