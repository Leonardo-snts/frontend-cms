import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const EditPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [page, setPage] = useState({ title: '', content: '' });

  useEffect(() => {
    if (id) {
      axios.get(`http://127.0.0.1:8000/api/pages/${id}/`)
        .then(response => {
          setPage(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the page!', error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setPage({ ...page, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://127.0.0.1:8000/api/pages/${id}/`, page)
        .then(response => {
          history.push('/');
        })
        .catch(error => {
          console.error('There was an error updating the page!', error);
        });
    } else {
      axios.post('http://127.0.0.1:8000/api/pages/', page)
        .then(response => {
          history.push('/');
        })
        .catch(error => {
          console.error('There was an error creating the page!', error);
        });
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Page' : 'Create Page'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" value={page.title} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea name="content" value={page.content} onChange={handleChange} className="form-control" rows="10" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default EditPage;
