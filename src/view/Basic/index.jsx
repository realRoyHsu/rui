import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import RouteWithSubRoutes from '@/utils/index';
import routes from '@/router/config';

class Basic extends Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/topics">Topics</Link>
						</li>
					</ul>
					<hr/>
					{/* <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} /> */}
					{
						routes.map((route,i)=>(
							<RouteWithSubRoutes key={i} {...route} />
						))
					}
				</div>
			</Router>
		);
	}
}

export default Basic;