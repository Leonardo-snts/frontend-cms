import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/articles/')
            .then(response => {
                setArticles(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the articles!', error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/articles/${id}/`)
            .then(() => {
                setArticles(articles.filter(article => article.id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the article!', error);
            });
    };

    return (
        <div>
            <h2>Articles</h2>       
            <ul className="list-group">
                {articles.map(article => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={article.id}>
                        <Link to={`/edit/${article.id}`}>{article.title}</Link>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(article.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;
