import React, { Component, Fragment } from 'react';


// let isError = false;
// let isLoading = false;
// let hits = [];
class App extends Component {

    state = {
        url: 'https://hn.algolia.com/api/v1/search?query=redux',
        isError : false,
        isLoading : false,
        hits : [],
        query: 'redux',
    };

    componentDidMount() {
        this.getFetch();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (JSON.stringify(nextState) !== JSON.stringify(this.state)) {
            return true;
        } else {
            return false;
        }
    }
    // componentDidUpdate() {
    //     this.getFetch();
    // }


    getFetch = () => {
        this.setState({url: `https://hn.algolia.com/api/v1/search?query=${this.state.query}`, isError: false, isLoading: true});
        fetch(this.state.url)
        .then(response => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
        .then(data => {
            this.setState({hits: data.hits, isError: false, isLoading: false});
        } )
        .catch((e)=>{
            console.log(e);
            this.setState({isError: true, isLoading: false});
        });
    }

    render() {
        const {hits, isError, isLoading} = this.state;
        return (
            <Fragment>
                <form onSubmit={
                    (event)=>{
                        this.getFetch();
                        event.preventDefault(); }}>
                    <input onChange={e=>this.setState({query: e.target.value})}
                           ref={(el)=>this.input=el}
                           type="text"
                           value={this.state.query}/>
                    <button type="submit">Search</button>
                </form>

                {isError && <div>Something went wrong ...</div>}

                {
                    isLoading? (
                        <div>loading...</div>
                    ) : (
                        <ul>
                            {
                                hits.map(item => (
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
    }
}

export default App;
