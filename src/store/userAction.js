import * as type from './action-type';

export const nameAction = (name)=>{
	return {
		type: type.UPDATE_NAME,
		payload: name,
	};
};

// 可以异步 ajax
export const sexAction = () => (dispatch) =>{
	setTimeout(()=>{
		dispatch({
			type: type.UPDATE_SEX,
			payload: '男',
		});
	});
};

export const handleIncrease = ()=>{
	return {
		type: type.INCREASE,
	};
};

export const handleDecrease = ()=>{
	return {
		type: type.DECREASE,
	};
};
