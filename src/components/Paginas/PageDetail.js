import React from 'react';

const PageDetail = ({ content }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default PageDetail;
