import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function LeavePage(){

 const [employeeId, setEmployeeId] = useState("");
 const [date, setDate] = useState("");
 const [reason, setReason] = useState("");

 const applyLeave = () => {

  if(!employeeId || !date || !reason){
   alert("Please fill all fields");
   return;
  }

  // ✅ Simple working logic (no backend)
  alert("Leave Applied Successfully ✅");

  // reset form
  setEmployeeId("");
  setDate("");
  setReason("");

 };

 return(

  <div>

   <Navbar/>

   <div className="d-flex">

    <Sidebar/>

    <div className="container mt-4">

     <h2>Apply Leave</h2>

     <input
      className="form-control mb-2"
      placeholder="Employee ID"
      value={employeeId}
      onChange={(e)=>setEmployeeId(e.target.value)}
     />

     <input
      type="date"
      className="form-control mb-2"
      value={date}
      onChange={(e)=>setDate(e.target.value)}
     />

     <textarea
      className="form-control mb-2"
      placeholder="Reason"
      value={reason}
      onChange={(e)=>setReason(e.target.value)}
     />

     <button
      className="btn btn-warning"
      onClick={applyLeave}
     >
      Apply Leave
     </button>

    </div>

   </div>

  </div>

 )
}

export default LeavePage;