import React, { useEffect, useState } from 'react'
import CarouselComponent from '../Carousel/Carousel'
import axios from 'axios';
import CustomCardComponent from '../../ResuableComponents/CustomCard/CustomCard';
import StarRating from '../RatingDisplay/RatingDisplay';
import './MainContent.css'


function MainContent() {
  const [fetchedProducts,setFetchedProducts] = useState([])

  useEffect(() => {
    getProducts()
  },[])

  async function getProducts() {
    await axios.get('https://fakestoreapi.com/products?limit=9').then((res) => {
      const nineProducts = res.data
      setFetchedProducts(nineProducts)
    })
  }


  return (
    <div>
      <CarouselComponent/>
      <div className='container p-2'>
        <h2>Popular Products</h2>
        <div className='row d-flex flex-wrap justify-content-center align-items-center'>
        {fetchedProducts.map((eachEle) => {
        //   let starPercentage = (eachEle.rating.rate / 5) * 100;
        //   let starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        //   let widthVal = starPercentageRounded;
        //   const containerWidth = 200;
        // const widthInPixels = (containerWidth * parseInt(starPercentageRounded)) / 100 + 'px';
          // console.log(widthInPixels)
          return <CustomCardComponent image={eachEle.image} id={eachEle.id} key={eachEle.id} title={eachEle.category} price={eachEle.price} description={eachEle.title} >
            {/* <div className='starts-outer'>
              <div className='stars-inner' style={{width:widthInPixels}}>
              
              </div> 
            </div> */}
            <StarRating rating={eachEle.rating.rate} maxRating={5}/>
            </CustomCardComponent>
        })}
        </div>
      </div>
    </div>
  )
}

export default MainContent