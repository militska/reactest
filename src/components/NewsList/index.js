import React, {Component} from 'react'
import {render} from 'react-dom'
import News from '../News'
import 'bootstrap/dist/css/bootstrap.css'


class NewsList extends Component {

    render() {
        const {newsList} = this.props;
        const NewsElement = newsList.map(news =>
            <li key={news.ID}><News newsItem={news}/></li>);

        return (
            <ul>{NewsElement}</ul>
        );
    }
}

export default NewsList