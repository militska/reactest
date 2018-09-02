import React from 'react'
import {render} from 'react-dom'
import NewsList from './NewsList/index'
import NewsRaw from './rawData'

function App() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-3"> News </h1>
            </div>

            <NewsList newsList={NewsRaw}/>
        </div>
    );
}

export default App