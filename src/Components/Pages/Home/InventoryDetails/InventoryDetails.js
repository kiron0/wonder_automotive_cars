import React from "react";
import { useParams } from "react-router-dom";
import useInventoryDetail from "../../../../hooks/useInventoryDetail";
import "./InventoryDetails.css";

function InventoryDetails() {
  const { id } = useParams();
  const [inventoryDetail] = useInventoryDetail(id);
  console.log(inventoryDetail);
  return (
    <div>
      <h2>Inventory Details by ID</h2>
      <p>{inventoryDetail.name}</p>
      <div className="w-50">
        <img
          src={`data:image/png;base64,${inventoryDetail.image}`}
          alt=""
          className="w-100 mx-auto"
        />
      </div>
    </div>
  );
}

export default InventoryDetails;
