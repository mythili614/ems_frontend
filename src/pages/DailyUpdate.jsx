import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function DailyUpdate(){

 const [employeeId, setEmployeeId] = useState("");
 const [work, setWork] = useState("");

 const submitUpdate = () => {

  if(!employeeId || !work){
   alert("Please fill all fields");
   return;
  }

  // ✅ Simple working logic
  alert("Update Submitted Successfully ✅");

  // reset form
  setEmployeeId("");
  setWork("");

 };

 return(

  <div>

   <Navbar/>

   <div className="d-flex">

    <Sidebar/>

    <div className="container mt-4">

     <h2>Daily Work Update</h2>

     <input
      className="form-control mb-2"
      placeholder="Employee ID"
      value={employeeId}
      onChange={(e)=>setEmployeeId(e.target.value)}
     />

     <textarea
      className="form-control mb-2"
      placeholder="Enter your work..."
      value={work}
      onChange={(e)=>setWork(e.target.value)}
     />

     <button
      className="btn btn-primary"
      onClick={submitUpdate}
     >
      Submit Update
     </button>

    </div>

   </div>

  </div>

 )
}

export default DailyUpdate;