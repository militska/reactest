import React from 'react'
import {render} from 'react-dom'
import News from './News'
import NewsRaw from './rawData'

function App() {
    return (
        <div>
            <h1> News </h1>
            <News newsItem = {NewsRaw[0]}/>
        </div>
    );
}

export default App