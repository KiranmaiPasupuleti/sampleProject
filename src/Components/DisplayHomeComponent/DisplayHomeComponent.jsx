import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faIndianRupeeSign,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useState } from "react";
import axios from "axios";
import PaginatedItems from "../PaginatedItems/PaginatedItems";
import { useNavigate } from "react-router-dom";

function DisplayHomeComponent() {
  const [productsData, setProductsData] = useState([]);
  const [searchInputVal, setSearchInputVal] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedColor, setSelectedColor] = useState();

  const [categories, setCategories] = useState([]);
  const [colorsList, setColorsList] = useState([]);

  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [displayedAllProducts, setDisplayedAllProducts] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()

  const getFilteredSearchData = (value) => {
    const searchFiltr = [...productsData];
    const filteredData = searchFiltr.filter((eachElement) => {
      return eachElement.product_name
        .toLowerCase()
        .includes(value.toLowerCase());
    });
    console.log(productsData, "onSearch");
    setProductsData(filteredData);
  };

  const onChangeSearch = (event) => {
    setSearchInputVal(event.target.value);
    getFilteredSearchData(event.target.value);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  async function getProductsData() {
    if (localStorage.getItem('email') !== undefined) {
    let url = "https://products-8dk6.onrender.com/products";
    await axios.get(url).then((response) => {
      setProductsData(response.data);
      // console.log(productsData)
      getCategoriesData(response.data);
    });
    setLoading(false);}
    else{
      navigate('/')    
    }
  }
  const filterProductsByCategory = (selectedOption) => {
    const sortbyCategory = [...productsData]
    const filteredCategoryData = sortbyCategory.filter((each) => each.category_id.$oid === selectedOption)
    setProductsData(filteredCategoryData)
    console.log(filteredCategoryData)
  }

  const filterProductsByColor = (selectedColor) => {
    const sortByColor = [...productsData]
    const filteredColorData = sortByColor.filter((each) => each.color_id.$oid === selectedColor)
    setProductsData(filteredColorData)
    console.log(filteredColorData)
  }

  // const filteredCatColData = () => {
  //   console.log(selectedColor,selectedCategory)
  //   const allData = [...productsData]
  //   const filterData = allData.filter((each) => console.log((each.color_id.$oid === selectedColor) && (each.category_id.$oid === selectedCategory)))
  //   setProductsData(filterData)
  //   console.log("multiple Filters",filterData)
  // }

  const sortByRating = () => {
    const sortingProductsData = [...productsData];
    sortingProductsData.sort((a, b) => b.product_rating - a.product_rating);
    setProductsData(sortingProductsData);
    console.log(sortingProductsData, "sorted productsData");
  };

  const onClickHighPriceFirst = () => {
    const highPriceSortData = [...productsData];
    const highPriceFirst = highPriceSortData.sort(
      (a, b) => b.product_cost - a.product_cost
    );
    setProductsData(highPriceFirst);
    console.log(highPriceFirst);
  };

  const onClickLowPriceFirst = () => {
    const lowPriceSortData = [...productsData];
    const lowPriceFirst = lowPriceSortData.sort(
      (a, b) => a.product_cost - b.product_cost
    );
    setProductsData(lowPriceFirst);
    console.log(lowPriceFirst);
  };

  const onClickAllProducts = () => {
    setItemsPerPage(productsData.length);
    setDisplayedAllProducts(true);
  };

  function getCategoriesData(productsData) {
    productsData.map(
      (each) => {categories.push(each.category_id.$oid);
        colorsList.push(each.color_id.$oid)
      // console.log(each.color_id.$oid)
      },
    );
  }
  const uniqueCategories = new Set(categories);
  // console.log(uniqueCategories)
  const selectOptions = Array.from(uniqueCategories).map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  const uniqueColors = new Set(colorsList);
  // console.log(uniqueColors)
  const selectOptionsColor = Array.from(uniqueColors).map((color) => (
    <option key={color} value={color}>
      {color}
    </option>
  ));

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
    filterProductsByCategory(event.target.value)
    // filteredCatColData()
    // console.log(`Selected category: ${event.target.value}`);
  };

  const handleSelectChangeColor = (event) => {
    setSelectedColor(event.target.value);
    filterProductsByColor(event.target.value)
    // filteredCatColData()
    // console.log(`Selected category: ${event.target.value}`);
  };

  return (
    <div className="col-12 p-0 d-flex flex-column flex-md-row">
      <div className="col-12 col-md-2 d-flex flex-column ">
        <button onClick={onClickAllProducts} className="border border-0 m-2">
          All Products
        </button>
        <select className="m-2 p-1" id="categorySelect" onChange={handleSelectChange}>
          <option value="">Categories</option>
          {selectOptions}
        </select>
        <select className="m-2 p-1" id="categorySelect" onChange={handleSelectChangeColor}>
          <option value="">Colors</option>
          {selectOptionsColor}
        </select>
        {/* <button className="border border-0 m-2">Colours</button> */}
      </div>
      <div className="col-12 col-md-9">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-center justify-content-md-end align-items-center">
            <h3 className="d-inline">Sort By: </h3>
            <FontAwesomeIcon
              className="me-2 ms-2 text-primary"
              style={{ cursor: "pointer" }}
              icon={faStar}
              onClick={sortByRating}
            />
            <div onClick={onClickHighPriceFirst} className="me-2 ms-2">
              <FontAwesomeIcon
                className="me-1 text-primary"
                icon={faIndianRupeeSign}
              />
              <FontAwesomeIcon className="text-primary" icon={faArrowUp} />
            </div>
            <div onClick={onClickLowPriceFirst} className="me-2 ms-2">
              <FontAwesomeIcon
                className="me-1 text-primary"
                icon={faIndianRupeeSign}
              />
              <FontAwesomeIcon className="text-primary" icon={faArrowDown} />
            </div>
          </div>
        </div>
        <input
          className="col-12"
          type="search"
          placeholder="Search products here"
          name="searchVal"
          value={searchInputVal}
          onChange={onChangeSearch}
        />

        {!loading ? (
          <div className="col-12 d-flex flex-wrap p-2 p-md-4 justify-content-center">
            <div className="col-12 d-flex justify-content-center">
              <PaginatedItems
                searchInputVal={searchInputVal}
                itemsPerPage={itemsPerPage}
                displayedAllProducts={displayedAllProducts}
                productsData={productsData}
              />
            </div>
          </div>
        ) : (
          <img
            src="https://www.elegantthemes.com/blog/wp-content/uploads/2022/01/lazy-loading.png"
            alt="data fetching"
          />
        )}
      </div>
    </div>
  );
}

export default DisplayHomeComponent;
