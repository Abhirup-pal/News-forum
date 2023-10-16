import React from 'react'
import NewsCard from './NewsCard'

const NewsComponent = (props)=> {
  const news=props.news;
  return (
    <div className="container">
      <div className="row">
      {Array.isArray(news) ? (
          news.map((newsItem, index) => (
            <div key={index} className="col-md-4">
              <NewsCard
                headline={newsItem.title}
                content={newsItem.description}
                image={newsItem.urlToImage}
                video={newsItem.urlToVideo}
                link={newsItem.url}
                publishedAt={newsItem.publishedAt}
              />
            </div>
          ))
        ) : (
          <p>No news available.</p>
        )}
      </div>
    </div>
  );
}

export default NewsComponent