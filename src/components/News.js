import React from 'react'
import {render} from 'react-dom'

function News(props) {
    const {newsItem} = props,
        body = <section>{newsItem.text}</section>,
        title = <h2> {newsItem.title} </h2>,
        dateCreate = newsItem.date;


    return (
        <div>
            {title}
            {body}
            <h3> create date: {dateCreate} </h3>
        </div>

    );
}

export default News