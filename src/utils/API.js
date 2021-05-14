import axios from "axios";
  
const EmployeeSet = "https://randomuser.me/api/?results=20";
  // "https://randomuser.me/api/?inc=picture,name,phone,email,dob&results=15";
  
  export default {
    getEmployeeSet: function(query) {
    return axios.get(EmployeeSet);
    }
  };