import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import logo from "./img/logo2.png";

export default function Header() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid d-flex">
            <div className="ms-2">
              <Link to="/">
                <img className="logo" src={logo} alt=" " />
              </Link>
            </div>
            <div className="me-5  nav">
              <ol className="d-flex nav-item">
                <li><Link className="nav-link link" to="/">Home</Link></li>
                <li><Link className="nav-link link" to="auctions">Auction</Link></li>
                <li><Link className="nav-link link" to="createAuction">Create Auction</Link></li>
                <li><Link className="nav-link link" to="contactus/">Contact Us</Link></li>
                <li><Link className="nav-link link" to="Login/">Sign In</Link></li>
                <li><Link className="nav-link link" to="Signin">Sign Up</Link></li>
                
                <li><Link className="nav-link link" to="admin/auctions">Admin</Link></li>
              </ol>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
