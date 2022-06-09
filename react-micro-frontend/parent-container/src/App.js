import React from 'react';
import react_micro_frontendApp from './components/react_micro_frontendApp';
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import vue_micro_frontendApp from './components/vue_micro_frontendApp';

const history = createBrowserHistory();

const Header = () => (
    <div>
        <Link to='/'>home</Link><br />
        <Link to='/react'>use react</Link><br />
        <Link to='/vue'>use vue</Link>
    </div >
)

export default () => {
    return (
        <Router history={history}>
            <Header />
            <hr />
            <Switch>
                <Route path='/vue' component={vue_micro_frontendApp} />
                <Route path='/' component={react_micro_frontendApp} />
            </Switch>
        </Router>
    )
}