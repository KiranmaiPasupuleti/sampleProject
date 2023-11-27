import React from 'react'
import NavbarComponent from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import CartItemDisplay from '../CartItemDisplay/CartItemDisplay'

function Cart() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <NavbarComponent/>
            <div className='col-12 d-flex flex-column flex-md-row justify-content-center' style={{minHeight:'60vh'}}>
                <div className='col-12 col-md-8 m-md-3  p-2 border border-dark rounded text-start'>
                    <h4>My Orders</h4>
                    <table className='col-12'>
                        <tr className='col-12'>
                            <th className='col-2 d-none d-md-table-cell'>Image</th>
                            <th className='col-3'>Name</th>
                            <th className='col-2 d-none d-md-table-cell'>Price</th>
                            <th className='col-2'>Quantity</th>
                            <th className='col-2'>Total</th>
                            <th className='col-1'>Action</th>
                        </tr>
                        <CartItemDisplay/>
                    </table>
                </div>
                <div className='col-12 col-md-3 m-md-3 border border-dark rounded text-start p-5'>
                    <h4>Review Order</h4>
                    <p>Sub total: 70000/-</p>
                    <hr/>
                    <p>GST: 7%</p>
                    <hr/>
                    <p>Order total: 30000/-</p>
                    <button className='btn btn-success col-10'>
                        Proceed to buy
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Cart