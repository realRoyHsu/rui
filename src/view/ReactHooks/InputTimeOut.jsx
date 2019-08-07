import React, { useState, useEffect, Fragment } from 'react';

// 当我们输入react12345时，可以看到最终的结果是react1 result，而我们期望看到的结果是react12345 result。

// 这现象的原因是更新数据的时候，没有对结果的有效性进行判断，用过期的数据覆盖了最新的数据。
// let timer = null;
function getData(data, delay) {
    return new Promise(resolve => {
        // clearTimeout(timer);
        setTimeout(() => {
            resolve(data);
        }, delay);
    });
}

// 请求序号
let seqenceId = 0;
// 上一个有效请求的序号
let lastId = 0;
function App() {
    const [query, setQuery] = useState('react');
    const [result, setResult] = useState('');
    useEffect(() => {
        // 有效性标识
        // let didCancel = true;
        const fetchData = async () => {
            // 发起一个请求时，序号加 1
            const curId = ++seqenceId;

            const delay = query === 'react1' ? 2000 : 500;
            const s = await getData(query, delay);

            // if (didCancel) {
            //     setResult(s);
            // }
            // 只展示序号比上一个有效序号大的数据
            if (curId > lastId) {
                setResult(s);
                lastId = curId;
            } else {
                console.log(`discard ${result}`);
            }
        };
        fetchData();
        // return () => {
        //     didCancel = false;
        // };
    }, [query, result]);
    return (
        <Fragment>
            <input
                onChange={e => setQuery(e.target.value)}
                type="text"
                value={query}
            />
            <div>
                result:<span>{result}</span>
            </div>
        </Fragment>
    );
}

export default App;
