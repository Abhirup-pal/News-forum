import React from 'react';

const NewsCard = ({ headline, content, image, video, link, publishedAt }) => {
  const defaultImage="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg";
  const date1 = new Date();
  let date2=null;
  if(publishedAt)
    date2 = new Date(publishedAt.slice(0,10))
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return (
    <div className="card m-2" style={{width:'18rem'}}>
      {
        video ? (
        <div className="card-body">
          <video controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )
        :
        ( <img src={image ? image : defaultImage} className="card-img-top" alt="News" />)
      }
      <div className="card-body">
        <h5 className="card-title">{headline}</h5>
        <p className="card-text">{content}</p>
        <div className='d-flex justify-content-between'>
          <a href={link} target='_blank' rel="noreferrer" className="btn btn-primary">Read More</a>
          {publishedAt && <span className='small me-2 text-secondary'>{diffDays} days ago </span>}
        </div>
      </div>
      
    </div>
  );
};

export default NewsCard;
