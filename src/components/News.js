import React, {Component} from 'react'
import {render} from 'react-dom'


class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }

    render() {
        const {newsItem} = this.props,
            body = this.state.isOpen && <section>{newsItem.text}</section>,
            title = <h2> {newsItem.title} </h2>,
            dateCreate = newsItem.date;

        return (
            <div>
                {title}
                <button onClick={this.handleClick}> {this.state.isOpen ? "Скрыть" : "Показать"}</button>
                {body}
                <h3> create date: {dateCreate} </h3>
            </div>

        );
    }

    handleClick = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
}

export default News