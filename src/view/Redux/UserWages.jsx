import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { nameAction, sexAction, handleIncrease, handleDecrease } from '@/store/userAction.js';
import './UserWages.scss';

class User extends Component {
	static propTypes = {
		user: PropTypes.object,
		setName: PropTypes.func,
        setSex: PropTypes.func,
        Increase: PropTypes.func,
        Decrease: PropTypes.func,
	};
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		const { user, setName, setSex, Increase, Decrease } = this.props;
		return (
			<div className="App">
                <h1>Counter</h1>
				<h2>姓名：{user.name}</h2>
				<h2>性别{user.sex}</h2>
				<button onClick={() => setName('利利')}>改变姓名</button>
				<button onClick={setSex}>改变性别</button>
                <div className="box">
                    <h1>Counter</h1>
                    <p>Count: {user.count}</p>

                    <div>
                        <button className="button is-grey"
                                onClick={Increase}
                                type="button">
                        +
                        </button>
                        <button className="button is-dark"
                                onClick={Decrease}
                                type="button">
                        -
                        </button>
                    </div>
                </div>
			</div>
		);
	}
}

//需要渲染什么数据
const mapStateToProps = state => {
	return {
        user: state.user,
        sex: state.sex,
        count: state.count,
	};
};
//需要触发什么行为
const mapDispatchToProps = dispatch => ({
	setName: name => dispatch(nameAction(name)),
    setSex: () => dispatch(sexAction()),
    Increase: () => dispatch(handleIncrease()),
    Decrease: () => dispatch(handleDecrease()),
});

export default User = connect(
	mapStateToProps,
	mapDispatchToProps
)(User);
