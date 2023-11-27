import React from 'react'
import NavbarComponent from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Order.css'

const Order = () => {
    const data = [{
        id: 1,
        imageUrl : "https://m.media-amazon.com/images/I/51dKbFb93SL._SX522_.jpg",
        name: "Raymond Wooden Sofa - Teak Finish",
        quantity : 3,
        price: 2000,
    },
    {
        id: 2,
        imageUrl : "https://m.media-amazon.com/images/I/61HcqU1ZFFL._SX522_.jpg",
        name: "Dimora Queen Size Bed With Storage In Frosty ",
        quantity : 4,
        price: 8000,
    }]
    
  return (
    <div className="container-fluid">
      <div className="row">
        <NavbarComponent />
        <div
          style={{ minHeight: "45vh" }}
          className="col-12 d-flex justify-content-center my-3"
        >
            <div className='col-12 col-sm-11 col-md-9 d-flex flex-column justify-content-start align-items-start'>
                <p className='text-danger'>Date : <span className='text-dark'>23-05-2023</span></p>
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
            </div>

          
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Order