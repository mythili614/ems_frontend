import { useState } from "react";
import API from "../services/api";

function DailyUpdate(){

 const [employee,setEmployee] = useState("");
 const [work,setWork] = useState("");

 const submitUpdate = async () => {

   await API.post("dailyupdate/",{
     employee: employee,
     work_update: work,
     date: new Date().toISOString().split("T")[0]
   });

   alert("Work Update Submitted");

 };

 return(

  <div className="container mt-5">

   <h2>Daily Work Update</h2>

   <input
     className="form-control mb-3"
     placeholder="Employee ID"
     onChange={(e)=>setEmployee(e.target.value)}
   />

   <textarea
     className="form-control mb-3"
     placeholder="Today's Work"
     onChange={(e)=>setWork(e.target.value)}
   />

   <button
     className="btn btn-primary"
     onClick={submitUpdate}
   >
     Submit Update
   </button>

  </div>

 )

}

export default DailyUpdate;