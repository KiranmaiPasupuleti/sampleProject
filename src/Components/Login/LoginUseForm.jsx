import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import NavbarComponent from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

function LoginUseForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userData, setUserData] = useState();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
// console.log(userData)
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

  const onSubmit = (data) => {
    // console.log(userData,"userData");
    const isUserExist = userData?.some((eachUser) => {
      return (
        eachUser?.email === data?.email &&
        eachUser?.password === data?.password
      );
    });
    // console.log(isUserExist)
    // console.log(data)
    if (isUserExist) {
      localStorage.setItem("email", data.email);
      navigate("/home");
    } else {
      toast("Enter Valid email and password");
    }
  };
  // console.log(errors, "errors");

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
            <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg p-3">
              <input
                style={{ height: "40px" }}
                className="col-md-6 mt-3 p-1"
                type="email"
                {...register("email", {
                  required: "Email is requird*",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, //regex
                    message: "Please enter tha valid Email", //err msg
                  },
                })}
                // {...register("email", { required: "Email is requird * " })}
                placeholder="Enter email"
              />
              {errors.email && (
                <p className="text-danger">{errors.email?.message}</p>
              )}
              <br />
              <input
                style={{ height: "40px" }}
                className="col-md-6 mt-3 p-1"
                type="password"
                name="password"
                placeholder="Enter Password"
                {...register("password", {
                  required: "Password is required * ",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message:
                      "Please enter capital letter,morethan 8 length,sepcial charater reqired",
                  },
                })}
                // {...register("password", { required: "Password is requird * " })}
              />
              <br />
              {errors.password && (
                <p className="text-danger">{errors.password?.message}</p>
              )}
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

export default LoginUseForm;
