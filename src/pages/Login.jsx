import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login(){

 const [username,setUsername] = useState("");
 const [password,setPassword] = useState("");
 const navigate = useNavigate();

 const handleLogin = async () => {

  try{

   const res = await API.post("token/",{
    username: username,
    password: password
   });

   localStorage.setItem("token", res.data.access);

   alert("Login Success");

   navigate("/admin");

  }
  catch(error){

   alert("Invalid credentials");

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