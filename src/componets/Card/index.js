import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div>
      {props.results.map((result) => (
      <div className="card">
      <div className="basic" key={result.id}>
      <img alt={result.picture.large} className="img-fluid" src={result.picture.large} />
      <div>{result.name.first}{result.name.last}</div>
      <div>{result.location.state}</div>
      <div>{result.location.city}</div>
      <div>{result.email}</div>
      <div>{result.phone}</div>
      </div>
      </div>
      ))} 
    </div>  
  );
}

export default Card;




