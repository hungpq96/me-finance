import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import routes from 'routes';
import Transactions from 'apps/transactions';
import Reports from 'apps/reports';
import Credits from 'apps/credits';
import { DefaultLayout } from 'apps/layouts';

function App() {
  return (
    <Router>
      <Switch>
        <DefaultLayout
          path={routes.transactions.url}
          component={Transactions}
        />

        <DefaultLayout
          path={routes.reports.url}
          component={Reports}
        />

        <DefaultLayout
          path={routes.credits.url}
          component={Credits}
        />
      </Switch>
    </Router>
  );
}

export default App;
