import React from "react";
import { Card, Button } from "react-bootstrap";
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
      <Card className="border-0">
        <Card.Img variant="top" src={`data:image/png;base64,${image}`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{quantity} cars</Card.Text>
          <Card.Text className="fs-4 fw-bold">${price}</Card.Text>
          <Card.Text>
            {description.slice(0, 100)}
            {description.length > 100 && (
              <span title={`${description}`}>...read more</span>
            )}
          </Card.Text>
          <Card.Text className="fs-6 fw-bold">Supplier: {supplier}</Card.Text>
          <Button
            variant="primary"
            onClick={() => navigateToInventoryDetail(_id)}
          >
            Stock Update
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InventoryCard;
