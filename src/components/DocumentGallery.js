import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DocumentGallery.css';

const DocumentGallery = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/documents/')
      .then(response => {
        setDocuments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the documents!', error);
      });
  }, []);

  return (
    <div>
      <h2>Document Gallery</h2>
      <div className="document-gallery">
        {documents.map(doc => (
          <div key={doc.id} className="document-item">
            <a href={doc.document_url} target="_blank" rel="noopener noreferrer">
              {doc.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentGallery;
