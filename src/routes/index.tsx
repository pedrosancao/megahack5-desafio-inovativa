import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Admin from '../pages/Admin';
import Journey from '../pages/Journey';
import Mentoria from '../pages/Mentoria';
import Menu from '../pages/Menu';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Menu} />
    <Route path="/jornada" component={Journey} />
    <Route path="/mentoria" component={Mentoria} />
    <Route path="/admin" component={Admin} />
  </Switch>
);

export default Routes;
