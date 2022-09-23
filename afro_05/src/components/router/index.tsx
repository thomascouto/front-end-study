import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../Main/Main'
import Region from '../Region'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/region" element={<Region />} />
    </Routes>
  )
}

export default AppRoutes
