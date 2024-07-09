

import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

const Layout = () => {
  return (
    <div>
      <header>
         <NavBar />
      </header>
        <main>
            <Outlet />
        </main>
      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default Layout
