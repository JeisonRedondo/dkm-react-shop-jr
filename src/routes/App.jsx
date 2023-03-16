import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/global.css';

import Layout from '../containers/Layout';
import Login from '../containers/Login';
import CreateAccount from '../containers/CreateAccount';
import EditAccount from '../containers/EditAccount';
import NewPassword from '../containers/NewPassword';
import RecoveryPassword from '../containers/RecoveryPassword';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/create-account" component={CreateAccount} />
                    <Route exact path="/edit-account" component={EditAccount} />
                    <Route exact path="/new-password" component={NewPassword} />
                    <Route exact path="/recovery-password" component={RecoveryPassword} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;