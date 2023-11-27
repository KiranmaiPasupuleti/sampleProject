import React from "react";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const InvoicePdf = () => {
    const data = [{
        id: 1,
        imageUrl : "https://m.media-amazon.com/images/I/51dKbFb93SL._SX522_.jpg",
        name: "Raymond Wooden Sofa - Teak Finish",
        quantity : 3,
        price: 2000,
    }]
  return (
    <div className="container-fluid">
      <div className="row">
        <NavbarComponent />
        <div>
          <button className="btn btn-success">Click to PDF &#x2193;</button>
        </div>
        <div
          style={{ minHeight: "45vh" }}
          className="col-12 d-flex justify-content-center my-3"
        >
          <div className="col-9 border border-dark p-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column align-items-start">
                <h5>
                  Shop<span className="text-danger">ify</span>
                </h5>
                <img
                  className="col-2"
                  src="https://media.istockphoto.com/id/1132817705/photo/paint-splatter-thank-you.jpg?s=612x612&w=0&k=20&c=Yt8LgLuBfQTRqirHrlLk1iXaihXVw2AGPOvHGlfG8w0="
                  alt="thankImg"
                />
              </div>
              <div>
                <h5>Order No : 234575</h5>
              </div>
            </div>
            <hr />

            <div style={{textAlign:'start'}}  className="col-12 d-flex flex-column flex-md-row lh-1">
                <div className="col-12 col-md-10">
                    <div  className="text-secondary">
                        <p><b>FROM TO</b></p>
                        <p className="text-dark"><b>Dolye,Khulman and zboncak</b></p>
                        <p>elibart@gmail.com</p>
                        <p>8888889978</p>
                    </div>
                    <div  className="text-dark fw-bold">
                        <p className="text-secondary">
                        <b>BILL TO</b>
                        </p>
                        <p>john@gmail.com</p> 
                        <p>cscc,544433</p>
                        <p>India</p>
                    </div>

                </div>
                <div className="col-md-2 col-12 fw-bold">
                    <div>
                        <p className="text-secondary">STATUS: </p>
                        <p className="text-success">Paid</p>
                    </div>
                    <div>
                        <p className="text-secondary">Date: </p>
                        <p>23-03-2022</p>
                    </div>
                    <div>
                        <p className="text-secondary">Due Date: </p>
                        <p>24-03-2022</p>
                    </div>
                    <div>
                    <p className="text-secondary">Amount: </p>
<p>200000</p>
                    </div>
                </div>
        </div> 
        {
                data && 
                <table>
                    <tr>
                        <th className='col-1  d-none d-sm-table-cell'>sl.No:</th>
                        <th className='col-2  d-none d-sm-table-cell'>Image</th>
                        <th className='col-5'>Name</th>
                        <th className='col-1'>Quantity</th>
                        <th className='3'>Price</th>
                    </tr>
                    {data.map((eachData) => {
                        return (
                            <tr>
                                <td className='col-1  d-none d-sm-table-cell'>{eachData.id}</td>
                                <td className='col-2  d-none d-sm-table-cell'>
                                    <img src={eachData.imageUrl} className='col-11 img-fluid' alt='imgUrl' />
                                </td>
                                <td className='col-5'>{eachData.name}</td>
                                <td className='col-1'>{eachData.quantity}</td>
                                <td className='col-3'>{eachData.price}</td>
                            </tr>
                        )
                    })}
                </table>
                }
        <div style={{textAlign:'start'}} className="lh-1 my-2">
            <p className="fw-bold">Payment Terms: </p>
            <p>Please pay the amount within 30 days</p>
        </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default InvoicePdf;