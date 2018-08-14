import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Shelf from './components/Shelf/Shelf';
import Bin from './components/Bin/Bin';
import Add from './components/Add/Add';

export default (
    <Switch>
        <Route component={ Home } path='/' exact />
        <Route component={ Shelf } path='/shelves/:id' exact />
        <Route component={ Bin } path='/shelf/:id/bin/:number' exact />
        <Route component={ Add } path='/add/:id/bin/:number' exact />
    </Switch>
)

// apparently routes can be super long?