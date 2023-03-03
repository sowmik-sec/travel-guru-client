import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import SignUpHeader from "../SignUpHeader/SignUpHeader";
import "./Login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser, googleSignIn, logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogIn = () => {
    const googleProvider = new GoogleAuthProvider();
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, { replace: true });
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <SignUpHeader />
      {from !== "/" ? <h1>You must log in to book a room</h1> : ""}
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
          <p className="error-message">{error}</p>
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
