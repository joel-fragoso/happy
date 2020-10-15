import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Orphanages from '../pages/Orphanages';
import CreateOrphanage from '../pages/CreateOrphanage';
import DetailsOrphanage from '../pages/DetailsOrphanage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/orphanages/create" component={CreateOrphanage} />
      <Route path="/orphanages/:id" component={DetailsOrphanage} />
      <Route path="/orphanages" component={Orphanages} />
      <Route path="/" component={Landing} />
    </Switch>
  );
};

export default Routes;
