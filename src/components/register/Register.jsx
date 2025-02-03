import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import './register.css';

function Register() {
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    successMsg: ''
  });
  const [formError, setFormError] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Email Validation
  const emailValidation = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Handle user input and dynamically validate fields
  const handleUserInput = (name, value) => {
    setFormInput((prevState) => {
      const updatedState = { ...prevState, [name]: value };

      // Validate email input
      if (name === 'email') {
        if (!value) {
          setFormError((prevError) => ({ ...prevError, email: 'Email is required' }));
        } else if (!emailValidation(value)) {
          setFormError((prevError) => ({ ...prevError, email: 'Enter a valid email address' }));
        } else {
          setFormError((prevError) => ({ ...prevError, email: '' }));
        }
      }

      // Validate password input
      if (name === 'password') {
        if (!value) {
          setFormError((prevError) => ({ ...prevError, password: 'Password is required' }));
        } else {
          setFormError((prevError) => ({ ...prevError, password: '' }));
        }
      }

      // Check if passwords match
      if (name === 'confirmPassword') {
        if (value !== updatedState.password) {
          setFormError((prevError) => ({ ...prevError, confirmPassword: 'Passwords do not match' }));
        } else {
          setFormError((prevError) => ({ ...prevError, confirmPassword: '' }));
        }
      }

      // Check if passwords match immediately when "confirmPassword" changes
      if (updatedState.password && updatedState.confirmPassword === updatedState.password) {
        updatedState.successMsg = 'Password Matched';
      } else {
        updatedState.successMsg = '';
      }

      return updatedState;
    });
  };

  const handleClick = () => {
    setShow(!show);
  };

  const handleClick2 = () => {
    setConfirmShow(!confirmShow);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputError = {
      email: '',
      password: '',
      confirmPassword: ''
    };

    if (!formInput.email || !formInput.password || formInput.confirmPassword !== formInput.password) {
      setFormError({
        ...inputError,
        email: !formInput.email ? 'Email is required' : '',
        password: !formInput.password ? 'Password is required' : '',
        confirmPassword: formInput.confirmPassword !== formInput.password ? 'Passwords do not match' : ''
      });
      setFormInput(prevState => ({
        ...prevState,
        successMsg: ''
      }));
      return;
    }

    setFormError(inputError);
    setFormInput(prevState => ({
      ...prevState,
      successMsg: 'Registration successful!'
    }));
  };

  return (
    <div className='register-background'>
      <div className="mx-auto h-screen flex items-center justify-center max-w-sm gap-6">
        <div className="register-form p-10 w-full flex flex-col my-auto items-center bg-white/30 backdrop-invert backdrop-opacity-10 rounded-3xl">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold">Register</h1>
            <p className="text-sm">Register your account</p>
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-field">
                <label className="form-label">Email address</label>
                <input
                  placeholder="Type here"
                  value={formInput.email}
                  name="email"
                  type="email"
                  className="input max-w-full"
                  onChange={({ target }) => handleUserInput(target.name, target.value)}
                />
                <p className="error-message">{formError.email}</p>
              </div>
              <div className="form-field">
                <label className="form-label">Password</label>
                <div className="form-control relative w-full">
                  <input
                    placeholder="Type here"
                    name="password"
                    value={formInput.password}
                    type={show ? 'text' : 'password'}
                    className="input max-w-full"
                    onChange={({ target }) => handleUserInput(target.name, target.value)}
                  />
                  <span
                    onClick={handleClick}
                    className="absolute inset-y-0 right-2 inline-flex items-center"
                  >
                    {show ? (
                      <AiOutlineEyeInvisible className="h-5 w-5 text-content3" />
                    ) : (
                      <AiOutlineEye className="h-5 w-5 text-content3" />
                    )}
                  </span>
                </div>
                <p className="error-message">{formError.password}</p>
              </div>
              <div className="form-field">
                <label className="form-label">Confirm Password</label>
                <div className="form-control">
                  <input
                    placeholder="Type here"
                    name="confirmPassword"
                    value={formInput.confirmPassword}
                    type={confirmShow ? 'text' : 'password'}
                    className="input max-w-full"
                    onChange={({ target }) => handleUserInput(target.name, target.value)}
                  />
                  <span
                    onClick={handleClick2}
                    className="absolute inset-y-0 right-2 inline-flex items-center"
                  >
                    {confirmShow ? (
                      <AiOutlineEyeInvisible className="h-5 w-5 text-content3" />
                    ) : (
                      <AiOutlineEye className="h-5 w-5 text-content3" />
                    )}
                  </span>
                </div>
                <p className="error-message">{formError.confirmPassword}</p>
                <p className="success-message">{formInput.successMsg}</p>
              </div>
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
                  <button type="submit" className="btn btn-primary w-full">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
