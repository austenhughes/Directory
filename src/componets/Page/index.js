import React, { Component } from "react";
import NavBar from "../Navbar/index";
import EmployeeTable from "../EmployeeTable/index";
import SearchForm from "../SearchForm/index";
// import Card from "../Card/index";
import Footer from "../Footer/index";
import Header from "../Header/index";
import API from "../../utils/API";
import "./style.css";

class Page extends Component {
  state = {
    search: "",
    results: [],
    // direction: ""
  };

  componentDidMount() {
    this.searchDirectory([]);
  }

  searchDirectory = (query) => {
    API.search(query)
      .then(res => this.setState({ results: res.data.results}))
      .catch(err => console.log(err));
  };
  
  handleFormSubmit = event => {
    event.preventDefault();

    let byFirstName = this.state.results;
    let byFirstNameSearch = this.state.search;

    let byFirstNameSearched = byFirstName.filter(employee =>
    employee.name.first === byFirstNameSearch);

    this.setState({ results: byFirstNameSearched})
  
    console.log(byFirstNameSearched);

  };
  
  handleButtonPush = event => {
    event.preventDefault();

    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });

    let sortByFirstName = this.state.results;
    console.log(sortByFirstName)

    sortByFirstName.sort(function(a, b){
      if(a.name.first < b.name.first) { return -1; }
      if(a.name.first > b.name.first) { return 1; }
      return 0;
    })

    // for (let i = 0; i < sortByFirstName.length; i++) {
    //   console.log(sortByFirstName.[i].name.first)
    // }

  };

  handleButtonPushLocation = event => {
    event.preventDefault();

    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });

    let sortByLocation = this.state.results;
    console.log(sortByLocation)

    sortByLocation.sort(function(a, b){
      if(a.location.city < b.location.city) { return -1; }
      if(a.location.city > b.location.city) { return 1; }
      return 0;
    })

    // for (let i = 0; i < sortByFirstName.length; i++) {
    //   console.log(sortByFirstName.[i].name.first)
    // }

  };

  handleInputChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <SearchForm
      value={this.state.search}
      handleInputChange={this.handleInputChange}
      handleFormSubmit={this.handleFormSubmit}
      handleButtonPush={this.handleButtonPush}
      handleButtonPushLocation={this.handleButtonPushLocation}
      />
      <EmployeeTable results={this.state.results}/>
      {/* <Card results={this.state.results}/> */}
      <Footer/>
    </div>
  );
  }
}

export default Page;