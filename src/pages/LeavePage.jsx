import { useState } from "react";
import API from "../services/api";

function LeavePage(){

 const [date,setDate] = useState("");
 const [reason,setReason] = useState("");
 const [employee,setEmployee] = useState("");

 const applyLeave = async () => {

  try{

   await API.post("leave/",{
    employee: employee,
    date: date,
    reason: reason,
    status: "Pending"
   });

   alert("Leave Applied Successfully");

  }
  catch(error){
   console.log(error);
  }

 };

 return(

  <div className="container mt-4">

   <h2>Apply Leave</h2>

   <input
    className="form-control mb-2"
    placeholder="Employee ID"
    onChange={(e)=>setEmployee(e.target.value)}
   />

   <input
    type="date"
    className="form-control mb-2"
    onChange={(e)=>setDate(e.target.value)}
   />

   <textarea
    className="form-control mb-2"
    placeholder="Reason"
    onChange={(e)=>setReason(e.target.value)}
   />

   <button
    className="btn btn-warning"
    onClick={applyLeave}
   >
    Apply Leave
   </button>

  </div>

 )

}

export default LeavePage;