import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Navbar expand='lg' bg='danger'>
        <Navbar.Brand style={{ color: 'white', fontWeight: 'bold' }} as={Link} to='/'>React Test App</Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Header
