import React, { useState } from "react";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faList, faUser } from "@fortawesome/free-solid-svg-icons";
import Dropzone from "react-dropzone";
import OrderedItemsDisplay from "../OrderedItemsDisplay/OrderedItemsDisplay";
import MyAcountLeftPortion from "../MyAccountLeftPortion/MyAcountLeftPortion";

function AllOrders() {

    const [selectedImage, setSelectedImage] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Update the state with the selected image
        setSelectedImage(reader.result);
        console.log(reader.result.file.path)
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="container-fluid">
      <div className="row">
        <NavbarComponent />
        <div className="p-2 p-md-4">
          <h1 className="col-12 text-start">My Account</h1>
          <hr />
          <div className="col-12 d-flex flex-column flex-md-row justify-content-center align-items-center">
            <MyAcountLeftPortion/>
            <div className="col-12 col-md-7 p-2 p-md-4 text-start m-1 border border-1 border-dark rounded-1">
              <h4>All Orders</h4>
              <hr/>
              <OrderedItemsDisplay />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AllOrders;
