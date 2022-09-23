import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header'
import AppRoutes from '../router'

const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
