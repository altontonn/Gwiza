import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import RouteLink from "./Router";
import "../App.css";
import pic from "../img/ineza-house-logo.jpg";

const Navigation = () => {
  return (
    <>
      <Navbar className="navbarContainer" collapseOnSelect expand="sm">
        <Container>
        <Navbar.Brand href="#home"><img src={pic} className="imgLogo" alt="Gwiza logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll"/>
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Navbar>
              <NavLink className="navLink" to="/">Home</NavLink>
              <NavLink className="navLink" to="/about">About</NavLink>
              <NavLink className="navLink" to="/services">Services</NavLink>
              <NavLink className="navLink" to="/contact">Contact</NavLink>
            </Navbar>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <RouteLink />
    </>
  );
}

export default Navigation;
