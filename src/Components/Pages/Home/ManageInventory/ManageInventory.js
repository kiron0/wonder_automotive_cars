import React from "react";
import "./ManageInventory.css";

function ManageInventory({ inventory }) {
  const { name, image, description, price, quantity, supplier } =
    inventory;
  return (
    <div className="container">
      <h2>{name}</h2>
      <div className="w-100">
        <img
          src={`data:image/png;base64,${image}`}
          alt=""
          className="w-100 mx-auto"
        />
      </div>
    </div>
  );
}

export default ManageInventory;
