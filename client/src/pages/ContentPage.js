import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import DashboardNavbar from '../components/DashboardNavbar';


function ContentPage() {
    
    const articles = [
        {
            title: "Introduction to JavaScript",
            tags: ["JavaScript", "Programming", "Beginner"],
            description: "A beginner's guide to learning JavaScript programming.",
            date: "2024-01-01"
        },
        {
            title: "Advanced JavaScript Techniques",
            tags: ["JavaScript", "Programming", "Advanced"],
            description: "Explore advanced concepts in JavaScript programming.",
            date: "2024-02-15"
        },
        {
            title: "JavaScript and the Web",
            tags: ["JavaScript", "Web Development"],
            description: "Understanding how JavaScript powers modern web applications.",
            date: "2024-03-10"
        }
    ];

    const handleButton = () => {
        alert('Under construction!');
    };

    return(
        <main className="content_page">
            <DashboardNavbar />
            <div className="thumbnail_container">
            {articles.map((article, index) => (
                <div key={index} className="article_thumbnail">
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <small>Published on: {article.date}</small>
                    <div>
                    {article.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="tag">#{tag}</span>
                    ))}
                    </div>
                    <button onClick={handleButton} >View</button>
                    <button onClick={handleButton}>Edit</button>
                </div>
            ))}
            </div>
        </main>
    );
}

export default ContentPage;
