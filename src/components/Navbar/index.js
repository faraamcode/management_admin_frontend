import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../../assets/images/logo.png'
import { Nav, NavLogoStyle, NavWrapper } from './Navbar.style'
import HomeNavLinks from './components/home-nav-links'

export default function NavBar () {
  return (
    <NavWrapper>
      <Nav>
        <NavLogoStyle to='/'>
          <img width='200px' height='100%' src={logoImage} alt='logo' />
        </NavLogoStyle>
        <HomeNavLinks />
      </Nav>
    </NavWrapper>
  )
}
