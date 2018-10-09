import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';


/* var app = function(){

} */

//COMPONENTS
import Header from './components/header';
import JSON from './db.json';
import Newslist from './components/news_list';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            news:JSON
        }
    }

    render(){
        return(
            <div>
                <Header/>
                <Newslist news={this.state.news}/>
            </div>



        )
    }

}

ReactDOM.render(<App/>,document.querySelector('#root'));