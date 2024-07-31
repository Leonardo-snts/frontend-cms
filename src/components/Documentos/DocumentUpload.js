import React, { useState } from 'react';
import axios from 'axios';

const DocumentUpload = () => {
  const [title, setTitle] = useState('');
  const [document, setDocument] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('document', document);

    axios.post('http://localhost:8000/api/documents/', formData)
      .then(response => {
        console.log('Document uploaded:', response.data);
        alert('Document uploaded! URL: ' + response.data.document);
      })
      .catch(error => {
        console.error('There was an error uploading the document!', error);
      });
  };

  return (
    <div>
      <h2>Upload Document</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Document</label>
          <input type="file" className="form-control" onChange={(e) => setDocument(e.target.files[0])} />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Upload</button>
      </form>
    </div>
  );
};

export default DocumentUpload;