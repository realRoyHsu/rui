/* Import statements */
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// import Basic from '@/view/Basic/index';
import NotFound from '@/common/NotFound.jsx';
import Main from '@/common/Main.jsx';


/* App component */
class App extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route exact
                           path="/"
                           render={() => (<Redirect push
                                                    to="/main/dashboard/index" />)} />
                    <Route component={Main}
                           path="/main" />
                    <Route component={NotFound}
                           path="/404" />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;
