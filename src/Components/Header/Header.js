import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import { useSignInWithGoogle,useAuthState } from 'react-firebase-hooks/auth';
import "./Header.css";
import { getAuth,signOut } from "firebase/auth";
import app from "../../firebase.init";
const auth =getAuth(app);

const Header = () => {
//   const { user, handleSignOut } = useFirebase();
const [user]= useAuthState(auth);
  return (
    <div className="header">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/review">Review</Link>
        <Link to="/order">Order</Link>
        <Link to="/products">Products</Link>
        <Link to="/register">Register</Link>
        <Link to="/orders">Orders</Link>
        <span>{user? user.displayName : ''}</span>
        {user?.email ? (
            <button onClick={()=>signOut(auth)}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
