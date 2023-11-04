import React, { useState } from 'react';
import './Sign_Up.css'; // Import the CSS file 

function SignUp() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneChange = (event) => {
    const phoneNumber = event.target.value;

    // Remove non-digit characters from the input
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

    // Check if the cleaned phone number has exactly 10 digits
    if (cleanedPhoneNumber.length === 10) {
      setPhone(cleanedPhoneNumber);
      setPhoneError('');
    } else {
      setPhone(cleanedPhoneNumber);
      setPhoneError('Please enter a valid 10-digit phone number.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      return;
    }

    // Continue with form submission if phone number is valid
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: 'left' }}>
          Already a member?{' '}
          <span>
            <a href="../Login/Login.html" style={{ color: '#2190FF' }}>
              Login
            </a>
          </span>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Enter your name"
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={phone}
                onChange={handlePhoneChange}
                className="form-control"
                placeholder="Enter your phone number"
                aria-describedby="helpId"
              />
              {phoneError && <span className="error-message">{phoneError}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
            </div>
            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
