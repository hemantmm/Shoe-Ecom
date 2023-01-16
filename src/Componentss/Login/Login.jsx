import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

// import InputControl from "../InputControl/InputControl";
import InputControl from '../inputs/InputControl'
import { auth } from "../../firebase";

// import styles from "./Login.module.css";
// import styles from "./Login.css"
// import './Login.css'
// import '../Login/Login.css'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../Components/Navbar";

// import fire from '../../firebase'
// import {fire} from "../../firebase"


function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  const diffToast=(e)=>{

    signInWithEmailAndPassword(auth, values.email, values.pass)
    
    if(!values.email || !values.pass)
    {
      toast.warn("Complete the fields",{
        position:"top-center"
      })
    }

    // if(values.pass!=e.target.value)
    // {
    //   toast.error("Complete the fields",{
    //     position:"top-center"
    //   })
    // }

    else{
      toast.success("Login successful",{
        position:"top-center"
      })
    }
  }


  return (
    <>
   {/* {values.email&&values.pass?<Navbar handleLogout={handleLogout} /> :  */}
   <div className="container">
      <div className="innerBox">
        <h1 className="heading">Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className="footer" onClick={diffToast}>
          <b className="error">{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
    {/* } */}

    <ToastContainer />
    </>
  );
}

export default Login;