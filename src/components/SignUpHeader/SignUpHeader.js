import React from "react";
import { Link } from "react-router-dom";
import "./SignUpHeader.css";
import Logo from "../../assets/images/logo.png";

const SignUpHeader = () => {
  return (
    <div className="signup-header">
      <Link to="/">
        <img id="signup-logo-color" src={Logo} alt="" height={30} />
      </Link>
      <Link to="/news">News</Link>
      <Link to="/destination">Destination</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/signin">
        <button>Sign In</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      <Link to="/signout">
        <button>Sign Out</button>
      </Link>
    </div>
  );
};

export default SignUpHeader;
