import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home/Home';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
  </Route>
);
