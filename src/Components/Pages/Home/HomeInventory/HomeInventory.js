import React from "react";
import { useNavigate } from "react-router-dom";
import useInventory from "../../../../hooks/useInventory";
import Loading from "../../Shared/Loading/Loading";
import InventoryCard from "../InventoryCard/InventoryCard";
import "./HomeInventory.css";

const HomeInventory = () => {
  const navigate = useNavigate();
  const [inventoryCards] = useInventory();
  if (inventoryCards.length === 0) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  return (
    <div style={{ marginBottom: "100px" }}>
      <span className="inventoryCards-container container">
        {inventoryCards.slice(0, 6).map((inventoryCard) => (
          <InventoryCard
            inventoryCard={inventoryCard}
            key={inventoryCard._id}
          ></InventoryCard>
        ))}
      </span>
      <button
        onClick={() => navigate("/add-inventory")}
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
        className="btn btn-danger mx-auto d-block"
      >
        Add More Item
      </button>
    </div>
  );
};

export default HomeInventory;
