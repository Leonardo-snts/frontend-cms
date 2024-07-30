// src/App.js
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ArticleList from './components/Articles/ArticleList';
import ArticleCreate from './components/Articles/ArticleCreate';
import ArticleEdit from './components/Articles/ArticleEdit';
import ArticleDetail from './components/Articles/ArticleDetail';
import ImageUpload from './components/Imagens/ImageUpload';
import DocumentUpload from './components/Documentos/DocumentUpload';
import ImageGallery from './components/Imagens/ImageGallery';
import DocumentGallery from './components/Documentos/DocumentGallery';
import PageList from './components/Paginas/PageList';
import PageDetail from './components/Paginas/PageDetail';
import PageCreate from './components/Paginas/PageCreate';
import TabCreate from './components/Abas/TabCreate';
import PageEdit from './components/Paginas/PageEdit';
import PageView from './components/Paginas/PageView';

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
            <li className="nav-item">
              <Link className="nav-link" to="/pages">Pages</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-page">Create Page</Link>
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
          <Route path="/pages" element={<PageList />} />
          <Route path="/create-page" element={<PageCreate />} />
          <Route path="/edit-page/:id" element={<PageEdit />} />
          <Route path="/page/:slug" element={<PageView />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
