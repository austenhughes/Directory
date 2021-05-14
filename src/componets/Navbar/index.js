import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div id="navBar" class="nav">
<form>
      <button class="btn1" onclick="window.location">Sort</button>

      {/* <form> */}
      <input type="text" placeholder="Search.." name="search">
      </input>
      {/* </form> */}

      <button class="btn2" onclick="window.location">Search</button>
  </form>
  </div>

  );
}

export default Navbar;