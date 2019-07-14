import React from 'react';
import PropTypes from 'prop-types';

function Topic({ match }) {
	return (
		<div>
			<h3>{match.params.topicId}</h3>
		</div>
	);
}

Topic.propTypes = {
	match: PropTypes.object,
};

export default Topic;
