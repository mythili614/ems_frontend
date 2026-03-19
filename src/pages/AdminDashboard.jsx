import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import API from "../services/api";

function AdminDashboard(){

 const [employees,setEmployees] = useState(0);
 const [attendance,setAttendance] = useState(0);
 const [leaves,setLeaves] = useState(0);

 const fetchDashboardData = async () => {

  try{

   const empRes = await API.get("employees/");
   const attRes = await API.get("attendance/");
   const leaveRes = await API.get("leave/");

   setEmployees(empRes.data.length);
   setAttendance(attRes.data.length);

   const pendingLeaves = leaveRes.data.filter(
    l => l.status === "Pending"
   );

   setLeaves(pendingLeaves.length);

  }
  catch(error){
   console.log(error);
  }

 };

 useEffect(()=>{
  fetchDashboardData();
 },[]);

 return(

  <div>

   <Navbar/>

   <div className="d-flex">

    <Sidebar/>

    <div className="container mt-4">

     <h2>Admin Dashboard</h2>

     <div className="row">

      <div className="col-md-4">
       <div className="card p-3 shadow bg-primary text-white">
        <h5>Total Employees</h5>
        <h3>{employees}</h3>
       </div>
      </div>

      <div className="col-md-4">
       <div className="card p-3 shadow bg-success text-white">
        <h5>Today's Attendance</h5>
        <h3>{attendance}</h3>
       </div>
      </div>

      <div className="col-md-4">
       <div className="card p-3 shadow bg-warning text-dark">
        <h5>Pending Leaves</h5>
        <h3>{leaves}</h3>
       </div>
      </div>

     </div>

    </div>

   </div>

  </div>

 )

}

export default AdminDashboard;