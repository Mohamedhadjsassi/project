import React, { useContext, useState } from 'react'
import './register.css'

import axios from 'axios';
import { AuthStore } from '../context/Authcontext';
import { Navigate, Outlet } from 'react-router-dom';
function Login({ setMode }) {
    const {auth,setAuth}=useContext(AuthStore)
    setMode(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log(formData); // You can handle form submission logic here
        axios.post("http://localhost:8000/api/auth/login", formData)
        .then((res) =>{ localStorage.setItem("user",JSON.stringify(res.data)); setAuth(res.data)})
        
     };
     console.log(auth);
      // Redirect to home page if token exists
    if (auth) {
        return <Navigate to="/Menu" />;
    }

    return (
        <div className="register-container">

            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>

                <button type="submit">Register</button>
            </form>
             
           


        </div>

    )
}

export default Login