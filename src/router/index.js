import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import routes from './config';
import AllComponent from '@/view/index.js';

export default class CRouter extends Component {
    render () {
        return (
            <Switch>
                {
                    Object.keys(routes).map(key => {
                        return routes[key].map(r => {
                            const route = r => {
                                const Component = AllComponent[r.component];
                                return (
                                    <Route
                                        exact
                                        path={r.key}
                                        render={(props) => {
                                            // 重新包装组件
                                            const wrappedComponent = (
                                                <DocumentTitle title={r.title}>
                                                    <Component {...props} />
                                                </DocumentTitle>
                                            );
                                            return wrappedComponent;
                                        }} />
                                );
                            };
                            return r.component ? route(r) : r.subs.map(r => route(r));
                        });
                    })
                }
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        );
    }
}

