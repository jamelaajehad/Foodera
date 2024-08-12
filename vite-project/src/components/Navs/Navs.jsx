
import React  from "react"; 
import {Navbar , Nav  } from 'react-bootstrap'; 
import './Navs.css';
import logo from './../../assets/logo.png';
const Navs = () => {
return ( 
<Navbar expand="lg">
  <Navbar.Brand href="#home">
    <img src= {logo} title="logo"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#aboutus">about us</Nav.Link>
      <Nav.Link href="#explore">explore food</Nav.Link>
      <Nav.Link href="#review">Review</Nav.Link>
      <Nav.Link href="#faq">faq</Nav.Link>
    </Nav>
    <Nav>
      <button className="phone">098 765 123</button>
    </Nav>
  </Navbar.Collapse>
 
</Navbar>
)
}
export default Navs ;