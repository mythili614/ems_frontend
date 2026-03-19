import { useEffect, useState } from "react";
import API from "../services/api";

function AdminLeaves(){

 const [leaves,setLeaves] = useState([]);

 // Fetch leave requests
 const fetchLeaves = async () => {

   try{
     const res = await API.get("leave/");
     setLeaves(res.data);
   }
   catch(error){
     console.log(error);
   }

 };

 // Approve leave
 const approveLeave = async (id) => {

   try{
     await API.patch(`leave/${id}/`,{
       status:"Approved"
     });

     fetchLeaves();
   }
   catch(error){
     console.log(error);
   }

 };

 // Reject leave
 const rejectLeave = async (id) => {

   try{
     await API.patch(`leave/${id}/`,{
       status:"Rejected"
     });

     fetchLeaves();
   }
   catch(error){
     console.log(error);
   }

 };

 useEffect(()=>{
   fetchLeaves();
 },[]);

 return(

  <div className="container mt-4">

   <h2>Leave Requests</h2>

   <table className="table table-bordered">

    <thead>

     <tr>
      <th>Employee</th>
      <th>Date</th>
      <th>Reason</th>
      <th>Status</th>
      <th>Action</th>
     </tr>

    </thead>

    <tbody>

     {leaves.map((l)=>(
      <tr key={l.id}>

       <td>{l.employee}</td>
       <td>{l.date}</td>
       <td>{l.reason}</td>
       <td>{l.status}</td>

       <td>

        <button
         className="btn btn-success me-2"
         onClick={()=>approveLeave(l.id)}
        >
         Approve
        </button>

        <button
         className="btn btn-danger"
         onClick={()=>rejectLeave(l.id)}
        >
         Reject
        </button>

       </td>

      </tr>
     ))}

    </tbody>

   </table>

  </div>

 )

}

export default AdminLeaves;