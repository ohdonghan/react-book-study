import React, {useState,useEffect} from 'react'
import NewsItem from "./NewsItem";
import './NewsList.scss'
import axios from "axios";
import usePromise from "../lib/usePromise";

const sampleArticle={
    title:'제목',
    description:'내용',
    url:'https://google.com',
    urlToImage:'https://via.placeholder.com/160'
}

const NewsList=({category})=>{
    const [loading, response, error]=usePromise(()=>{
        const query = category==='all'?'':`&category=${category}`;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e78e3977b99642cda29e8a0dbfd1701d`);
    },[category])

    if(loading){
        return <div className='NewsList'>대기 중...</div>
    }
    if(!response)
        return null

    if(error)
        return <div className='NewsList'>에러 발생!</div>

    const {articles} =response.data

    return(
        <div className='NewsList'>
            {articles.map(article=>(
                <NewsItem key={article.url} article={article}/>
            ))}
        </div>
    )
}

export default NewsList