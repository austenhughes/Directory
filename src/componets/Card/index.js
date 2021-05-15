import React from "react";
import "./style.css";

function Card(props) {

  return (
    <ul className="card">
      {props.results.map((result) => (
      <li className="basic" key={result.id}>
      <div>{result.name.first}{result.name.last}</div>
      <div>{result.dob.date}</div>
      <div>{result.location.state}</div>
      <div>{result.location.city}</div>
      <div>{result.email}</div>
      <div>{result.phone}</div>
      </li>
      ))} 
    </ul>  
  );
}

export default Card;

// import React from "react";
// import "./style.css";

// function Card(props) {
//   return (
//     <div class="card">
//       <div class="basic">card</div>
//       <div class="basic">picture</div>
//       <div class="basic">name</div>
//       <div class="basic">birthday</div>
//       <div class="basic">location</div>
//       <div class="basic">email</div>
//       <div class="basic">phone</div>
//     </div>
//   );
// }

// export default Card;

