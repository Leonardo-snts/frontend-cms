import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/articles/${id}/`)
      .then(response => {
        setArticle(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the article!', error);
      });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  const renderTemplate = () => {
    switch (article.template) {
      case 'template1':
        return <Template1 article={article} />;
      case 'template2':
        return <Template2 article={article} />;
      default:
        return <Template2 article={article} />;
    }
  };

  return (
    <div>
      {renderTemplate()}
    </div>
  );
};

export default ArticleDetail;
