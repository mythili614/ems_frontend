import { useEffect, useState } from "react";
import API from "../services/api";

function EmployeeTable(){

  const [employees,setEmployees] = useState([]);

  const fetchEmployees = async () => {

    const res = await API.get("employees/");
    setEmployees(res.data);

  };

  const deleteEmployee = async (id) => {

    await API.delete(`employees/${id}/`);
    fetchEmployees();

  };

  useEffect(()=>{
    fetchEmployees();
  },[]);

  return(

    <div>

     

      <table className="table table-bordered">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {employees.map(emp => (

            <tr key={emp.id}>

              <td>{emp.employee_id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>

              <td>
                <button
                className="btn btn-danger btn-sm"
                onClick={()=>deleteEmployee(emp.id)}>
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}

export default EmployeeTable