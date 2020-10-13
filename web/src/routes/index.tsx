import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
// import Orphanages from '../pages/Orphanages';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      {/* <Route path="/orphanages" component={Orphanages} /> */}
    </Switch>
  );
};

export default Routes;
