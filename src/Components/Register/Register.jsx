import React, { useState } from "react";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate()
    const [registerData,setRegisteredData] = useState({
        firstname : '',
        lastname: '',
        email : '',
        mobileNo : '',
        password : '',
        confirmPassword : '',
        gender : ''
    })

  const handleInputChange = (event) => {
    setRegisteredData({...registerData,[event.target.name] : event.target.value})
  };

  const handleRegistration = (event) => {
    event.preventDefault()
    // console.log(registerData)
    const postRegistrationData = {
        firstname : registerData.firstname,
        lastname: registerData.lastname,
        email : registerData.email,
        mobileNo : registerData.mobileNo,
        password : registerData.password,
        confirmPassword : registerData.confirmPassword,
        gender : registerData.gender
    }
    axios.post('http://localhost:3002/registeredData',postRegistrationData).then((response) => {
        console.log(response.data)
        setRegisteredData(response.data)
    })
  }

  const onclickLogin = () => {
    navigate('/')
  }

  return (
    <div className="container-fluid">
      <div className="row">
      <NavbarComponent />
      <div className="col-12 d-flex flex-column align-items-center">
        <div className="col-12 d-flex flex-column flex-md-row justify-content-around align-items-center  align-items-md-none">
          <button className="col-9 col-md-5 btn btn-danger mt-3">
            <FontAwesomeIcon className="me-2" icon={faGoogle} />
            Login with Gmail
          </button>
          <button className="col-9 col-md-5 btn btn-primary mt-3">
            <FontAwesomeIcon className="me-2" icon={faFacebookF} />
            Login with facebook
          </button>
        </div>
        <div className="col-12 p-md-3 m-3 m-md-4 col-md-7 shadow-lg">
          <h1>Register to Shopify</h1>
          <form onSubmit={handleRegistration} className="d-flex flex-wrap">
            <div className="col-12 col-md-6 mt-3">
              <label className="col-10 col-md-9 text-start" htmlFor="firstname">
                FirstName:{" "}
              </label>
              <br />
              <input
                className="col-10 col-md-9 p-1 border border-1 border-dark rounded-1 text-start"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter Firstname"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 col-md-6 mt-3">
              <label className="col-10 col-md-9 text-start" htmlFor="lastName">
                LastName:{" "}
              </label>
              <br />
              <input
                className="col-10 col-md-9 p-1 border border-1 border-dark rounded-1 text-start"
                type="text"
                name="lastname"
                id="lastName"
                placeholder="Enter LastName"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 col-md-6 mt-3">
              <label className="col-10 col-md-9 text-start" htmlFor="email">
                Email:{" "}
              </label>
              <br />
              <input
                className="col-10 col-md-9 p-1 border border-1 border-dark rounded-1 text-start"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 col-md-6 mt-3">
              <label className="col-10 col-md-9 text-start" htmlFor="mobileNo">
                Mobile:{" "}
              </label>
              <br />
              <input
                className="col-10 col-md-9 p-1 border border-1 border-dark rounded-1 text-start"
                type="tel"
                name="mobileNo"
                id="mobileNo"
                placeholder="Enter Mobile No."
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 col-md-6 mt-3">
              <label className="col-10 col-md-9 text-start" htmlFor="password">
                Password:{" "}
              </label>
              <br />
              <input
                className="col-10 col-md-9 p-1 border border-1 border-dark rounded-1 text-start"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 col-md-6 mt-3">
              <label
                className="col-10 col-md-9 text-start"
                htmlFor="confirmPassword"
              >
                Confirm Password:{" "}
              </label>
              <br />
              <input
                className="col-10 col-md-9 p-1 border border-1 border-dark rounded-1 text-start"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Enter Confirm Password"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 m-3">
              <label className="text-start">Gender</label>
              <div className="col-12 d-flex justify-content-between">
                <div className="col-6">
                  <input type="radio" id="male" name="gender" onChange={handleInputChange} value="male" />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="col-6">
                  <input
                  onChange={handleInputChange}
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              <p id="genderErrMsg"></p>
            </div>
            <div className="col-12 d-flex justify-content-around m-3">
              <button type="submit" className="col-5 col-md-2 btn btn-success p-md-1 text-light">
                Register
              </button>
              <button onClick={onclickLogin} className="col-5 col-md-2 btn btn-warning p-md-1 text-dark">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default Register;
