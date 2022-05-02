import React from "react";
import { useParams } from "react-router-dom";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import useInventoryDetail from "../../../../hooks/useInventoryDetail";
import "./InventoryDetails.css";

function InventoryDetails() {
  const { id } = useParams();
  const [inventoryDetail] = useInventoryDetail(id);
  const { name, quantity, price, description, supplier } = inventoryDetail;
  return (
    <div className="mx-auto d-block w-50 text-start updated">
      <div className="w-50 mx-auto d-block my-2">
        <img
          src={`data:image/png;base64,${inventoryDetail.image}`}
          alt=""
          className="w-100"
        />
      </div>
      <p>{name}</p>
      <p>{quantity} cars</p>
      <h4>${price}</h4>
      <p>Description: {description}</p>
      <h4>Supplier: {supplier}</h4>
      <button className="btn btn-dark">Delivered</button>
      <br /><br />
      <InputGroup className="mb-3 w-100">
        <FormControl
          placeholder="Update Inventory Quantity"
          aria-label="Update Inventory Quantity"
          aria-describedby="basic-addon2"
          type="number"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Update
        </Button>
      </InputGroup>
    </div>
  );
}

export default InventoryDetails;
