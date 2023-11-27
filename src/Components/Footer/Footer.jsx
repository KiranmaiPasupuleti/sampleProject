import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()

    const onClickTermsAndConditions = () => {
        console.log('terms clicked')
        window.open('https://react-pdf.org/','_blank')
        // window.location.href = 'https://react-pdf.org/'
    }
    const onClickLocateUs = () => {
        const latitude = 14.094709
        const longitude = 74.485015
        const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        window.open(mapUrl, '_blank');
    }
    const onClickSubscribe = () => {
        navigate('/thankyou')
    }

  return (
    <div className='container-fluid p-0 m-0'>
        <div className='row bg-dark m-0 text-light d-flex flex-column flex-md-row min-vh-35'>
        <div className='col-12 col-md-4 col-lg-4 text-start'>
            <h4>About Company</h4>
            <p>
            Shopify is here at your quick and easy service for shopping<br/>
            Contact Information<br/>
            <a style={{textDecoration:'none'}} className='text-white' href="mailto:contact@Shopify.com">Email: contact@Shopify.com</a><br/>
            <a style={{textDecoration:'none'}} className='text-white' href="tel:+919884318888">Phone: +91 9884318888</a><br/>
            Mumbai,India
            </p>
        </div>
        <div className='col-12 col-md-4 col-lg-4 text-start'>
            <h4>Information</h4>
            <div>
            <a href='#terms&conditions' style={{cursor:'pointer',textDecoration:'none',color:'white'}} onClick={onClickTermsAndConditions}>Terms and Conditions</a><br/>
            Gaurantee and return policy<br/>
            Contact us<br/>
            Privacy Policy<br/>
            <a href='#locateus' style={{cursor:'pointer',textDecoration:'none',color:'white'}} onClick={onClickLocateUs}>Locate Us</a>
            </div>
        </div>
        <div className='col-12 col-md-4 col-lg-4 text-start'>
            <h4>News Letter</h4>
            <p>Signup to get exclusive offer from our favourite brands and to be sale up in the news</p>
            <input type='email' placeholder='Your Email...' className='p-1 d-block'/>
            <button onClick={onClickSubscribe} className='border boirder-0 rounded p-1 mt-2'>Subscribe</button>
        </div>
        <div className='col-12 text-center'>
            <hr/>
    <p>2023 Shopify | All rights reserved | Terms Of Service | Privacy</p>
        </div>
    </div>
    </div>
  )
}

export default Footer