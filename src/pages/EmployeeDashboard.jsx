import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeDashboard(){

 const navigate = useNavigate();

 const [employeeId,setEmployeeId] = useState("");

 // 🔒 Login check
 useEffect(() => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if(!isLoggedIn){
   navigate("/");
  }
 }, []);

 // ✅ Simple attendance (no API)
 const markAttendance = () => {

  if(!employeeId){
   alert("Enter Employee ID");
   return;
  }

  alert("Attendance Marked Successfully ✅");

 };

 return(

  <div>

   <Navbar/>

   <div className="d-flex">

    <Sidebar/>

    <div className="container mt-4">

     <h2 className="fw-bold">Employee Dashboard</h2>

     <div className="row mt-4">

      {/* Attendance */}
      <div className="col-md-4">
       <div className="card p-3 shadow">
        <h5>🟢 Mark Attendance</h5>

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

      {/* Leave */}
      <div className="col-md-4">
       <div className="card p-3 shadow">
        <h5>🟡 Apply Leave</h5>

        <button
         className="btn btn-warning"
         onClick={()=>navigate("/leave")}
        >
         Apply Leave
        </button>

       </div>
      </div>

      {/* Daily Update */}
      <div className="col-md-4">
       <div className="card p-3 shadow">
        <h5>🔵 Daily Update</h5>

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