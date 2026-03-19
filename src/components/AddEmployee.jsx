import { useState } from "react";
import API from "../services/api";

function AddEmployee(){

  const [employee_id,setEmployeeId] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [department,setDepartment] = useState("");

  const handleSubmit = async () => {

    await API.post("employees/",{
      employee_id,
      name,
      email,
      department
    });

    alert("Employee Added Successfully");
    window.location.reload();

  };

  return(

    <div className="card p-4 mb-4">

      <h4>Add Employee</h4>

      <input
      className="form-control mb-2"
      placeholder="Employee ID"
      onChange={(e)=>setEmployeeId(e.target.value)}
      />

      <input
      className="form-control mb-2"
      placeholder="Name"
      onChange={(e)=>setName(e.target.value)}
      />

      <input
      className="form-control mb-2"
      placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)}
      />

      <input
      className="form-control mb-2"
      placeholder="Department"
      onChange={(e)=>setDepartment(e.target.value)}
      />

      <button
      className="btn btn-primary"
      onClick={handleSubmit}>
        Add Employee
      </button>

    </div>

  )

}

export default AddEmployee