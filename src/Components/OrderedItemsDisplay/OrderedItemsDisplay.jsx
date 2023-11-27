import React from 'react'

function OrderedItemsDisplay() {
  return (
    <div className='border border-1 border-dark rounded-2 p-md-2 p-1'>
        <p className='text-success fw-bold'>Order No: <span className='text-dark'>4356745</span></p>
        <p className='text-danger fw-bold'>Date: <span className='text-dark'>02-11-2023</span></p>
        <div className='col-12'>
            <img className='col-3 m-1' src="https://m.media-amazon.com/images/I/51dKbFb93SL._SX522_.jpg" alt='imgEle' />
            <img className='col-3 m-1' src="https://m.media-amazon.com/images/I/51dKbFb93SL._SX522_.jpg" alt='imgEle' />

        </div>
        <button className='btn btn-danger text-light m-2'>Invoice PDF</button>
    </div>
  )
}

export default OrderedItemsDisplay