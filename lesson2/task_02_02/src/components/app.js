import React from 'react';

import ArticleTitle from './ArticleTitle.js';
import ArticleText from './ArticleText.js';
import ArticleCount from './ArticleCount.js';

import './app.css';

const App = () => { 
 return (
  <div className="article">
    <ArticleTitle 
      title="Article title"
    />
    <ArticleText 
      author="Anton Maksymchak"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ex ad sapiente. Aut reprehenderit odit nam, repellat aliquam ut est eligendi voluptate velit voluptatum, ullam aliquid a blanditiis officia eos."
    />
    <ArticleCount 
      likes={121}
      comments={34}
    />
  </div>
  );
};

export default App;