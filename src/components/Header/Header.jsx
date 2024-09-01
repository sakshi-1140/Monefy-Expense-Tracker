import React, { useEffect } from 'react'
import "./styles.css"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import userImage from "../../assets/user.svg";
function Header() {
  const [user, loading] = useAuthState(auth); //remove loading as of
    const navigate = useNavigate();
useEffect(() => {
  if (!user) {
    navigate("/");
  } else {
    navigate("/dashboard");
  }
}, [user, navigate]);

  const logout = async () => {
    try {
      await signOut(auth);
      // Sign-out successful.
      toast.success("Logged Out Successfully!");
      navigate("/");
    } catch (error) {
      // An error happened.
      toast.error(error.message);
    }
  };
  
  return (
    <div className='navbar'>
      <p className = "navbar-heading">Monefy.</p>
       {user && (
   <div style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
  <img
    src={user.photoURL ? user.photoURL : userImage}
    style={{ borderRadius: "50%",height:"1.5rem",  width:"1.5rem"}}
  />

         <p className="navbar-link" onClick={logout}>
          Logout
        </p>
        </div> 
      )
      }
      
     
      </div>
  )
}

export default Header
