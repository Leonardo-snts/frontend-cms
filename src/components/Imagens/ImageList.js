import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageList = ({ onSelect }) => {
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
            <h2>Images</h2>
            <ul className="image-gallery">
                {images.map(image => (
                    <li key={image.id} className="image-item">
                        <img src={image.image_url} alt={image.title} width="100" onClick={() => onSelect(image.image_url)} />
                        {image.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImageList;
