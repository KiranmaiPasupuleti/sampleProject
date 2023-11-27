import React from 'react'
import NavbarComponent from '../Navbar/Navbar'
import MyAcountLeftPortion from '../MyAccountLeftPortion/MyAcountLeftPortion'
import Footer from '../Footer/Footer'

const Address = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <NavbarComponent />
        <h3>My Account</h3>
        <hr />
        <div
          style={{ minHeight: "45vh" }}
          className="col-12 d-flex flex-column flex-md-row m-2 m-md-4"
        >
          <MyAcountLeftPortion />
          <div className="col-md-6 border border-dark rounded p-4 d-flex flex-column align-items-start">
            
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Address