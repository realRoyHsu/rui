import React, {useReducer} from 'react';
import './UserWages.scss';

const initialState = 0;

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            // state.count = state.count + 1;
            // return Object.assign({},state);
            return state + 1;
        case 'DECREASE':
            // state.count = state.count - 1;
            // return Object.assign({},state);
            return state - 1;
        default:
            return state;
    }
};

export default function UserWagesReducer() {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [state2, dispatch2] = useReducer(counterReducer, initialState);
    const handleIncrease = () => {
        dispatch({type: 'INCREASE'});
    };
    const handleDecrease = () => {
        dispatch({type: 'DECREASE'});
    };
    const handleIncrease2 = () => {
        dispatch2({type: 'INCREASE'});
    };
    const handleDecrease2 = () => {
        dispatch2({type: 'DECREASE'});
    };
    return (
        <div className="box">
            <h1>Counter</h1>
            <p>Count: {state}</p>

            <div>
                <button className="button is-grey"
                        onClick={handleIncrease}
                        type="button">
                +
                </button>
                <button className="button is-dark"
                        onClick={handleDecrease}
                        type="button">
                -
                </button>
            </div>
            <p>Count: {state2}</p>

            <div>
                <button className="button is-grey"
                        onClick={handleIncrease2}
                        type="button">
                +
                </button>
                <button className="button is-dark"
                        onClick={handleDecrease2}
                        type="button">
                -
                </button>
            </div>
        </div>
    );
}
