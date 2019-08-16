import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import routes from './config';
import AllComponent from '@/view/index.js';

export default class CRouter extends Component {
    constructor(props){
        super(props);
        this.state = {
          auth : false, // 表示是否认证通过
          hasAuthed: false, // 表示是否向服务器发送过认证请求
        };
    }
    render () {
        return (
            <Switch>
                {
                    Object.keys(routes).map(key => {
                        return routes[key].map(r => {
                            const route = r => {
                                const Component = AllComponent[r.component];
                                return (
                                    <Route exact
                                           key={r.key}
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

