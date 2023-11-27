import React, { useState } from "react";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MyAcountLeftPortion from "../MyAccountLeftPortion/MyAcountLeftPortion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function CheckModule() {
  // const [addressArr,setAddressArr] = useState()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData,setFormData] = useState({})

  const onChangeInputData = (event) => {
    setFormData({...formData,[event.target.name] : event.target.value})
  }

  // console.log(formData,"Form Data")

  const handleSubmit = (event) => {
    console.log("submit gtriggered")
    event.preventDefault()
    const submittedFormData = {
      email : formData.email,
      textareaValue : formData.textareaValue,
      id:1
    }
    console.log(submittedFormData,"Submitted Form")
    axios.post("http://localhost:3002/myData",{myData: [
      {
        name: '',
        formData: [submittedFormData],
        orders: [{}],
        id: 1,
      },
    ],}).then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log("error",error)
    })
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <NavbarComponent />
        <div className="col-12 d-flex justify-content-center align-items-center m-3">
          <div className="col-9 d-flex flex-column flex-md-row justify-content-center align-items-center border border-dark rounded shadow-lg">
            <div className="col-5 m-1">
              <MyAcountLeftPortion />
            </div>
            <div className="col-5 m-1 border border-dark rounded">
              <div className="col-12 d-flex justify-content-around align-items-center m-1">
                <h4 className="d-inline me-1">Address</h4>
                {/* <button className='btn btn-primary'>Add Address</button> */}
                <Button variant="primary" onClick={handleShow}>
                  Add Address
                </Button>
              </div>
              <hr />
              <div>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add address</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          autoFocus
                          name="email"
                          onChange={onChangeInputData}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Example textarea</Form.Label>
                          
                        <Form.Control onChange={onChangeInputData} name="textareaValue"  as="textarea" rows={3} />
                      </Form.Group>
                      <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  </Modal.Footer>
                    </Form>
                  </Modal.Body>
                  
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CheckModule;
