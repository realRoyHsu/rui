import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { nameAction, sexAction } from '@/store/userAction.js';

class User extends Component {
	static propTypes = {
		user: PropTypes.object,
		name: PropTypes.func,
		sex: PropTypes.func,
	};
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		const { name, sex } = this.props;
		return (
			<div className="App">
				<h2>当月工资为{this.props.user.name}</h2>
				<h2>当月工资为{this.props.user.sex}</h2>
				<button onClick={() => name('利利')}>升职加薪</button>
				<button onClick={sex}>迟到罚款</button>
			</div>
		);
	}
}

// User.propTypes = {
// 	user: PropTypes.object,
// 	name: PropTypes.func,
// 	sex: PropTypes.func,
// };

//需要渲染什么数据
const mapStateToProps = state => {
	return {
		user: state.user,
	};
};
//需要触发什么行为
const mapDispatchToProps = dispatch => ({
	name: name => dispatch(nameAction(name)),
	sex: () => dispatch(sexAction()),
});

export default User = connect(
	mapStateToProps,
	mapDispatchToProps
)(User);
