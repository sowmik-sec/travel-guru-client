import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpHeader from "../SignUpHeader/SignUpHeader";
import "./Login.css";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div>
      <SignUpHeader />
      <div className="login-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label htmlFor="username">Username:</label>
          <input
            className="input-text"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            className="input-password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p>
            New to travel guru? <Link to="/signup">Sign Up</Link>
          </p>
          <button className="btn-submit" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
