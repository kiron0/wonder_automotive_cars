import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";
import useInventoryDetail from "../../../../hooks/useInventoryDetail";
import "./InventoryDetails.css";

function InventoryDetails() {
  const { id } = useParams();
  const [inventoryDetail] = useInventoryDetail(id);
  const { name, quantity, price, image, description, supplier } =
    inventoryDetail;

  return (
    <div className="updated mx-auto d-block my-4">
      <Card className="border-0">
        <Card.Img variant="top" src={`data:image/png;base64,${image}`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{quantity} cars</Card.Text>
          <Card.Text className="fs-4 fw-bold">${price}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Card.Text className="fs-6 fw-bold">Supplier: {supplier}</Card.Text>
          <Button variant="primary">Delivered</Button>
        </Card.Body>
        <InputGroup className="mb-3 input">
          <FormControl
            placeholder="Update Inventory Quantity"
            aria-label="Update Inventory Quantity"
            aria-describedby="basic-addon2"
            type="number"
          />
          <Button variant="primary">Update</Button>
        </InputGroup>
      </Card>
    </div>
  );
}

export default InventoryDetails;
