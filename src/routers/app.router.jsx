import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {StoriesListPage} from '../components/stories/storiesListPage.component';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={StoriesListPage} exact/>
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
