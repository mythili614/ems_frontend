import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

 const [username,setUsername] = useState("");
 const [password,setPassword] = useState("");
 const navigate = useNavigate();

 const handleLogin = () => {

  // 🔥 SIMPLE STATIC LOGIN
  if(username === "latha" && password === "123456"){

   alert("Login Success");

   // login flag save
   localStorage.setItem("isLoggedIn", "true");

   navigate("/employee-dashboard");

  } else {
   alert("Invalid Username or Password");
  }
 };

 return(

  <div className="container mt-5">

   <h2>Login</h2>

   <input
    className="form-control mb-2"
    placeholder="Username"
    onChange={(e)=>setUsername(e.target.value)}
   />

   <input
    type="password"
    className="form-control mb-2"
    placeholder="Password"
    onChange={(e)=>setPassword(e.target.value)}
   />

   <button
    className="btn btn-primary"
    onClick={handleLogin}
   >
    Login
   </button>

  </div>

 )
}

export default Login;