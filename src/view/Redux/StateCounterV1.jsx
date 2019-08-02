import React, {useState,useEffect} from 'react';
// https://medium.com/free-code-camp/why-you-should-choose-usestate-instead-of-usereducer-ffc80057f815

// inject state and setState-------------------------------
// const useApi= (apiFactory,initialState)=>{
//     let [state, setState] = useState(initialState);
//     return apiFactory({state, setState});
// };
// const countApiFactory = ({state, setState}) => {
//     // let [state, setState] = useState({
//     //     count: 0,
//     //     frozen: false,
//     // });

//     const increment = () => {
//         setState(preState=>{
//             console.log(preState.frozen, 'preState.frozen');
//             if(preState.frozen) {
//                 return preState;
//             }
//             return {
//                 ...preState,
//                 count: preState.count +1,
//             };
//         });
//     };

//     const setFrozen = (frozen) => {
//         setState(preState=>({
//             ...preState,
//             frozen,
//         }));
//     };

//     const count = state.count;
//     const frozen = state.frozen;

//     return {
//         count,
//         frozen,
//         increment,
//         setFrozen,
//     };
// };
// const StateCounterV1 = () => {
//     const counterApi = useApi(countApiFactory, {
//         count: 0,
//         frozen: false,
//     });

//     useEffect(() => {
//         counterApi.increment();
//         counterApi.setFrozen(true);
//         counterApi.increment();
//     // eslint-disable-next-line
//     }, []);

//     return <div>{counterApi.count}</div>;
// };

// // 抽取业务逻辑-------------------------------
// const useCountApi = () => {
//     let [state, setState] = useState({
//         count: 0,
//         frozen: false,
//     });

//     const increment = () => {
//         setState(preState=>{
//             console.log(preState.frozen, 'preState.frozen');
//             if(preState.frozen) {
//                 return preState;
//             }
//             return {
//                 ...preState,
//                 count: preState.count +1,
//             };
//         });
//     };

//     const setFrozen = (frozen) => {
//         setState(preState=>({
//             ...preState,
//             frozen,
//         }));
//     };

//     const count = state.count;
//     const frozen = state.frozen;

//     return {
//         count,
//         frozen,
//         increment,
//         setFrozen,
//     };
// };
// const StateCounterV1 = () => {
//     const counterApi = useCountApi();


//     useEffect(() => {
//         counterApi.increment();
//         counterApi.setFrozen(true);
//         counterApi.increment();

//     }, []);

//     return <div>{counterApi.count}</div>;
// };

// 抽取increase 与 setFrozen ------------------------------------------
const stateUpdate = {
    increment: () => preState=>{
        console.log(preState.frozen, 'preState.frozen');
        if(preState.frozen) {
            return preState;
        }
        return {
            ...preState,
            count: preState.count +1,
        };
    },
    setFrozen: (frozen) => (
        preState=>({
            ...preState,
            frozen,
        })
    ),
};
const StateCounterV1 = () => {
    let [state, setState] = useState({
        count: 0,
        frozen: false,
    });

    const increment = () => {
        setState(stateUpdate.increment());
    };

    const setFrozen = (frozen) => {
        setState(stateUpdate.setFrozen(frozen));
    };


    useEffect(() => {
        increment();
        setFrozen(true);
        increment();

    }, []);

    return <div>{state.count}</div>;
};


// consolidating state   ---------------------------------
//在我们的例子中，我们有一个状态转换increment，
// 它更新count但依赖于另一个状态，frozen。
// 在这种情况下，我发现最好合并state。
// 理论上，我们useState每个组件最多可以有一个钩子，
// 并且仍然可以实现我们想要的任何功能。
// 但只要状态在更新时不相互依赖，它就可以useState多次完成。
// 话虽如此，让我们看看巩固国家如何能够给我们带来减益效益＃3。
// const StateCounterV1 = () => {
//     let [state, setState] = useState({
//         count: 0,
//         frozen: false,
//     });

//     const increment = () => {
//         setState(preState=>{
//             console.log(preState.frozen, 'preState.frozen');
//             if(preState.frozen) {
//                 return preState;
//             }
//             return {
//                 ...preState,
//                 count: preState.count +1,
//             };
//         });
//     };

//     const setFrozen = (frozen) => {
//         setState(preState=>({
//             ...preState,
//             frozen,
//         }));
//     };


//     useEffect(() => {
//         increment();
//         setFrozen(true);
//         increment();

//     }, []);

//     return <div>{state.count}</div>;
// };

//  before consolidating state  ---------------------------------------------------------------
// const StateCounterV1 = () => {
//     let [count, setCount] = useState(0);
//     let [frozen, setFrozen] = useState(false);


//     useEffect(() => {
//         const increment = () => {
//           setCount(prevCount => {
//               console.log('frozen', frozen);
//             if (frozen) {
//               return prevCount;
//             }
//             return prevCount + 1;
//           });
//         };
//         increment();
//         setFrozen(true);
//         increment();
//     }, [frozen]);

//     return <div>{count}</div>;
// };

export default StateCounterV1;
