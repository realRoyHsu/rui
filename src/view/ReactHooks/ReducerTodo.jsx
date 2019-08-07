import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                action.todo
            ];
        // case 'CHANGE_TODO':
        // 返回原数组
        //     return state[action.id] = 'change' && state;

        case 'CHANGE_TODO':
            // 返回全新数组
            return state.map((todo)=>{
                if(todo.id === action.id) {
                    todo.value='change';
                }
                return todo;
            });
        default:
            return state;

    }
};

function init(initialCount) {
    return [
        ...initialCount,
    ];
}

function ReducerTodo() {
    const [state, dispatch] = useReducer(reducer,[
        {
            id: Date.now(),
            value: 'Hello react',
        }
    ],init);
    const change = (id) => {
        dispatch({
            type: 'CHANGE_TODO',
            id,
        });
    };
    let Todo = ({todo,change}) => {
        return (
            console.log('render'),
            // 当返回一个新的数组的时候，点击li都发生了改变，默认有了shouldComponentUpdate的功能。
             <div onClick={change}><li>{todo}</li></div>
        );
    };
    return (
        <>
            <button onClick={() => {
                        dispatch({type: 'ADD_TODO',todo:{id:Date.now(),value:'Hello Hook'}});
                    }}> Add </button>
            <ul>
                {
                    state.map((todo,index) => (
                    <Todo change={()=>{change(todo.id);}}
                          key={index}
                          todo={todo.value}/>
                    ))
                }
            </ul>
        </>
    );
}



export default ReducerTodo;




