import { useState } from "react";
import API from "../services/api";

function Register(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = async () => {

    try{

      await API.post("employees/",{
        name:name,
        email:email,
        department:"IT",
        employee_id:Date.now()
      });

      alert("Employee Registered Successfully");

    }catch(error){

      console.log(error);

    }

  }

  return(

    <div>

      <h2>Register Page</h2>

      <input
      placeholder="Name"
      onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <input
      placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)}
      />

      <br/><br/>

      <input
      placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)}
      />

      <br/><br/>

      <button onClick={handleRegister}>
        Register
      </button>

    </div>

  )

}

export default Register