import React, { Component } from 'react';
import ReactDOM from 'react-dom';


/* var app = function(){

} */

//COMPONENTS
import Header from './components/header';
import JSON from './db.json';
import Newslist from './components/news_list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news: JSON,
            filtered: JSON
        }
    }

    filterNews(keywords) {
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords) > -1;
        })
        
        //ES6 knows that the key has the same name for the value
        this.setState({filtered})
    }

    render() {
        return (
            <div>
                <Header newsSearch={keywords => this.filterNews(keywords)} />
                <Newslist news={this.state.filtered} />
            </div>



        )
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));