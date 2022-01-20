import React, {useEffect, useState} from 'react'

import { getNews } from '../service/api';
import ArticleBox from './ArticleBox';

import InfiniteScroll from 'react-infinite-scroll-component';

export default function Article() {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(()=>{
        dailyNews();
    },[page]);

    const dailyNews = async ()=>{
        const response = await getNews(page);
        if(response){
            setNews([...news, ...response.data]);
        }
    }

    useEffect(()=>{
        console.log(news);
    },[news]);

    let i = -1;

    return (
        <InfiniteScroll
        dataLength={news.length}
        next={()=>setPage((page)=>page+1)}
        hasMore = {true}
        >
        {
            news? news.length>0 && news.map((newsData) => (
                <ArticleBox news={newsData} key={++i}/> 
            )):null
        }
        </InfiniteScroll>
    )
}
