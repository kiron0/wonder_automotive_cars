import React from "react";
import trash from "../../Assets/logo/trash-2.png";
import edit from "../../Assets/logo/edit.png";
import "./UserInventory.css";

function UserInventory({ myInventory, handleDelete }) {
  const { _id, image, name, supplier, description, price } = myInventory;
  return (
    <div className="inventory-card">
      <img src={image} alt="" />
      <div className="info">
        <h3>${price}</h3>
        <h4>{name}</h4>
        <p>
          {description?.slice(0, 80)}
          {description?.length > 100 && (
            <span title={`${description}`}>...read more</span>
          )}
        </p>
        <p>Supplier: {supplier}</p>
        <button className="del-btn" onClick={() => handleDelete(_id)}>
          <img
            src={trash}
            alt="delete"
            style={{ width: "26px", position: "relative" }}
          />
        </button>
        <button className="edit-btn">
          <img
            src={edit}
            alt="update"
            style={{ width: "26px", position: "relative" }}
          />
        </button>
      </div>
    </div>
  );
}

export default UserInventory;
