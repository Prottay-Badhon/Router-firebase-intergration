import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const{signInWithGoogle}=useFirebase();
    return (
        <div>
            <h2>Login</h2>
            <button onClick={signInWithGoogle}>Google sign in</button>
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