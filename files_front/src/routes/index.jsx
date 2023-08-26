import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const Router = () => {
  return (
    <Routes testId='router'>
      <Route exact path='/' element={<HomePage />} />
    </Routes>
  )
}

export default Router
