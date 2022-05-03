import React from "react";
import useInventory from "../../../../hooks/useInventory";
import Loading from "../../Shared/Loading/Loading";
import InventoryCard from "../InventoryCard/InventoryCard";
import "./HomeInventory.css";

const HomeInventory = () => {
  const [inventoryCards] = useInventory();
  if (inventoryCards.length === 0) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  return (
    <div>
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
