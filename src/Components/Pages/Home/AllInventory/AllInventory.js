import React, { useEffect, useState } from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import ManageInventory from "../ManageInventory/ManageInventory";
import "./AllInventory.css";

const AllInventory = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("https://cars-warehouse.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return (
    <div className="inventories-container">
      <PageTitle title="Manage Items"></PageTitle>
      <h2 style={{ margin: "50px 0" }}>Our Inventory: {inventories.length}</h2>
      <div className="inventories">
        {inventories.map((inventory) => (
          <ManageInventory
            key={inventory._id}
            inventory={inventory}
          ></ManageInventory>
        ))}
      </div>
    </div>
  );
};

export default AllInventory;
