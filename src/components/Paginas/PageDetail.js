import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PageDetail = () => {
  const { id } = useParams();
  const [page, setPage] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/pages/${id}/`)
      .then(response => {
        setPage(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the page!', error);
      });
  }, [id]);

  if (!page) return <div>Loading...</div>;

  return (
    <div>
      <h2>{page.title}</h2>
      <p>{page.content}</p>
      <h3>Tabs</h3>
      <ul>
        {page.tabs.map(tab => (
          <li key={tab.id}>{tab.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PageDetail;
