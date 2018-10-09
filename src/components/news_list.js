import React from 'react'
import NewsItem from './news_list_item'

const newsList = (props) => {

    //ok so map is kinda like a loop
    // for(var i=0; i < Array.length; i ++){
    //     /////
    // }

    //also this is the same sythax as this but in ES6
    // props.news.map(function(){
    // })

    const items = props.news.map((item)=>{
        return (
            <NewsItem key={item.id} item={item}/>
        )
    })

    return (
        <div>
            {items}
        </div>
        
    )
}

export default newsList