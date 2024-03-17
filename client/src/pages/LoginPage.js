import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userEmail: '',
        userPassword: '',
    })

    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setFormData({...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        navigate('/dashboard');
    }

    return(
        <main className="login">
            <h1>Login</h1>
            <form id="loginForm" onSubmit={handleSubmit}>
                <input 
                    required
                    type="text"
                    placeholder="Email"
                    name="email"
                    id="email"
                    onChange={handleInputChange}
                />
                <input 
                    required
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    onChange={handleInputChange}
                />
                <input 
                    type="submit"
                    value="Log In"
                />
                <p>OR</p>
                <Link to="/signup">Sign Up</Link>
                <Link to="/">Back to Home</Link>
            </form>
        </main>
    );
}

export default LoginPage;
