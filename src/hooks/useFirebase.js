import { useEffect, useState } from "react";
import initializeFirebase from  '../Pages/Firebase/firebase.init'

import { getAuth, createUserWithEmailAndPassword ,signOut,
      onAuthStateChanged , signInWithEmailAndPassword ,
      signInWithPopup, GoogleAuthProvider 


} from "firebase/auth";


initializeFirebase();


const useFirebase = () =>{
    const auth = getAuth();

const [user, setuser] = useState({});
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const googleProvider =   new GoogleAuthProvider();


const googleSignIn = (history, location) =>{
  setLoading(true)
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    
    const user = result.user;
    setError("")
    const destination = location?.state?.from || '/' ;
    history.replace(destination)
    
  }).catch((error) => {
    
    setError(error.message);
  }).finally(()=>setLoading(false));
}

const registerUser = (email, password, history) =>{
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       history.replace('/')
       setError("");
     
    })
    .catch((error) => {
      setError(error.message);
     
    }).finally(()=>setLoading(false))
    ;
} 
const loginUser = (email, password, history, location) =>{
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const destination = location?.state?.from || '/' ;
    history.replace(destination)
    setError('');
    
  })
  .catch((error) => {
    setError(error.message);
  }).finally(()=>setLoading(false))
  ;
}
useEffect( ()=>{
  const unSubscribe =   onAuthStateChanged(auth, (user) => {
        if (user) {
          setuser(user)
        } else {
          
            setuser({})
        } 
        setLoading(false)
      });

      return ()=> unSubscribe;
} , []) 

 
const logOut = () =>{
    signOut(auth).then(() => {
        
      }).catch((error) => {
        setError(error.message);
      }).finally(()=>setLoading(false))
      ;
}
  
return {
    user, 
    registerUser,
    logOut,
    loginUser,
    loading,
    error,
    googleSignIn
}

}

export default useFirebase;