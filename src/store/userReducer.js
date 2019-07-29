import * as type from './action-type';

let init = {
	name: '张珊',
    sex: '女',
    count: 0,
};

export default (state = init,action) => {
	switch (action.type) {
	case type.UPDATE_NAME:
		state.name = action.payload;
		return Object.assign({},state);
	case type.UPDATE_SEX:
		state.sex = action.payload;
        return Object.assign({},state);
    case type.INCREASE:
        state.count++;
        return Object.assign({},state);
    case type.DECREASE:
        state.count--;
        return Object.assign({},state);
	default:
		return state;
	}
};
