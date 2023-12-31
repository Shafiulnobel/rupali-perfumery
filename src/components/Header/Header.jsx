import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
const Header = () => {
  const[count,setCount]=useState(0);
  
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img className='img-fluid w-75' src="https://i.ibb.co/5WL7wf3/The-Secret-Story.png" alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page">
                <ActiveLink to={`/`}>Home</ActiveLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page">
                <ActiveLink to={`/shop`}>Shop</ActiveLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page">
                <ActiveLink to={`/premium`}>Premium Collection</ActiveLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <ActiveLink to={`/about`}>About us</ActiveLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <ActiveLink to={`/contact`}>Contact</ActiveLink>
              </a>
            </li>
          </ul>
          <div className='me-auto'>
            <button type="button" class="btn btn-primary position-relative awesome">
            <FontAwesomeIcon className='fs-4' icon={faCartShopping} />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {count}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;