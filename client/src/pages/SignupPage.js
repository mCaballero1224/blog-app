import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignupPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        date: '',
        userEmail: '',
        userPassword: '',
        passwordConfirmation: '',
    })

    const handleInputChange = (e) => {
        const {name, value } = e.target;
        setFormData({...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        navigate('/dashboard');
    }

    return(
        <main className="signup_page">
            <h1>Sign Up</h1>
            <form id="signupForm" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    required
                    onChange={handleInputChange}
                    value={formData.firstName}
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                />
                <input 
                    type="text"
                    required
                    onChange={handleInputChange}
                    value={formData.lastName}
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                />
                <input 
                    type="email"
                    required
                    onChange={handleInputChange}
                    value={formData.userEmail}
                    placeholder="Email"
                    name="userEmail"
                    id="userEmail"
                />
                <input 
                    type="password"
                    required
                    onChange={handleInputChange}
                    value={formData.userPassword}
                    placeholder="Password"
                    name="userPassword"
                    id="userPassword"
                />
                <input 
                    type="password"
                    required
                    onChange={handleInputChange}
                    value={formData.passwordConfirmation}
                    placeholder="Confirm Password"
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                />
                <input id="loginSubmitBtn" type="submit" value="Sign Up"/>
                <Link className="menuLink" to="/login">Already have an account?</Link>
                <Link className="" to="/">Back to Home</Link>
            </form>
        </main>
    );
}

export default SignupPage;
