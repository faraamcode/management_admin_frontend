import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavLogoStyle, NavWrapper } from './Navbar.style'
import HomeNavLinks from './components/home-nav-links'

export default function NavBar () {
  return (
    <NavWrapper>
      <Nav>
        <NavLogoStyle to='/'>Logo</NavLogoStyle>
        <HomeNavLinks />
      </Nav>
    </NavWrapper>
  )
}
