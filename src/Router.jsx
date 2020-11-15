import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

export default () => (
    <Router>
        <Switch>
            <Route path="/Signup/" exact={true} component={Signup}></Route>
            <Route path="/Login/" exact component={Login}></Route>
            <Redirect to="/Signup/"></Redirect>
        </Switch>
    </Router>
)
