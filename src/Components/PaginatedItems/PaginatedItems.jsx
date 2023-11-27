import React,  {useState } from "react";
import ReactPaginate from "react-paginate";
import CustomCardComponent from "../../ResuableComponents/CustomCard/CustomCard";
import StarRating from "../RatingDisplay/RatingDisplay";
import './PaginatedItems.css'

function PaginatedItems(props) {
    const {itemsPerPage,productsData,displayedAllProducts} = props
    // console.log(productsData)
  const [itemOffset, setItemOffset] = useState(0);
  
  const endOffset = itemOffset + itemsPerPage;
  const paginatedItems = productsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productsData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productsData.length;
    setItemOffset(newOffset);
  };

 
 
  function Items() {
    return (
      <div className="col-12 d-flex flex-wrap p-2 p-md-4 justify-content-center">
        {paginatedItems && paginatedItems.map((eachEle) => {
              return (
                  <CustomCardComponent
                  image={eachEle.product_image}
                  id={eachEle.id}
                  key={eachEle.id}
                  title={eachEle.product_name}
                  price={eachEle.product_cost}
                  description={eachEle.product_desc}
                  rating={eachEle.product_rating}
                >
                  <StarRating rating={eachEle.product_rating}/>                  
                </CustomCardComponent>
              );
            })}
      </div>
    );
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Items/>
      {!displayedAllProducts && <div className="d-flex align-items-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        className="d-flex flex-row justify-content-around align-items-center"
        previousLinkClassName="btn btn-danger m-2"
        previousClassName="list-unstyled"
        nextClassName="list-unstyled"
        nextLinkClassName ="btn btn-danger m-2"
        activeClassName="list-unstyled"
        activeLinkClassName ="btn btn-success list-unstyled active"
        pageClassName="custom-style"
        pageLinkClassName="btn btn-outline-success m-2"
      />
      </div>}
    </div>
  );
}
export default PaginatedItems