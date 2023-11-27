import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './CartItemDisplay.css'

function CartItemDisplay() {
  return (
    <tr className="col-12 mb-2">
      <td className="col-2  d-none d-md-table-cell">
        <img
          className="col-10 p-3"
          alt="cartimg"
          src="https://mysleepyhead.com/media/catalog/product/4/t/4thaug_2nnd_half1004_pink_1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=375&width=840&auto=webp&format=pjpg"
        />
      </td>
      <td className="col-3">Raymond sofa -take finish</td>
      <td className="col-2 d-none d-md-table-cell">10,000/-</td>
      <td>
        <button className="btn btn-secondary">-</button>
        <p className="d-inline me-1 ms-1">0</p>
        <button className="btn btn-secondary">+</button>
      </td>
      <td className="col-2">12,000/-</td>
      <td className="col-1">
        <button className="btn btn-danger">
          <FontAwesomeIcon icon={faTrash} />
        </button>{" "}
      </td>
    </tr>
  );
}

export default CartItemDisplay;
