import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
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
        Sort
        </button>
      </div>
    </form>
  );
}

export default SearchForm;