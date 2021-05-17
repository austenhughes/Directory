import React from "react";
import "./style.css";

function Navbar(props) {
  return (
  <div id="navBar" className="nav">
  <form>
  {/* <button className="btn1" onChange={props.handleButtonPush} >Sort</button> */}
      
      {/* <input type="text" placeholder="Search.." name="search">
      </input>

      <button className="btn2" onClick="window.location">Search</button> */}
  </form>
  </div>

  );
}

export default Navbar;