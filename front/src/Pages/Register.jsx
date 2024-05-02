import React, { useState } from 'react'
// import classes from './register.module.css'
import './register.css'
import axios from 'axios';
function Register({setMode}) {
  setMode(false)
  const [formData, setFormData] = useState({
   name: '',
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
  e.preventDefault()
    console.log(formData); // You can handle form submission logic here
    axios.post("http://localhost:8000/api/auth/register",formData).then((res)=>console.log(res.data)).catch((e)=>console.log(e))
   
  };
    
  return (
    <div className="register-container">
      
    <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="name" value={formData.name} onChange={handleChange} required />
        </div>
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

export default Register