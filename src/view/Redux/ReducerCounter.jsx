import React, {useEffect, useReducer} from 'react';

// Action Types
const INCREMENT = 'INCREMENT';
const SET_FROZEN = 'SET_FROZEN';

const countReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      if (state.frozen) {
        console.log('state.frozen', state.frozen);
        return state;
      }
      return {
        ...state,
        count: state.count + 1,
      };
    case SET_FROZEN:
      return {
        ...state,
        frozen: action.frozen,
      };
    default:
      return state;
  }
};

const ReducerCounter = () => {
  let [state, dispatch] = useReducer(countReducer, {
    count: 0,
    frozen: false,
  });

  useEffect(() => {
    dispatch({ type: INCREMENT });
    dispatch({
      type: SET_FROZEN,
      frozen: true,
    });
    dispatch({ type: INCREMENT });
  }, []);

  return <div>{state.count}</div>;
};

export default ReducerCounter;
