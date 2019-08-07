import * as type from './action-type';

let init = {
    data: {hits: []},
    isLoading: false,
    isError: false,
};

const dataFetchReducer = (state = init, action) => {
    switch (action.type) {
        case type.FETCH_INIT:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case type.FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case type.FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            throw new Error();
    }
};

export default dataFetchReducer;
