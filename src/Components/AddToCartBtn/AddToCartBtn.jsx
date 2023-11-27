import React from 'react'

const AddToCartBtn = (props) => {
    const {id,onAddCart} = props 

    const addToCart = () => {
        onAddCart(id)
    }

  return (
    <div>
        <button className='btn btn-danger' onClick={addToCart}>Add To cart</button>
    </div>
  )
}

export default AddToCartBtn