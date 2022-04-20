import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "../Navbar/Navbar.css";
console.log(logo);
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="cinelogo" src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-2 mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/ourservices">
                  Our Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/events">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="aboutfoundation">
                      About Foundation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="boardofdirections">
                      Board of Directions
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <button className="donate-btn">
              {" "}
              <a className="donatebtntext" href="/donate">
                Donate
              </a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
