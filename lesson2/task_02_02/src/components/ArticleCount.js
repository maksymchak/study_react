import React from 'react';

import './ArticleCount.css';

const ArticleCount = ({likes, comments}) => {
  return (
    <div className="stats">
      <i className="stat-icon fa fa-heart" />
      {likes}
      <i className="stat-icon fa fa-comment" />
      {comments}
    </div>
  );
};

export default ArticleCount;