// import React, { useState } from "react";
// import NavbarComponent from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle,faFacebookF } from "@fortawesome/free-brands-svg-icons";
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";

// function Login() {

//   const navigate = useNavigate()
//   const [loginData,setLoginData] = useState({
//     email: '',
//     password: ''
//   })

//   const onChangeInput = (event) => {
//     setLoginData({...loginData,[event.target.name] : event.target.value})
//   }

//   const handleLoginSubmit = (event) => {
//     event.preventDefault()
//     console.log('his')
//     const postLoginData = {
//       email :loginData.email,
//       password : loginData.password
//     }
//     axios.post('http://localhost:3004/loginData',postLoginData).then((res) => {
//       console.log(res.data)
//       setLoginData(res.data)
//     })
//   }

//   const onClickregisterNow = () => {
//     navigate('/register')
//   }

//   return (
//     <div className="container-fluid">
//       <div className="row">
//       <NavbarComponent />
//       <div className="col-12 d-flex flex-column flex-md-row" style={{'minHeight' : '50vh'}}>
//         <div className="col-md-6 p-3 d-flex flex-column align-items-center">
//           <button className="col-10 col-md-8 btn btn-danger mt-3">
//             <FontAwesomeIcon className="me-2" icon={faGoogle} />
//             Login with Gmail
//           </button>
//           <button className="col-10 col-md-8 btn btn-primary mt-3">
//           <FontAwesomeIcon className="me-2" icon={faFacebookF} />
//             Login with facebook</button>
//         </div>
//         <div className="col-md-6 p-3">
//           <h1>Login to Shopify</h1>
//           <form className="shadow-lg p-3" onSubmit={handleLoginSubmit}>
//             <input style={{height:'40px'}} className="col-md-6 mt-3 p-1" type="email" name="email" onChange={onChangeInput} placeholder="Enter email"/>
//             <br/>
//             <input style={{height:'40px'}} className="col-md-6 mt-3 p-1" type="password" name="password" onChange={onChangeInput} placeholder="Enter Password"/>
//             <br/>
//             <button type="submit" className="btn btn-success p-1 mt-3">Login</button>
//           </form>
//           <div className="d-flex justify-content-around mt-3">
//             <button onClick={onClickregisterNow} className="border border-0 p-2">Register Now</button>
            
//             <button className="border border-0 p-2">Forgot Password</button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       </div>
//     </div>
//   );
// }

// export default Login;



///////////
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import NavbarComponent from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login1() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    try {
      axios.get("http://localhost:3002/registeredData").then((response) => {
        // console.log(response.data);
        setUserData(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const isUserExist = userData.some((eachUser) => {
      return (
        eachUser.email === loginData.email &&
        eachUser.password === loginData.password
      );
    });
    if (isUserExist) {
      console.log("isuserExists",isUserExist)
      localStorage.setItem("email", loginData.email);
      navigate('/home')
    }
    else{
        toast('Enter Valid email and password')
        console.log("user not exist")
    }
  };

  const onChangeInput = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const onclickRegister = () => {
    navigate("/register");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <NavbarComponent />
        <div
          className="col-12 d-flex flex-column flex-md-row"
          style={{ minHeight: "50vh" }}
        >
          <div className="col-md-6 p-3 d-flex flex-column align-items-center">
            <button className="col-10 col-md-8 btn btn-danger mt-3">
              <FontAwesomeIcon className="me-2" icon={faGoogle} />
              Login with Gmail
            </button>
            <button className="col-10 col-md-8 btn btn-primary mt-3">
              <FontAwesomeIcon className="me-2" icon={faFacebookF} />
              Login with facebook
            </button>
          </div>
          <div className="col-md-6 p-3">
            <h1>Login to Shopify</h1>
            <form className="shadow-lg p-3" onSubmit={handleLoginSubmit}>
              <input
                style={{ height: "40px" }}
                className="col-md-6 mt-3 p-1"
                type="email"
                name="email"
                onChange={onChangeInput}
                placeholder="Enter email"
              />
              <br />
              <input
                style={{ height: "40px" }}
                className="col-md-6 mt-3 p-1"
                type="password"
                name="password"
                onChange={onChangeInput}
                placeholder="Enter Password"
              />
              <br />
              <button type="submit" className="btn btn-success p-1 mt-3">
                Login
              </button>
              <ToastContainer />
            </form>
            <div className="d-flex justify-content-around mt-3">
              <button onClick={onclickRegister} className="border border-0 p-2">
                Register Now
              </button>

              <button className="border border-0 p-2">Forgot Password</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Login1;
