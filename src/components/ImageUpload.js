import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);

    axios.post('http://localhost:8000/api/images/', formData)
      .then(response => {
        console.log('Image uploaded:', response.data);
        alert('Image uploaded! URL: ' + response.data.image);
      })
      .catch(error => {
        console.error('There was an error uploading the image!', error);
      });
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Upload</button>
      </form>
    </div>
  );
};

export default ImageUpload;