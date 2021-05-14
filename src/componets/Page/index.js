import React from "react";
import NavBar from "../Navbar/index";
import Card from "../Card/index";
import Footer from "../Footer/index";
import Header from "../Header/index";
import "./style.css";

function Page(props) {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default Page;