import React from "react";

const InventoryCard = ({ inventoryCard }) => {
  return (
    <div>
      <div className="w-100">
        <img
          src={`data:image/png;base64,${inventoryCard.image}`}
          alt=""
          className="w-100 mx-auto"
        />
      </div>
    </div>
  );
};

export default InventoryCard;
