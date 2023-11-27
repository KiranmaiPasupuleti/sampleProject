import React, { useEffect, useState } from "react";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebook,
//   faSquareTwitter,
//   faSquareWhatsapp,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import StarRating from "../RatingDisplay/RatingDisplay";
import ReactImageMagnify from "react-image-magnify";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";

function ProductDetail() {
  const { id } = useParams();
  const [showDescription, setShowDescription] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [singleProduct, setSingleProduct] = useState();
  const [mainImage, setMainImage] = useState(singleProduct?.product_image);

  useEffect(() => {
    getProductsData();
  }, []);

  async function getProductsData() {
    let url = `https://products-8dk6.onrender.com/products/${id}`;
    await axios.get(url).then((response) => {
      setSingleProduct(response.data);
      setMainImage(response.data.product_image);
      // console.log(response.data);
    });
  }
  // console.log(singleProduct, "singleProductr details");

  const onClickDescription = () => {
    setShowDescription(!showDescription);
  };
  const onClickFeatures = () => {
    setShowFeatures(!showFeatures);
  };

  const handleImage = (imageUrl) => {
    setMainImage(imageUrl)
    console.log(imageUrl)
  }

  const onClickAddToCart = (id) => {
    console.log("added To Cart" , id)
  }

  return (
    <div className="contaivscode-file://vscode-app/c:/Users/Hp/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlner-fluid">
      <div className="row">
        <NavbarComponent />
        <div
          style={{ minHeight: "40vh" }}
          className="d-flex flex-column flex-md-row justify-content-center"
        >
          <div className="col-12 col-md-9 mb-5 bg-light text-dark d-flex flex-column flex-md-row">
            <div className="col-12 col-md-5 p-2">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    // src: singleProduct?.product_image,
                    src:  mainImage || singleProduct?.product_image,

                  },
                  largeImage: {
                    // src: {mainImage},
                    src:  mainImage || singleProduct?.product_image,

                    // src: singleProduct?.product_image,
                    width: 1200,
                    height: 1800,
                  },
                }}
              />
              <div className="mt-2">
                <img
                  className="col-3 m-md-2"
                  style={{ height: "auto" }}
                  alt="productimg"
                  onClick={() => handleImage(singleProduct?.subimages[0])}
                  src={singleProduct?.subimages[0]}
                  // src={mainImage}
                />
                <img
                  className="col-3 m-md-2"
                  alt="productimg"
                  style={{ height: "auto" }}
                  onClick={() => handleImage(singleProduct?.subimages[1])}
                  src={singleProduct?.subimages[1]}
                />
                <img
                  className="col-3 m-md-2"
                  alt="productimg"
                  style={{ height: "auto" }}
                  onClick={() => handleImage(singleProduct?.subimages[2])}
                  src={singleProduct?.subimages[2]}
                />
              </div>
              <div className="m-1">
                <button
                  onClick={onClickDescription}
                  className="border border-0 me-1"
                >
                  Description
                </button>
                <button onClick={onClickFeatures} className="border border-0">
                  Features
                </button>
              </div>
              <div>
                {showDescription && (
                  <p className="text-white">{singleProduct.product_desc}</p>
                )}
                {showFeatures && (
                  <p className="text-white">
                    {singleProduct.product_dimension}
                  </p>
                )}
              </div>
            </div>
            <div className="col-12 col-md-7 text-start p-3 p-sm-3 p-md-4">
              <h4 className="col-12">{singleProduct?.product_name}</h4>
              <div className="d-flex justify-content-start">
                <div>
                  {" "}
                  {singleProduct?.product_rating !== undefined &&
                    singleProduct?.product_rating !== "" && (
                      <StarRating
                        rating={Number(singleProduct?.product_rating)}
                      />
                    )}
                </div>
                {/* <StarRating rating={singleProduct?.product_rating} /> */}
              </div>
              <p>{singleProduct?.product_rating}</p>
              <hr />
              <p>
                Price:{" "}
                <span className="text-warning fw-bold">
                  &#8377;{singleProduct?.product_cost}
                </span>
              </p>
              <div className="d-flex flex-wrap align-items-center">
                <p className="d-inline me-1">Color: </p>
                <p
                  className="d-inline-block me-1"
                  style={{
                    height: "15px",
                    width: "15px",
                    backgroundColor: "blue",
                  }}
                >
                  {" "}
                </p>
                <p>Blue</p>
              </div>{" "}
              <div className="d-flex">
                <AddToCartBtn onAddCart={onClickAddToCart} id={singleProduct?.id}/>
                <button className="btn btn-info mx-1">Rate Product</button>
              </div>
              <div>
                <p>Share:</p>
                <div>
                  <a
                    href="https://web.whatsapp.com/send?phone=919884318888"
                    target="_blank"
                  >
                    <WhatsappIcon className="mx-1" size={40} round={true} />
                  </a>
                  <a href="https://www.facebook.com" target="_blank">
                    <FacebookIcon className="mx-1" size={40} round={true} />
                  </a>
                  <a href="https://twitter.com/" target="_blank">
                    <TwitterIcon className="mx-1" size={40} round={true} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ProductDetail;
