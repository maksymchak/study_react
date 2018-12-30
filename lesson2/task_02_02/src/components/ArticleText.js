import React from 'react';

const ArticleText = ({author, text}) => {
  return (
    <div>
      <span>by {author}</span>
      <p>{text}</p>
    </div>
  );
};

export default ArticleText;