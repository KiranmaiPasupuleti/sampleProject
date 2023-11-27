import React from 'react'
import NavbarComponent from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import DisplayHomeComponent from '../DisplayHomeComponent/DisplayHomeComponent'

function HomeDashboard() {
  return (
    <div className='container-fluid'>
        <div className='row'>
        <NavbarComponent/>
        <DisplayHomeComponent/>
        <Footer/>
        </div>
    </div>
  )
}

export default HomeDashboard