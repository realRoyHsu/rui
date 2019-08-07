import React, { useState, useCallback } from 'react';

const CallbackComponent = () => {
    let [count, setCount] = useState(1);
    let [num, setNum] = useState(1);

    const memoized = useCallback( () => {
        return num;
        // eslint-disable-next-line
    },[count]);
    console.log('记忆：',memoized());
    console.log('原始：',num);
    return (
        <>
            <button onClick={() => {setCount(count + 1);}}> count+ </button>
            <button onClick={() => {setNum(num + 1);}}> num+ </button>
        </>
    );
};

export default CallbackComponent;





