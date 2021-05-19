import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=5000";

let API = {
search: function(query) {
return axios.get(BASEURL + query);
}
};


export default API;
  
