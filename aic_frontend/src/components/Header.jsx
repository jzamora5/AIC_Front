import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1>AIC</h1>
      </Link>
      <div>
        <Link to="/login">
          <h2>Login</h2>
        </Link>
        <Link to="/register">
          <h2>Register</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
