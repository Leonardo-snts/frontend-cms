import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageList from './ImageList';
import DocumentList from './DocumentList';

const ArticleForm = ({ isEditMode }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { id } = useParams();

    useEffect(() => {
        if (isEditMode && id) {
            axios.get(`http://localhost:8000/api/articles/${id}/`)
                .then(response => {
                    setTitle(response.data.title);
                    setContent(response.data.content);
                })
                .catch(error => {
                    console.error('There was an error fetching the article!', error);
                });
        }
    }, [id, isEditMode]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = isEditMode ? 
            `http://localhost:8000/api/articles/${id}/` : 
            'http://localhost:8000/api/articles/';
        const method = isEditMode ? 'put' : 'post';

        axios[method](url, { title, content })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error creating/updating the article!', error);
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
            <h2>{isEditMode ? 'Edit Article' : 'Create Article'}</h2>
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
                <button type="submit">{isEditMode ? 'Update' : 'Create'}</button>
            </form>
            <ImageList onSelect={handleImageSelect} />
            <DocumentList onSelect={handleDocumentSelect} />
        </div>
    );
};

export default ArticleForm;
