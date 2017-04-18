import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import store from './store';

// Layout
import AppLayout from './layouts/app/container';

// Public pages
import { Home } from './pages';

const history = syncHistoryWithStore(browserHistory, store);

export default(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path='/' component={ AppLayout }>
        <IndexRoute component={ Home } />
      </Route>
    </Router>
  </Provider>
);
