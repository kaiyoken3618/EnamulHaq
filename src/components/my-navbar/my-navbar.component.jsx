import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/Capture.png";
import "./my-navbar.styles.css";  
import {Link,NavLink} from "react-router-dom";


const MyNavbar = () => {
  return (
    <div className>
      <Navbar
        fixed="top"
        variant="light"
        expand="md"
        className="animate-navbar nav-theme justify-content-between" 
   
      >
        <div>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" exact activeStyle = {{color:" red", backgroundColor: "rgba(135,206,235, 0.3)",marginRight:"5px"}}className="page">Home</Nav.Link>
              <Nav.Link href="#about"exact activeStyle  = {{color:" black", backgroundColor: "rgba(135,206,235, 0.3)",marginRight:"5px"}}className="page">About</Nav.Link>
              <Nav.Link href="#skills"exact activeStyle  = {{color:" black", backgroundColor: "rgba(135,206,235, 0.3)",marginRight:"5px"}}className="page">Skills</Nav.Link>
              <Nav.Link href="#experience"exact activeStyle  = {{color:" black", backgroundColor: "rgba(135,206,235, 0.3)",marginRight:"5px"}}className="page">Education</Nav.Link>
              <Nav.Link href="#projects"exact activeStyle  = {{color:" black", backgroundColor: "rgba(135,206,235, 0.3)",marginRight:"5px"}}className="page">Projects</Nav.Link>
              <Nav.Link href="#contact"exact activeStyle  = {{color:" black", backgroundColor: "rgba(135,206,235, 0.3)",marginRight:"5px"}}className="page">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
