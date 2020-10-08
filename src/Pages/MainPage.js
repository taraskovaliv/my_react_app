import React from 'react';
import Header from "../Header/Header";
import Menu from "./Menu";
import Footer from "../Footer/Footer";
import News from "./News/News";

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Menu/>
                <News
                    q={
                        "https://newsapi.org/v2/everything?q=" +
                        "dogs" +
                        "&apiKey=b79c8842b7ae4158ae4f5f7fc0c48312&pageSize=25&sortBy=relevancy"
                    }/>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;