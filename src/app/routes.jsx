import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

import Home from './components/Home';
import Info from './components/Info';
import Story from './components/Story';
import Rsvp from './components/Rsvp';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/info" component={Info} />
        <Route path="/story" component={Story} />
        <Route path="/rsvp" component={Rsvp}/>
    </Route>

);
