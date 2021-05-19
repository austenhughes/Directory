import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form>
      <div className="searchStuff">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by first name"
          id="search"
        />
        <button 
        onClick={props.handleFormSubmit} 
        className="btn btn-primary">
        Search
        </button>
        {/* <br /> */}
        <button 
        onClick={props.handleButtonPush} 
        className="btn btn-primary">
        Sort by name
        </button>
        <button 
        onClick={props.handleButtonPushLocation} 
        className="btn btn-primary">
        Sort by location 
        </button>
      </div>
    </form>
  );
}

export default SearchForm;