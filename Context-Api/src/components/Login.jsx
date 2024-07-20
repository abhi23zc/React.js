import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
    
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setuser} = useContext(UserContext);

    return (
    <div>
      <h1>Login Page</h1>
      <br />
      <form>
        <label>
          Username:
          <input type="text" name="username" value={username} onChange={(e)=>setusername(e.target.value)}/>
        </label>
        <br />
        <br />
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        </label>
        <br />
        <br />
        <button type="submit" onClick={(e)=>{
            e.preventDefault();
            setuser({username, password})
        }}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
