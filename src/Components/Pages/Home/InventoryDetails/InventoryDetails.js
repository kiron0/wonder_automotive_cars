import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./InventoryDetails.css";

function InventoryDetails() {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  useEffect(() => {
    fetch(`https://cars-warehouse.herokuapp.com/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [id]);
  return (
    <div>
      <h2>Inventory Details</h2>
      <div className="w-100">
        <img
          src={`data:image/png;base64,${inventory.image}`}
          alt=""
          className="w-100 mx-auto"
        />
      </div>
    </div>
  );
}

export default InventoryDetails;
