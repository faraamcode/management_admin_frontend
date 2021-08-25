import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './Navbar.style'
import HomeNavLinks from './components/home-nav-links'

export default function NavBar () {
  return (
    <Nav>
      <Link to=''>Logo</Link>
      <HomeNavLinks />
    </Nav>
  )
}
