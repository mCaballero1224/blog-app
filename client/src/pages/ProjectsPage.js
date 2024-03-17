import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Construction from '../assets/icons/construction.png';

function ProjectsPage() {
    return(
        <main className="projects_page">
            <Navbar />
            <h1>Under Construction</h1>
            <p>Check back soon!</p>
            <img src={Construction} /> 
        </main>
    );
}

export default ProjectsPage;
