import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import RouteWithSubRoutes from '@/utils/index';

function Topics(props) {
	const { match, routes } = props;
	console.log(props, routes, '----Topics');
	return (
		<div>
			<h1>Topics</h1>
			<div>
				<ul>
					<li>
						<Link to={`${match.url}/rendering`}>Rendering with React</Link>
					</li>
					<li>
						<Link to={`${match.url}/components`}>Components</Link>
					</li>
					<li>
						<Link to={`${match.url}/props`}>Props v. State</Link>
					</li>
				</ul>
			</div>
			{/* <Route
            path={`${match.path}/:topicId`}
            render={({match})=>{  return <h3>{match.params.topicId}</h3>}} /> */}
			{/* <Route
            path={`${match.path}/:topicId`}
            component={Topic} /> */}
			{routes.map((route, i) => (
				<RouteWithSubRoutes key={i}
                        {...route} />
			))}
			<Route
    exact
    path={match.path}
    render={() => <h3>Please select a topic.</h3>}
			/>
		</div>
	);
}

Topics.propTypes = {
	match: PropTypes.object,
	routes: PropTypes.array,
};

export default Topics;
