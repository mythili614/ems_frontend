import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function EmployeeDashboard(){

 const [employeeId,setEmployeeId] = useState("");
 const navigate = useNavigate();

 const markAttendance = async () => {
 
  try{

   await API.post("attendance/",{
    employee: employeeId,
    status:"present",
    date:new Date().toISOString().split("T")[0]
   });

   alert("Attendance Marked Successfully");

  }
  catch(error){

   alert("Error marking attendance");

  }

 };

 return(

  <div>

   <Navbar/>

   <div className="d-flex">

    <Sidebar/>

    <div className="container mt-4">

     <h2>Employee Dashboard</h2>

     <div className="row mt-4">

      <div className="col-md-4">

       <div className="card p-3 shadow">

        <h5>Mark Attendance</h5>

        <input
         className="form-control mb-2"
         placeholder="Employee ID"
         value={employeeId}
         onChange={(e)=>setEmployeeId(e.target.value)}
        />

        <button
         className="btn btn-success"
         onClick={markAttendance}
        >
         Mark Attendance
        </button>

       </div>

      </div>

      <div className="col-md-4">

       <div className="card p-3 shadow">

        <h5>Apply Leave</h5>

      <button
 className="btn btn-warning"
 onClick={()=>navigate("/leave")}
>
 Apply Leave
</button>

       </div>

      </div>

      <div className="col-md-4">

       <div className="card p-3 shadow">

        <h5>Daily Update</h5>

       <button
 className="btn btn-primary"
 onClick={()=>navigate("/daily-update")}
>
 Submit Update
</button>

       </div>

      </div>

     </div>

    </div>

   </div>

  </div>

 )

}

export default EmployeeDashboard;