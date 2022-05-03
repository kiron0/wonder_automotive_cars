import React from "react";
import useInventory from "../../../../hooks/useInventory";
import InventoryCard from "../InventoryCard/InventoryCard";
import './HomeInventory.css'

const HomeInventory = () => {
  const [inventoryCards] = useInventory();
  return (
    <div>
      <h2 className="text-center" style={{marginBottom: '3rem'}}>Inventory items</h2>
      <span className="inventoryCards-container container">
        {inventoryCards.slice(0, 6).map((inventoryCard) => (
          <InventoryCard
            inventoryCard={inventoryCard}
            key={inventoryCard._id}
          ></InventoryCard>
        ))}
      </span>
    </div>
  );
};

export default HomeInventory;
