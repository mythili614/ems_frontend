import { Link } from "react-router-dom";

function Sidebar(){

 return(

  <div
   className="bg-light p-3"
   style={{width:"220px", height:"100vh"}}
  >

   <h5 className="mb-4">Menu</h5>

   <ul className="list-unstyled">

    <li className="mb-3">
     <Link to="/admin" className="text-decoration-none fw-bold">
      Dashboard
     </Link>
    </li>

    <li className="mb-3">
     <Link to="/admin-leaves" className="text-decoration-none fw-bold">
      Leaves
     </Link>
    </li>

    <li className="mb-3">
     <Link to="/daily-update" className="text-decoration-none fw-bold">
      Daily Update
     </Link>
    </li>

    <li className="mb-3">
     <Link to="/employees" className="text-decoration-none fw-bold">
      Employees
     </Link>
    </li>

   </ul>

  </div>

 )

}

export default Sidebar;