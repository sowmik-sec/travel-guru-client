import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SignUpHeader from "../SignUpHeader/SignUpHeader";
import "./SignUp.css";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser, googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => console.error(error));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      // perform sign-up logic here
    }
  };
  return (
    <div>
      <SignUpHeader />
      <div className="signup-container">
        <form className="form" onSubmit={handleSignUp}>
          <h1>Sign Up</h1>
          <label htmlFor="username">Username:</label>
          <input
            className="input-text"
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            className="input-email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            className="input-password"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            className="input-password"
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <p>
            Already have an account? <Link to="/signin">Log In</Link>
          </p>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn-signup">
          <FontAwesomeIcon icon={faFacebook} /> Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default SignUp;
