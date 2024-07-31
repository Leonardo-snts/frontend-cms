import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PageView = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/pages/slug/${slug}/`)
      .then(response => {
        setPage(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the page!', error);
      });
  }, [slug]);

  if (!page) {
    return <div>Carregando Conteúdo...</div>;
  }

  return (
    <div>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </div>
  );
};

export default PageView;
