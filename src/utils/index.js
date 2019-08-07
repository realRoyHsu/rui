import React from 'react';
import { Route } from 'react-router-dom';


// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
	return (
        <Route exact={route.exact}
               path={route.path}
               render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props}
                                 routes={route.routes} />
            )} />
	);
}

// JOSN 格式化
function parseJson(strJson) {
    let str = JSON.stringify(strJson);
    let strReplace = str.replace(/\\n/g,'').replace(/\\t/g,'').replace(/\\r/g,'');
    let strTrim = strReplace.replace(/\s/g,'');
    let start = strTrim.indexOf('{');
    let end = strTrim.lastIndexOf('{');
    console.log(strTrim,start,end);
}

export default RouteWithSubRoutes;
export {parseJson};


