import React, { useState } from 'react';
import '../login/login.css';
import '../register/register.css';

function Login() {
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  });

  const [formError, setFormError] = useState({
    email: '',
    password: '',
  });

  // Validate email
  const emailValidation = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Handle user input and validate
  const handleUserInput = (name, value) => {
    setFormInput((prevState) => {
      const updatedState = { ...prevState, [name]: value };

      // Validate fields dynamically as user types
      if (name === 'email') {
        if (!value) {
          setFormError((prevError) => ({
            ...prevError,
            email: 'Email cannot be empty',
          }));
        } else if (!emailValidation(value)) {
          setFormError((prevError) => ({
            ...prevError,
            email: 'Email is not valid',
          }));
        } else {
          setFormError((prevError) => ({
            ...prevError,
            email: '',
          }));
        }
      }

      if (name === 'password') {
        if (!value) {
          setFormError((prevError) => ({
            ...prevError,
            password: 'Password cannot be empty',
          }));
        } else {
          setFormError((prevError) => ({
            ...prevError,
            password: '',
          }));
        }
      }

      return updatedState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate on submit if necessary
    if (!formInput.email || !formInput.password) {
      setFormError((prevError) => ({
        ...prevError,
        email: formInput.email ? '' : 'Email cannot be empty',
        password: formInput.password ? '' : 'Password cannot be empty',
      }));
      return;
    }
  };

  return (
    <div className="login-background">
      <div className="mx-auto h-screen flex items-center justify-center max-w-sm gap-6">
        <div className="register-form p-10 w-full flex flex-col my-auto items-center bg-white/30 backdrop-invert backdrop-opacity-10 rounded-3xl">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">Login</h1>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label className="form-label">Email address</label>
              <input
                placeholder="Type here"
                type="email"
                name="email"
                value={formInput.email}
                className="input max-w-full"
                onChange={({ target }) => handleUserInput(target.name, target.value)}
              />
            </div>
            <p className="error-message">{formError.email}</p>
            <div className="form-field">
              <label className="form-label">Password</label>
              <div className="form-control">
                <input
                  placeholder="Type here"
                  type="password"
                  name="password"
                  value={formInput.password}
                  onChange={({ target }) => handleUserInput(target.name, target.value)}
                  className="input max-w-full"
                />
              </div>
            </div>
            <p className="error-message">{formError.password}</p>
            <div className="form-field">
              <div className="form-control justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" className="checkbox" />
                  <a href="#">Remember me</a>
                </div>
              </div>
            </div>
            <div className="form-field pt-5">
              <div className="form-control justify-between">
                <button
                  type="button"
                  className="btn btn-primary w-full"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
