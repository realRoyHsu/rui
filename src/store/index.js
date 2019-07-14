import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;