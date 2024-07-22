import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageList from './ImageList';
import DocumentList from './DocumentList';

const ArticleCreate = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/articles/', { title, content })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error creating the article!', error);
            });
    };

    const handleImageSelect = (url) => {
        setContent(content + `<img src="${url}" alt=""/>`);
    };

    const handleDocumentSelect = (url) => {
        setContent(content + `<a href="${url}" target="_blank">Document</a>`);
    };

    return (
        <div>
            <h2>Create Article</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <ReactQuill value={content} onChange={setContent} />
                </div>
                <button type="submit">Create</button>
            </form>
            <ImageList onSelect={handleImageSelect} />
            <DocumentList onSelect={handleDocumentSelect} />
        </div>
    );
};

export default ArticleCreate;
