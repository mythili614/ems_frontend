import EmployeeTable from "../components/EmployeeTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function EmployeeList(){

 return(

  <div>

   <Navbar/>

   <div className="d-flex">

    <Sidebar/>

    <div className="container mt-4">

     <h2>Employee List</h2>

     <EmployeeTable/>

    </div>

   </div>

  </div>

 )

}

export default EmployeeList;