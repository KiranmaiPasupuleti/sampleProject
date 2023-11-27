import React from "react";
import MyAcountLeftPortion from "../MyAccountLeftPortion/MyAcountLeftPortion";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Profile = () => {
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
            <p>
              <b>FirstName</b>: {"firstname"}
            </p>
            <p>
              <b>LastName</b>: {"lastname"}
            </p>
            <p>
              <b>Email</b> : {"email"}
            </p>
            <p>
              <b>Gender</b>: {"gender"}
            </p>
            <p>
              <b>Mobile</b>: {"mobileNum"}
            </p>
            <button className="btn btn-secondary">Edit Profile</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
