import React, { useState, useMemo } from 'react';

// export default function WithoutMemo() {
//     const [count, setCount] = useState(1);
//     const [val, setValue] = useState('');
//     function expensive() {
//         console.log('compute');
//         let sum = 0;
//         for (let i = 0; i < count * 10; i++) {
//             sum += i;
//         }
//         return sum;
//     }

//     return <div>
//         <h4>{count}-{expensive()}</h4>
//         {val}
//         <div>
//             <button onClick={() => setCount(count + 1)}>+c1</button>
//             <input onChange={event => setValue(event.target.value)}
//                    value={val}/>
//         </div>
//     </div>;
// }


export default function WithMemo() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
    const expensive = useMemo(() => {
        console.log('compute');
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }, [count]);

    return <div>
        <h4>{count}-{expensive}</h4>
        {val}
        <div>
            <button onClick={() => setCount(count + 1)}>+c1</button>
            <input onChange={event => setValue(event.target.value)}
                   value={val}/>
        </div>
    </div>;
}
