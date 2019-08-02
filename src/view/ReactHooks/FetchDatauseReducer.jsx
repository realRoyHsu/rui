import React, { Fragment, useState, useEffect, useReducer} from 'react';
import axios from 'axios';
// https://www.robinwieruch.de/react-hooks-fetch-data/
// 使用reducer-------------------------------------------------------------------------------------
import dataFetchReducer from '@/store/dataFetchReducer.js';

const useHackNewsApi = (initialUrl, initialData) => {
    const [url, setUrl] = useState(initialUrl);
    const [state, dispatch] = useReducer(dataFetchReducer, {
        data: initialData,
        isLoading: false,
        isError: false,
    });

    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            dispatch({type: 'FETCH_INIT'});
            try {
                const result = await axios( url );
                console.log(result,'---');
                !didCancel && dispatch({type: 'FETCH_SUCCESS', payload: result.data});
            } catch (error) {
                !didCancel && dispatch({type: 'FETCH_FAILURE'});
            }
        };
        fetchData();
        return ()=>{
            didCancel = true;
        };
    }, [url]);

    return[state,setUrl];
};

const FetchData = () => {
    const [query, setQuery] = useState('redux');
    const [{data,isLoading,isError},doFetch] = useHackNewsApi('http://hn.algolia.com/api/v1/search?query=redux',{hits: []});
    return (
        <Fragment>
            <form onSubmit={
                (event)=>{
                    doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
                    event.preventDefault(); }}>
                <input onChange={e=>setQuery(e.target.value)}
                       type="text"
                       value={query}/>
                <button type="submit">Search</button>
            </form>

            {isError && <div>Something went wrong ...</div>}

            {
                isLoading ? (
                    <div>loading ...</div>
                ) : (
                    <ul>
                        {
                            data.hits.map(item => (
                                <li key={item.objectID}>
                                    <a href={item.url}>{item.title}</a>
                                    <span style={{marginLeft:'20px'}}>{item.created_at}</span>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </Fragment>
    );
};







// 使用自定义hook-----------------------------------------------------------------------------------
// const useHackNewsApi = (initialUrl, initialData) => {
//     const [data, setData] = useState(initialData);
//     const [url, setUrl] = useState(initialUrl);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isError, setIsError ] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             setIsError(false);
//             setIsLoading(true);
//             try {
//                 const result = await axios( url );
//                 setData(result.data);
//             } catch (error) {
//                 setIsError(true);
//             }
//             setIsLoading(false);
//         };
//         fetchData();
//     }, [url]);

//     return[{data,isLoading,isError},setUrl];
// };

// // 使用自定义hook
// const FetchData = () => {
//     const [query, setQuery] = useState('redux');
//     const [{data,isLoading,isError},doFetch] = useHackNewsApi('http://hn.algolia.com/api/v1/search?query=redux',{hits: []});
//     return (
//         <Fragment>
//             <form onSubmit={
//                 (event)=>{
//                     doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
//                     event.preventDefault(); }}>
//                 <input onChange={e=>setQuery(e.target.value)}
//                        type="text"
//                        value={query}/>
//                 <button type="submit">Search</button>
//             </form>

//             {isError && <div>Something went wrong ...</div>}

//             {
//                 isLoading? (
//                     <div>loading...</div>
//                 ) : (
//                     <ul>
//                         {
//                             data.hits.map(item => (
//                                 <li key={item.objectID}>
//                                     <a href={item.url}>{item.title}</a>
//                                     <span style={{marginLeft:'20px'}}>{item.created_at}</span>
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                 )
//             }
//         </Fragment>
//     );
// };


// 抽取hook前-------------------------------------------------------------------------------------------
// const FetchData = () => {
//     const [data, setData] = useState({hits: []});
//     const [query, setQuery] = useState('redux');
//     const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=redux');
//     const [isLoading, setIsLoading] = useState(false);
//     const [isError, setIsError ] = useState(false);
//     useEffect(() => {
//         const fetchData = async () => {
//             setIsError(false);
//             setIsLoading(true);
//             try {
//                 const result = await axios( url );
//                 setData(result.data);
//             } catch (error) {
//                 setIsError(true);
//             }
//             setIsLoading(false);
//         };
//         fetchData();
//     }, [url]);
//     return (
//         <Fragment>
//             <form onSubmit={
//                 (event)=>{
//                     setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`);
//                     event.preventDefault(); }}>
//                 <input onChange={e=>setQuery(e.target.value)}
//                        type="text"
//                        value={query}/>
//                 <button type="submit">Search</button>
//             </form>

//             {isError && <div>Something went wrong ...</div>}

//             {
//                 isLoading? (
//                     <div>loading...</div>
//                 ) : (
//                     <ul>
//                         {
//                             data.hits.map(item => (
//                                 <li key={item.objectID}>
//                                     <a href={item.url}>{item.title}</a>
//                                     <span style={{marginLeft:'20px'}}>{item.created_at}</span>
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                 )
//             }
//         </Fragment>

//         // <Fragment>
//         //     <input onChange={e=>setQuery(e.target.value)}
//         //            type="text"
//         //            value={query}/>
//         //     <button onClick={()=>setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)}>Search</button>

//         //     {isError && <div>Something went wrong ...</div>}

//         //     {
//         //         isLoading? (
//         //             <div>loading...</div>
//         //         ) : (
//         //             <ul>
//         //                 {
//         //                     data.hits.map(item => (
//         //                         <li key={item.objectID}>
//         //                             <a href={item.url}>{item.title}</a>
//         //                             <span style={{marginLeft:'20px'}}>{item.created_at}</span>
//         //                         </li>
//         //                     ))
//         //                 }
//         //             </ul>
//         //         )
//         //     }

//         // </Fragment>
//     );
// };
export default FetchData;
