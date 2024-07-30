import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PageList = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/pages/')
      .then(response => {
        setPages(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the pages!', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/pages/${id}/`)
      .then(response => {
        setPages(pages.filter(page => page.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the page!', error);
      });
  };

  return (
    <div>
      <h2>Pages</h2>
      <ul className="list-group">
        {pages.map(page => (
          <li key={page.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{page.title}</strong>
              <div>
                <Link to={`/page/${page.slug}`} className="btn btn-primary btn-sm mr-2">View</Link>
                <Link to={`/edit-page/${page.id}`} className="btn btn-secondary btn-sm mr-2">Edit</Link>
                <button onClick={() => handleDelete(page.id)} className="btn btn-danger btn-sm">Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageList;
