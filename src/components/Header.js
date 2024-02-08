import React from 'react';
import HeaderImage from '../assets/HeaderImage.png'
import { Nav } from "reactstrap"
import { NavLink as RouterNavLink } from "react-router-dom"

const Header = () => {
  return (
    <div><Nav>
      <RouterNavLink to="/">
        <img
          src={HeaderImage} alt="Header"
          className="logo"
        />
      </RouterNavLink>
      <RouterNavLink to="/catindex" className="nav-link">
        Meet All the Cats
      </RouterNavLink>
      <RouterNavLink to="/catnew" className="nav-link">
        Add Your Cat
      </RouterNavLink>
      <a
        target="blank"
        href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter"
        className="nav-link"
      >
        Adopt a Cat!
      </a>
    </Nav>
    </div>
  )
}

export default Header