import React from 'react';

const Template1 = ({ article }) => {
  return (
    <div className="template1">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default Template1;
