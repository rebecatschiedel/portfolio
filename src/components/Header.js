import { Link } from 'gatsby';
import React, { useState } from 'react';
import logo from '../assets/img/website-icon.png';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top navbar-shrink`}
      id="mainNav"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <button
          onClick={() => setOpenMenu(() => !openMenu)}
          className={`navbar-toggler navbar-toggler-right ${
            openMenu ? '' : 'collapsed'
          }`}
          type="button"
          aria-controls="navbarResponsive"
          aria-expanded={openMenu}
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div
          className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
          id="navbarResponsive"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
