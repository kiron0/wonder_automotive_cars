import React from "react";
import { useNavigate } from "react-router-dom";
import "./InventoryCard.css";

const InventoryCard = ({ inventoryCard }) => {
  const { _id, image, name, supplier, quantity, description, price } =
    inventoryCard;
  const navigate = useNavigate();
  const navigateToInventoryDetail = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <div className="inventory-card">
      <img src={`data:image/png;base64,${image}`} alt="" />
      <div className="info">
        <h3>${price}</h3>
        <h4>{name}</h4>
        <p>{quantity} cars</p>
        <p>
          {description.slice(0, 80)}
          {description.length > 100 && (
            <span title={`${description}`}>...read more</span>
          )}
        </p>
        <p>Supplier: {supplier}</p>
        <button onClick={() => navigateToInventoryDetail(_id)}>
          Stock Update
        </button>
      </div>
    </div>
  );
};

export default InventoryCard;
