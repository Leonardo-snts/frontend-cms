import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PageEdit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/pages/${id}/`)
      .then(response => {
        const { title, slug, content } = response.data;
        setTitle(title);
        setSlug(slug);
        setContent(content);
      })
      .catch(error => {
        console.error('There was an error fetching the page!', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/pages/${id}/`, { title, slug, content })
      .then(response => {
        navigate('/pages');
      })
      .catch(error => {
        console.error('There was an error updating the page!', error);
      });
  };

  return (
    <div>
      <h2>Edit Page</h2>
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
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default PageEdit;
