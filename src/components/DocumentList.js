import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DocumentList = ({ onSelect }) => {
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
            <h2>Documents</h2>
            <ul>
                {documents.map(doc => (
                    <li key={doc.id}>
                        <a href={doc.document_url} target="_blank" rel="noopener noreferrer">{doc.title}</a>
                        <button onClick={() => onSelect(doc.document_url)}>Select</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DocumentList;
