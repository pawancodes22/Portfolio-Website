import React, { useState, useEffect } from "react";

import Logo from "../../assets/img/logo.svg";

import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import navIcon4 from "../../assets/img/nav-icon4..svg";
import navIcon5 from "../../assets/img/nav-icon5.svg";

import { Nav, Container, Navbar } from "react-bootstrap";

import "./index.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const changeActiveTab = (event) => {
    setActiveTab(event.target.textContent.toLowerCase());
    console.log(event.target.textContent.toLowerCase());
  };

  return (
    <Navbar expand="lg" className={`z-index-1 fixed-top h-fit scrolled`}>
      <Container>
        <div className="d-flex justify-content-between align-items-center w-100">
          <Navbar.Brand href="#banner">
            <img className="header-logo w-25" src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-white"
          />
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className="mb-3 mb-md-0">
          <Nav className="ms-auto">
            <Nav.Link
              href="#banner"
              className={activeTab === "home" ? "active-nav-link" : ""}
              onClick={(e) => changeActiveTab(e)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeTab === "skills" ? "active-nav-link" : ""}
              onClick={(e) => changeActiveTab(e)}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeTab === "projects" ? "active-nav-link" : ""}
              onClick={(e) => changeActiveTab(e)}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={activeTab === "experience" ? "active-nav-link" : ""}
              onClick={(e) => changeActiveTab(e)}
            >
              Experience
            </Nav.Link>
          </Nav>
          <div className="social-icons">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/pawansaibalivada/"
            >
              <img src={navIcon1} alt="linkedin" />
            </a>
            <a
              target="_blank"
              href="https://github.com/pawancodes22/project-portfolio.git"
            >
              <img
                style={{ filter: "invert(100%)" }}
                src={navIcon5}
                alt="github"
              />
            </a>
            {/* <a href="#">
              <img src={navIcon3} alt="instagram" />
            </a> */}
          </div>
          <a href="#contact-us" className="contact-us-btn">
            Let's Connect!
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
