import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/images/logo.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="header">
      <Link to="/">
        <img id="logo-color" src={Logo} alt="" height={30} />
      </Link>
      <input
        type="text"
        id="inputId"
        placeholder={`🔍 Search your destination`}
        size={20}
      />
      <Link to="/news">News</Link>
      <Link to="/destination">Destination</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      {user ? (
        <Link to="/signout">
          <button>Sign Out</button>
        </Link>
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

export default Header;
