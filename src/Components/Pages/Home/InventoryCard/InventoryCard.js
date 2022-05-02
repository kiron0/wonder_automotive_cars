import React from "react";
import { useNavigate } from "react-router-dom";
import './InventoryCard.css';

const InventoryCard = ({ inventoryCard }) => {
  const { _id, image, name, supplier, quantity, description, price } =
    inventoryCard;
    const navigate = useNavigate();
    const navigateToInventoryDetail = id =>{
      navigate(`/inventory/${id}`);
  }
  return (
    <div className="inventory-card">
      <div className="w-100">
        <img
          src={`data:image/png;base64,${image}`}
          alt=""
          className="w-100 mx-auto"
        />
      </div>
      <p>{name}</p>
      <p>{quantity} items</p>
      <h4>${price}</h4>
      <p>Description: {description}</p>
      <h4>Supplier: {supplier}</h4>
      <button className="btn btn-dark" onClick={() => navigateToInventoryDetail(_id)}>Stock Update</button>
    </div>
  );
};

export default InventoryCard;
