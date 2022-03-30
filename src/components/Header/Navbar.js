import React from 'react';
import logo from '../Images/logo.png'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './CustomButton.css'
import './Navbar.css'
import './Navbar-mobile.css'

const Navbar = () => {
  return <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light navbar-color">

  <a class="navbar-brand" href="#"><img src={logo} alt="" width="200" height="200" class="d-inline-block align-text-top"/></a>
  <button class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    <span class="toggler-icon top-bar"></span>
    <span class="toggler-icon middle-bar"></span>
    <span class="toggler-icon bottom-bar"></span>

  </button>
  <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarText">
  
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul> */}
    {/* <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/login') }}">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/register') }}">Register</a>
                </li>
            </ul> */}
    {/* <span class="navbar-text">
      Navbar text with an inline element
    </span> */}
  {/* </div>
</nav> */}


<nav class="navbar navbar-expand-lg navbar-light bg-light navbar-color">
  <a class="navbar-brand" href="#"><img src={logo} alt="" width="200" height="200" class="d-inline-block align-text-top"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mx-auto text-navbar">
      <li class="nav-item navbar-item active">
        <a class="nav-link" href="/">דף בית<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item navbar-item">
        <a class="nav-link" href="/aboutus">מי אנחנו</a>
      </li>
      <li class="nav-item navbar-item">
        <a class="nav-link" href="/sendmsg">צור קשר</a>
      </li>
    </ul>
  </div>
</nav>

{/* <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/login') }}">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ url('/register') }}">Register</a>
                </li>
            </ul>
        </div>
    </nav> */}
  </div>;
};

export default Navbar;
