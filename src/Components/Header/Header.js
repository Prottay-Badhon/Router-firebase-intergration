import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";
const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <div className="header">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/review">Review</Link>
        <Link to="/order">Order</Link>
        <Link to="/products">Products</Link>
        <Link to="/register">Register</Link>
        <span>{user? user.displayName : ''}</span>
        {user?.email ? (
            <button onClick={handleSignOut}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
