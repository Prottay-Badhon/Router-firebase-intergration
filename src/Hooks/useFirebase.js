import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup,signOut} from "firebase/auth";
import app from "../firebase.init";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => setUser(result.user))
    .catch(error => console.log(error))
  };
  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{console.log("success fully logged out")}) 
  }
  useEffect(()=>{
    onAuthStateChanged(auth, user=>{
        setUser(user);
    })
  },[])

  return { user, signInWithGoogle,handleSignOut };
};
export default useFirebase;
