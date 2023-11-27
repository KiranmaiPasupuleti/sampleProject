import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function AddressListDisplay(props) {
  const {street,city,productLocation,country,code} = props

  return (
      <div className="border border-1 border-dark text-dark rounded-2 p-md-2 p-1 m-1 m-md-2">
            <p>
              {street} ,{city}
            </p>
            <p>
              {productLocation} ,{code}
            </p>
            <p>{country}</p>
            <button className="btn btn-secondary m-1">
              <FontAwesomeIcon icon={faEdit} /> Edit
            </button>
            <button className="btn btn-danger m-1">
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
          </div>
  );
}

export default AddressListDisplay;
