import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./SignUpHeader.css";
import Logo from "../../assets/images/logo.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUpHeader = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="signup-header">
      <Link to="/">
        <img id="signup-logo-color" src={Logo} alt="" height={30} />
      </Link>
      <Link to="/news">News</Link>
      <Link to="/destination">Destination</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      {user ? (
        <button onClick={handleLogOut}>Sign Out</button>
      ) : (
        <>
          <Link to="/signin">
            <button>Sign In</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default SignUpHeader;
