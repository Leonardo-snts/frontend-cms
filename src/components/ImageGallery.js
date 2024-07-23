import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ImageGallery.css';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/images/')
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the images!', error);
      });
  }, []);

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-gallery">
        {images.map(image => (
          <div key={image.id} className="image-item">
            <img src={image.image_url} alt={image.title} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
