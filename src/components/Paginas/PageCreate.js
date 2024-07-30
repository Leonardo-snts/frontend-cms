import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PageCreate = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/pages/', { title, slug, content })
      .then(response => {
        navigate('/pages');
      })
      .catch(error => {
        console.error('There was an error creating the page!', error);
      });
  };

  return (
    <div>
      <h2>Create Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input 
            type="text" 
            className="form-control" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Slug</label>
          <input 
            type="text" 
            className="form-control" 
            value={slug} 
            onChange={(e) => setSlug(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea 
            className="form-control" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default PageCreate;
