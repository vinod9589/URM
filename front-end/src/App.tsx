import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
