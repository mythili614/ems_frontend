import { useNavigate } from "react-router-dom";

function Navbar(){

 const navigate = useNavigate();

 const logout = () => {

  // ✅ correct key remove
  localStorage.removeItem("isLoggedIn");

  navigate("/");

 };

 return(

  <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between">

   <h4 className="text-white">EMS Dashboard</h4>

   <button
    className="btn btn-danger"
    onClick={logout}
   >
    Logout
   </button>

  </nav>

 )

}

export default Navbar;