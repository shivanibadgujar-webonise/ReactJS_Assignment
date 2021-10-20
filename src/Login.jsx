import { useState } from "react";
import { useEffect } from "react";

import {Link} from "react-router-dom";
import Dashboard from "./Dashboard";
import SubmitButton from "./SubmitButton";
import UserInput from "./UserInput";

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [enableSubmit,setEnableSubmit] = useState(false);
    const [error, setError] = useState("");
  
    useEffect(() => {
  
      if(email ==='sample@gmail.com' && password ==='sample123')
      {
        setEnableSubmit(email && password);
        setError('');
      }
      else if(email === '' && password === '')
      {
        setError('');
      }
      else if(email !=='sample@gmail.com' && password !=='sample123')
      {
        setError('Enter valid Credentials');
      }
        
    }, [email,password]);
   
      return (
      <>
        <div className="Title">
          <h2>LOGIN</h2>
        </div>
  
        <div className="login-div">
          <label className="Label">Email</label> <br />
          <UserInput
            type="email"
            placeholder="email"
            inputClass="login-input"
            value={email}
            onChange={(evt) => setEmail(evt.currentTarget.value)}/>
          <br />
          <br />
          <label className="Label">Password</label> <br />
          <UserInput
            type="password"
            placeholder="password"
            inputClass="login-input"
            value={password}
            onChange={(evt) => setPassword(evt.currentTarget.value)}/>
          <br />
          <br />
          {error && <span className="spanError" >{error}</span>}    
          <br />
          <br />
  
          <Link to="Dashboard"><SubmitButton
            title="Login"
            className="submit-button"
            disabled={!enableSubmit}
            onClick={() => "Login done!!"}/>
          </Link>
        </div>     
      </>
    );
  }
  
  export default Login;
  