import React, { Component } from 'react';

import img from '@/assets/img/404.png';

const style = {
	height: '100%',
	background:'#ececec',
	overflow: 'hidden',
	display:'flex',
	justifyContent: 'center',
	alignItems:'center',
};

export default class NotFound extends Component {
    state = {
    	animated: '',
    };
    enter = () => {
    	this.setState({animated: 'hinge'});
    };
    render() {
    	return (
            <div style={style} >
                <img alt="404"
                     className={`animated swing ${this.state.animated}`}
                     onMouseEnter={this.enter}
                     src={img} />
            </div>
    	);
    }
}
