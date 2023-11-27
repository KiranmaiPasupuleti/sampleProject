import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


function ThankYouPage() {
  return (
    <div style={{height:'100vh'}} className='container d-flex flex-column justify-content-center align-items-center'>
        <div className='shadow-lg p-4'>
        <FontAwesomeIcon className='fs-1 text-success' icon={faCircleCheck} />
        <h1>Thank You</h1>
        <p>You have Subscribed to our Shopify.</p>
        </div>
    </div>
  )
}

export default ThankYouPage