import React from 'react';

const NavbarHome = () => {
  return (
    <nav className="navbar navbar-expand-md sticky-top py-3 navbar-dark" id="mainNav">
      <div className="container px-4">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img 
            width="1100" 
            height="154" 
            className="navbar-logo" 
            src="/assets/img/logo.png" 
            alt="Logo"
          />
        </a>
        <button 
          className="navbar-toggler" 
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="main-navbar" className="navbar-collapse collapse">
          <div className="flex-grow-1 justify-content-center align-items-center navbar-nav">
            <a className="nav-link" href="#">Films</a>
            <span className="nav-divider">/</span>
            <a className="nav-link" href="#">Showtimes</a>
            <span className="nav-divider">/</span>
            <a className="nav-link" href="#">Box Office</a>
            <span className="nav-divider">/</span>
            <a className="nav-link" href="#">Contact</a>
          </div>
          <div className="d-flex align-items-center">
            <a className="me-3 text-white" href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="me-3 text-white" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="text-white" href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
