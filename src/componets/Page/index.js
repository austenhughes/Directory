import React, { Component } from "react";
import NavBar from "../Navbar/index";
import Card from "../Card/index";
import Footer from "../Footer/index";
import Header from "../Header/index";
import API from "../../utils/API";
import "./style.css";

class Page extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    this.searchDirectory();
  }

  searchDirectory = (query) => {
    API.search(query)
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  render() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Card results={this.state.results}/>
      <Footer/>
    </div>
  );
  }
}

export default Page;