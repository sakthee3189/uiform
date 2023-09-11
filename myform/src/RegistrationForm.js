import React, { useState } from 'react';
import './registrationForm.css';

const RegistrationForm = () => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    // Validate the name field
    if (name.trim() === '') {
      errors.name = 'Name is required';
    }

    // Validate the email field
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invalid email address';
    }

    // Validate the password field
    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    // If there are errors, set them in the state and prevent form submission
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    }
    else{
    // Here, you can perform registration logic with the form data
    console.log('Registration submitted:', { name, email, password });
    // Optionally, you can clear the form fields after submission
    setName('');
    setEmail('');
    setPassword('');
    setErrors({});}
  };

  // Form input change handlers
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form className="registration-form-container" onSubmit={handleSubmit}>
      <div>
      <h1>Registration form</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
