import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading : false
    };
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9cbe444fc9b14a0ea1d4770c415ab451";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles})

  }

  render() {
    return (          
      <div className="container my-3">
        <h1>NewsKart - Top HeadLines</h1>
        
        <div className="row">
        {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
           <NewsItem 
             title={element.title?element.title:""}
             description={element.description?element.description:""}
             imgurl={element.urlToImage}
             newsurl={element.url}
           />
         </div>
        })}
          
        </div>
        
        
      </div>
    );
  }
}