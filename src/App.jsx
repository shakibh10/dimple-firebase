
import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';
import { useState } from 'react';




function App() {
  
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

const[user,setUser]=useState(null);

  const handleSignIn=()=>{
    signInWithPopup(auth,provider)
    .then((result)=>{
      const loggedUser=result.user;
      setUser(loggedUser);
    })
    .catch((error)=>{
      console.log(error.message);
    })
  }


  return (
    <>
      
      <button onClick={handleSignIn}>Sign In </button>

      {user && 

        <div className="card">
            <h2>User Name:{user.displayName}</h2>
            <h2>Email:{user.email}</h2>
            <img src={user.photoURL} alt="" />
        </div>

      }
      
    </>
  )
}

export default App
