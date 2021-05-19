import React from "react";
import "./style.css";

function EmployeeTable(props) {
    
    const employee  = props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>photo</th>
            <th>name</th>
            <th>location</th>
            <th>email</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {employee.results.map(employee => (
            <tr key={employee.uuid}>
              <td><img alt={employee.picture.large} className="img" src={employee.picture.large} /></td>
              <td>{employee.name.first} {employee.name.last}</td>
              <td>{employee.location.state} <br/>
              {employee.location.city}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  export default EmployeeTable;