import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const auth = getAuth(app);

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   
    const handleGoogleSignin=()=>{
        signInWithGoogle()
        .then(()=>{
            navigate(from,{replace:true})
        })
    }
    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleGoogleSignin}>Google sign in</button>
            <br />
            <form>
                <input type="email" placeholder='email' id="" /><br></br>
                <input type="password" name="" placeholder='password' id="" /><br></br>
                <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;