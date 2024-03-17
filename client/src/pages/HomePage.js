import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

function HomePage() {
    return(
        <main className="home_page">
            <Navbar />
            <h1>Welcome to the Future Gadget Lab!</h1>
            <section>
                <article>
                    <h3>What is this?</h3>
                    <p>This is a hub for our projects, both finished and in development. Originally, we were put together as a group for a Uni project. Deciding to host our group project on a site, the decision to make the Future Gadget Lab was made. Please feel free to click around and see who we are and what we're working on. We hope to make this site more interactible as time goes on. Examples include:</p>
                    <ul>
                        <li>Creating an email subscription so that you can be alerted when we have updates on projects.</li>
                        <li>A blog where we delve into the inner workings the lab and the things we build here.</li>
                        <li>A github server so that people can download and use our products as they please.</li>
                    </ul>
                    <p>We hope that you'll come back to this site regularly and support us in our work.</p>
                </article>
                <article>
                    <h3>"Future Gadget Lab"?...</h3>
                    <p>If you're into visual novels or anime, you might recognize the name of our group. If not, allow us to fill you in! The name comes from the 2009 visual novel <a href="https://store.steampowered.com/app/412830/STEINSGATE/">Steins;Gate</a>. Considering our group consists of people who might not have otherwise come together, and that (outside of our initial project) we don't have a direction on the type of work we produce, the name seemed to fit.</p>
                </article>
            </section>
        </main>
    );
}

export default HomePage;
