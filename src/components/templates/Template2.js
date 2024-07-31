import React from 'react';

const Template2 = ({ article }) => {
  return (
    <div className="template2">
      <h2>{article.title}</h2>
      <div>{article.content}</div>
    </div>
  );
};

export default Template2;
