import React, {Component} from 'react'
import {render} from 'react-dom'


class News extends Component {

    state = {isOpen: true};

    render() {
        const {newsItem} = this.props;
        const body = this.state.isOpen && <section>{newsItem.text}</section>;
        const title = newsItem.title;
        const dateCreate = newsItem.date;

        return (
            <div className="card">
                <div className="card-header">
                    <h2>
                        {title}
                        <button className="btn btn-primary"
                                onClick={this.handleClick}> {this.state.isOpen ? "Скрыть" : "Показать"}</button>
                    </h2>

                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted"> create date: {dateCreate} </h6>
                    {body}
                </div>
            </div>
        );
    }

    handleClick = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
}

export default News