import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home/Home';
import Services from '../components/Services/Services';
import Portfolio from '../components/Portfolio/Portfolio';
import Training from '../components/Training/Training';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="/services" component={Services}/>
    <Route path="/portfolio" component={Portfolio}/>
    <Route path="/training" component={Training}/>
  </Route>
);
