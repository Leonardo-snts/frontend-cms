// src/App.js
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleCreate from './components/ArticleCreate';
import ArticleEdit from './components/ArticleEdit';
import ArticleDetail from './components/ArticleDetail';
import ImageUpload from './components/ImageUpload';
import DocumentUpload from './components/DocumentUpload';
import ImageGallery from './components/ImageGallery';
import DocumentGallery from './components/DocumentGallery';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">CMS</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">Create Article</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upload-image">Upload Image</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upload-document">Upload Document</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list-image">Imagens</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list-docs">Documentos</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/create" element={<ArticleCreate />} />
          <Route path="/edit/:id" element={<ArticleEdit />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/upload-image" element={<ImageUpload />} />
          <Route path="/upload-document" element={<DocumentUpload />} />
          <Route path="/list-image" element={<ImageGallery />} />
          <Route path="/list-docs" element={<DocumentGallery />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
