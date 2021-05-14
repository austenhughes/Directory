import axios from "axios";
  
const EmployeeSet = "https://randomuser.me/api/?results=20";
  
  export default {
    getEmployees: function(query) {
    return axios.get(EmployeeSet);
    }
  };