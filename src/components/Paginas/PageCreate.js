import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PageCreate = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, slug, content });

    axios.post('http://127.0.0.1:8000/api/pages/', { title, slug, content })
      .then(response => {
        navigate('/pages');
      })
      .catch(error => {
        console.error('Erro ao criar a página!', error);
      });
  };

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'size': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
      ['code-block']
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'code-block'
  ];

  return (
    <div>
      <h2>Criar Página</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título</label>
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
          <label>Conteúdo:</label>
          <ReactQuill 
            value={content} 
            onChange={setContent}
            modules={modules}
            formats={formats}
          />
        </div>
        <button type="submit" className="btn btn-primary">Criar</button>
      </form>
    </div>
  );
};

export default PageCreate;
