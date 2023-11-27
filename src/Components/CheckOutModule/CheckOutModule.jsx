import React, { useState } from "react";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Dropzone from "react-dropzone";
import AddressListDisplay from "../AddressListDisplay/AddressListDisplay";
import axios from "axios";
import MyAcountLeftPortion from "../MyAccountLeftPortion/MyAcountLeftPortion";

function CheckOutModule() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addressList,setAddressList] = useState(
    // {street: "",
    //     city: "",
    //     productLocation: "",
    //     code: "",
    //     country: ""
    //   }
  );
  const handleSubmitData = (e) => {
    e.preventDefault()
    console.log('save changes clicked')
    const addressData = {
      email: "",
      address: {
        street: addressList?.street,
        city: addressList?.city,
        productLocation: addressList?.productLocation,
        code: addressList?.code,
        country: addressList?.country
      },
      "orders": [
        {}
      ],
    }
    // {
    //     street : addressList.street,
    //     city : addressList.city,
    //     productLocation : addressList.productLocation,
    //     code : addressList.code,
    //     country : addressList.country
    // }
    axios.post('http://localhost:3004/order',addressData).then((response) => {
        console.log(response.data,"response")
        setAddressList(response.data)
        // setAddressList((prevAddressList) => response.data);
        console.log(addressList)
    })
    console.log(addressList)
    setShow(false)
  }

  const onChangeInput = (event) => {
    setAddressList({...addressList, [event.target.name] : event.target.value})
  }


  return (
    <div className="container-fluid">
      <div className="row">
        <NavbarComponent />
        <div className="p-2 p-md-4">
          <h1 className="col-12 text-start">My Account</h1>
          <hr />
          <div className="col-12 d-flex flex-column flex-md-row justify-content-center align-items-center">
            {/* <div className="col-5 m-1">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                />
              ) : (
                <FontAwesomeIcon
                  style={{ width: "80px", height: "80px" }}
                  icon={faUser}
                />
              )}
              <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <button>Choose file</button>
                    </div>
                  </section>
                )}
              </Dropzone>
              <div className="d-flex flex-column">
                <button className="btn btn-warning m-1 col-md-3 align-self-center">
                  Upload
                </button>
                <button className="bg-transparent border-0">
                  <FontAwesomeIcon icon={faList} /> Order
                </button>
                <button className="bg-transparent border-0">
                  <FontAwesomeIcon icon={faUser} className="me-1" />
                  Profile
                </button>
                <button className="bg-transparent border-0">
                  <FontAwesomeIcon icon={faAddressCard} /> Address
                </button>
              </div>
            </div> */}
            <MyAcountLeftPortion/>
            <div className="col-7 p-2 p-md-4 text-start m-1 border border-1 border-dark rounded-1">
              <h4 className="d-md-inline me-md-2">Addresses</h4>
              <div>
                <Button variant="primary" onClick={handleShow}>
                  Add Address
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Your Address</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form >
                    <div className="d-flex flex-column">
                    <label htmlFor="street">Street: </label>
                    <input placeholder="Enter street" id="street" type="text" name="street" onChange={onChangeInput} />
                    </div>
                    <div className="d-flex flex-column">
                    <label htmlFor="city">City: </label>
                    <input placeholder="Enter city" id="city" type="text" name="city" onChange={onChangeInput} />
                    </div>
                    <div className="d-flex flex-column">
                    <label htmlFor="productLocation">Location: </label>
                    <input placeholder="Enter Location" id="productLocation" type="text" name="productLocation" onChange={onChangeInput}  />
                    </div>
                    <div className="d-flex flex-column">
                    <label htmlFor="country">Country: </label>
                    <input placeholder="Enter Country" id="country" type="text" name="country" onChange={onChangeInput} />
                    </div>
                    <div className="d-flex flex-column">
                    <label htmlFor="code">Code: </label>
                    <input placeholder="Enter Pincode" id="code" type="number" name="code" onChange={onChangeInput}/>
                    </div>
                    {/* <Modal.Footer> */}
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmitData}>
                      Save Changes
                    </Button>
                  {/* </Modal.Footer> */}
                    </form>
                  </Modal.Body>
                  
                </Modal>
              </div>
              <hr />
              {/* {addressList?.map((eachAddress) => {
                console.log(eachAddress)
                return (<AddressListDisplay country={eachAddress.country} street={eachAddress.street} city={eachAddress.city} productLocation={eachAddress.productLocation} code={eachAddress.code} key={eachAddress.id}/>)
              })} */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CheckOutModule;
