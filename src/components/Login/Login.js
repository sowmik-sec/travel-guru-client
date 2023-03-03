import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import SignUpHeader from "../SignUpHeader/SignUpHeader";
import "./Login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, googleSignIn, logIn } = useContext(AuthContext);

  const handleGoogleLogIn = () => {
    const googleProvider = new GoogleAuthProvider();
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <SignUpHeader />
      <div className="login-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label htmlFor="username">Email:</label>
          <input
            className="input-text"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
      <button onClick={handleGoogleLogIn} className="btn-signup">
        <FontAwesomeIcon icon={faGoogle} /> Continue with Google
      </button>
    </div>
  );
}
