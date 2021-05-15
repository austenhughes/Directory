import axios from "axios";

// const BASEURL = "https://randomuser.me/api/?results=20";

let API = {
search: function(query) {
return axios.get("https://randomuser.me/api/?results=20" + query);
}
};


export default API;
  
