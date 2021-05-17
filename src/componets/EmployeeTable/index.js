import React from "react";
import "./style.css";

function EmployeeTable(props) {
    // const { employees } = props;
    
    const employee  = props;
    // const employeeArray = employee.results;
    // const nameSearch = employee.search;

    // let sortedEmployees = [...employeeArray];
    // sortedEmployees.sort((a, b) => {
    //   if (a.name < b.name) {return -1;}
    //   if (a.name > b.name) {return 1;}
    //   return 0;
    // });

    // console.log(sortedEmployees);

    // let employeeByName = [...employeeArray];
    // employeeByName.filter((a) => {
    //   if(a.name.first === nameSearch){ return 1; }
    //   return 0;
    // }) 

    // console.log(employeeByName);

    return (
      <table>
        <caption>employees</caption>
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
              <td>{employee.name.first}{employee.name.last}</td>
              <td>{employee.location.state}{employee.location.city}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  export default EmployeeTable;