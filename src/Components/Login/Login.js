import React, { useState } from 'react';
import './Login.css'; // Import the CSS file 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation checks
    if (!email || !password) {
      setErrorMessage('Please fill in both email and password fields.');
      return;
    }

    // For now, just clear the error message.
    setErrorMessage('');

  };

  return (
    <div className="container">
      <div className="login-grid">
        <div className="login-text">
          <h2>Login</h2>
        </div>
        <div className="login-text">
          Are you a new member?{' '}
          <span>
            <a href="../Sign_Up/Sign_Up.html" style={{ color: '#2190FF' }}>
              Sign Up Here
            </a>
          </span>
        </div>
        <br />
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Login
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>
            <br />
            <div className="login-text">Forgot Password?</div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
