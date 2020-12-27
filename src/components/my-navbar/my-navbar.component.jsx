import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/Capture.png";
import "./my-navbar.styles.css";

const MyNavbar = () => {
  return (
    <div>
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
            <Nav className="mr-auto ">
              <Nav.Link href="#home"style = {{color:" black"}}className="shadow bg-black rounded">Home</Nav.Link>
              <Nav.Link href="#about"style = {{color:" black"}}className="shadow bg-black rounded">About</Nav.Link>
              <Nav.Link href="#skills"style = {{color:" black"}}className="shadow bg-black rounded">Skills</Nav.Link>
              <Nav.Link href="#experience"style = {{color:" black"}}className="shadow bg-black rounded">Education</Nav.Link>
              <Nav.Link href="#projects"style = {{color:" black"}}className="shadow bg-black rounded">Projects</Nav.Link>
              <Nav.Link href="#contact"style = {{color:" black"}}className="shadow bg-black rounded">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
