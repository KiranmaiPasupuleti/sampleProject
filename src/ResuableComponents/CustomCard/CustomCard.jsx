// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";
import AddToCartBtn from "../../Components/AddToCartBtn/AddToCartBtn";

function CustomCardComponent(props) {
  const { image, title, children, price,id} = props;

  const onClickAddToCart = () => {
    console.log(`added item from home page is ${id}`)
  }
 
  return (
      <div className="col-11 col-md-5 border border-1 border-dark rounded-2 m-2 m-md-3 p-2 p-md-3">
          <img src={image} alt={'image1'} style={{height:'170px'}} className="col-12" />
          <Link to={`/productDetails/${id}`} style={{height:'45px',overflow:'hidden'}} className="fw-bold text-primary"><span>{title}</span></Link>
          {/* <p style={{height:'55px',overflow:'hidden'}}>{description}</p> */}
          <p className="fw-bold">Rs.{price}</p>
          {/* <button className="btn btn-danger rounded-1">Add To Cart</button> */}
          <AddToCartBtn id={id} onAddCart={onClickAddToCart}/>
          {/* <p>{rating}</p> */}
          {children}
      </div>
  );
}

export default CustomCardComponent;


// <div className="m-1 m-md-1 p-2 col-12 col-md-4 col-lg-3">
//       <Card className="p-3">
//         <div className="text-center">
//           <Card.Img
//             variant="top"
//             src={image}
//             style={{ width: "150px" }}
//             height={"170px"}
//           />
//         </div>{" "}
//         <Card.Body>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text className="text-primary">
//             <p style={{ height: "50px" }}>{description}</p> <br />
//             <p className="fw-bold text-dark">Rs.{price}</p>
//           </Card.Text>
//           <Button variant="danger">Add To cart</Button>
//           {children}
//         </Card.Body>
//       </Card>
//     </div>