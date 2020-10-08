import React from 'react';
import './News.css'

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch(this.props.q)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        news: result.articles
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, news} = this.state;
        if (error) {
            return <div>Помилка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Завантаження...</div>;
        } else {
            return (
                <div className="News">
                    <ul>
                        {
                            news.map((news) =>
                                <li>
                                    <div className="NewsLeft">
                                        <img className="NewsImage"
                                             src={news.urlToImage != null ? news.urlToImage : 'images/noimage.png'}
                                             alt={news.title}/>
                                    </div>
                                    <div className="NewsRight">
                                        <h2>{news.title}</h2>
                                        <label>Author: <i>{news.author}</i></label>
                                        <p>{news.description}</p>
                                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                        <a href={news.url} target="_blank">
                                            <button>Читати</button>
                                        </a>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            );
        }
    }
}

export default News;