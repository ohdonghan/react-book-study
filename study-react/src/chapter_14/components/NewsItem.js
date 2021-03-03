import React from 'react'
import './NewsItem.scss'

const NewsItem=({article})=>{
    const {title,description,url,urlToImage}=article;
    return(
        <div className='NewsItem'>
            {urlToImage &&(
                <div className='thumbnail'>
                    <a href={url} target='_blank' rel='noopener noreferrer'>
                        <img src={urlToImage} alt="thumbnail"/>
                    </a>
                </div>
            )}
            <div className='contents'>
                <h2>
                    <a href={url} target="_blank" rel='noopener noreferrer'>
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default NewsItem