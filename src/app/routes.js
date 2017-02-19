import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

import Home from './components/Home';
import Travel from './components/Travel';
import Venue from './components/Venue';
import Story from './components/Story';
import Rsvp from './components/Rsvp';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/travel" component={Travel} />
    <Route path="/venue" component={Venue} />
    <Route path="/story" component={Story} />
    <Route path="/rsvp" component={Rsvp} />
  </Route>
);
