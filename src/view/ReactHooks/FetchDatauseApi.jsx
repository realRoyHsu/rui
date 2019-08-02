import React, {Fragment,useState, useEffect} from 'react';
const URL = 'http://hn.algolia.com/api/v1/search?query=';

// const useHackNewApi = () => {

// };
const FetchData = () => {
    const [query, setQuery] = useState('redux');
    const [url, setUrl] = useState(`${URL}redux`);
    const [state, setState] = useState({
        isError: false,
        isLoading: false,
        data: {hits:[]},
    });
    const FETCH_INIT = () => {
        setState((preState)=>({
            ...preState,
            isLoading: true,
            isError: false,
        }));
    };
    const FETCH_SUCCESS = (data) => {
        setState((preState)=>({
            ...preState,
            isLoading: false,
            isError: false,
            data: data,
        }));
    };
    const FETCH_FAILURE = () => {
        setState((preState)=>({
            ...preState,
            isLoading: false,
            isError: true,
        }));
    };
    useEffect(()=>{
        FETCH_INIT();
        fetch(url)
            .then((response)=>{
                if(response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data=>{
                console.log(data,'data');
                FETCH_SUCCESS(data);
            })
            .catch(e=>{
                console.log(e);
                FETCH_FAILURE();
            });
    },[url]);
    return (
        <Fragment>
            <form onSubmit={e=>{
                setUrl(`${URL}${query}`);
                e.preventDefault();
            }}>
                <input onChange={e=>setQuery(e.target.value)}
                       type="text"
                       value={query}/>
                <button type="submit">Search</button>
            </form>
            {
                state.isError && <div>Somethind went wrong ...</div>
            }
            {
                state.isLoading ? (
                    <div>loading ...</div>
                ) : (
                    <ul>
                        {
                            state.data.hits.map(item => (
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

//  before consolidating state  ---------------------------------------------------------------

// const FetchData = () => {
//     const [query, setQuery] = useState('redux');
//     const [data, setData] = useState({hits:[]});
//     const [url, setUrl] = useState(`${URL}redux`);
//     const [isError,setIsError] = useState(false);
//     const [isLoading,setIsLoading] = useState(false);

//     useEffect(()=>{
//         setIsError(false);
//         setIsLoading(true);
//         fetch(url)
//             .then((response)=>{
//                 if(response.ok) {
//                     return response.json();
//                 } else {
//                     throw new Error('Something went wrong ...');
//                 }
//             })
//             .then(data=>{
//                 console.log(data,'data');
//                 setIsError(false);
//                 setIsLoading(false);
//                 setData(data);
//             })
//             .catch(e=>{
//                 console.log(e);
//                 setIsError(true);
//                 setIsLoading(false);
//             });
//     },[query, url]);
//     return (
//         <Fragment>
//             <form onSubmit={e=>{
//                 setUrl(`${URL}${query}`);
//                 e.preventDefault();
//             }}>
//                 <input onChange={e=>setQuery(e.target.value)}
//                        type="text"
//                        value={query}/>
//                 <button type="submit">Search</button>
//             </form>
//             {
//                 isError && <div>Somethind went wrong ...</div>
//             }
//             {
//                 isLoading ? (
//                     <div>loading ...</div>
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


export default FetchData;
