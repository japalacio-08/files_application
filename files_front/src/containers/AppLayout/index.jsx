import React from 'react'
import Header from '../../components/Header/index'
import Container from 'react-bootstrap/Container'

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  )
}

export default AppLayout
