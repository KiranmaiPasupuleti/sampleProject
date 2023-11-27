import React, { useState } from "react";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function RegisterFormHook() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm();

  let password = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:3002/registeredData", data)
      .then((response) => {
        console.log(response.data);
        navigate('/')
        // toast(`You have registered Successfully`)
      }).catch((error) => {
        // Handle errors
        console.error('Error submitting form:', error);
      });
  };

  const onclickLogin = () => {
    navigate("/");
  };

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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="d-flex flex-wrap"
            >
              <div className="col-12 col-md-6 mt-3">
                <label
                  className="col-10 col-md-9 text-start"
                  htmlFor="firstname"
                >
                  FirstName:{" "}
                </label>
                <br />
                <input
                  className="col-10 col-md-9 p-1 border border-1 border-dark rounded-1 text-start"
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter Firstname"
                  {...register("firstName", {
                    required: "First name is required",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Please enter a valid first name",
                    },
                  })}
                />
                <p className="text-danger">{errors.firstName?.message}</p>
              </div>
              <div className="col-12 col-md-6 mt-3">
                <label
                  className="col-10 col-md-9 text-start"
                  htmlFor="lastName"
                >
                  LastName:{" "}
                </label>
                <br />
                <input
                  className="col-10 col-md-9 p-1 border border-1 border-dark rounded-1 text-start"
                  type="text"
                  id="lastName"
                  placeholder="Enter LastName"
                  {...register("lastName", {
                    required: "Last name is required",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Please enter a valid Last name",
                    },
                  })}
                />
                <p className="text-danger">{errors.lastName?.message}</p>
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
                  {...register("email", {
                    required: "Email is requird * ",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, //regex
                      message: "Please enter tha valid Email", //err msg
                    },
                  })}
                />
                <p className="text-danger">{errors.email?.message}</p>
              </div>
              <div className="col-12 col-md-6 mt-3">
                <label
                  className="col-10 col-md-9 text-start"
                  htmlFor="mobileNo"
                >
                  Mobile:{" "}
                </label>
                <br />
                <input
                  className="col-10 col-md-9 p-1 border border-1 border-dark rounded-1 text-start"
                  type="tel"
                  name="mobileNo"
                  id="mobileNo"
                  placeholder="Enter Mobile No."
                  {...register("mobileNo", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^[0-9]{10}$/, // Modify the regex as per your phone number format
                      message: "Please enter a valid Mobile number",
                    },
                  })}
                />
                <p className="text-danger">{errors.mobileNo?.message}</p>
              </div>
              <div className="col-12 col-md-6 mt-3">
                <label
                  className="col-10 col-md-9 text-start"
                  htmlFor="password"
                >
                  Password:{" "}
                </label>
                <br />
                <input
                  className="col-10 col-md-9 p-1 border border-1 border-dark rounded-1 text-start"
                  type="password"
                  name="password"
                  id="password"
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
                />
                <p className="text-danger">{errors.password?.message}</p>
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
                  id="confirmPassword"
                  placeholder="Enter Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                      message:
                        "Please enter capital letter,morethan 8 length,sepcial charater reqired",
                    },
                  })}
                />
                <p className="text-danger">{errors.confirmPassword?.message}</p>
              </div>
              <div className="col-12 m-3">
                <label className="text-start">Gender</label>
                <div className="col-12 d-flex justify-content-between">
                  <div className="col-6">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      {...register("gender", {
                        required: "Please select a gender",
                      })}
                      value="male"
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="col-6">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      {...register("gender", {
                        required: "Please select a gender",
                      })}
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
                <p className="text-danger">{errors.gender?.message}</p>
                {/* <p id="genderErrMsg"></p> */}
              </div>
              <div className="col-12 d-flex justify-content-around m-3">
                <button
                  type="submit"
                  className="col-5 col-md-2 btn btn-success p-md-1 text-light"
                >
                  Register
                </button>
                <button
                  onClick={onclickLogin}
                  className="col-5 col-md-2 btn btn-warning p-md-1 text-dark"
                >
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

export default RegisterFormHook;
