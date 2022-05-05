import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { InputGroup, FormControl } from "react-bootstrap";
import useInventoryDetail from "../../../../hooks/useInventoryDetail";
import "./InventoryDetails.css";
import Loading from "../../Shared/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../Firebase/Firebase.init";

function InventoryDetails() {
  const [user] = useAuthState(auth);
  const [email] = useState(user?.email);
  const { id } = useParams();
  const [inventoryDetail] = useInventoryDetail(id);
  const { name, quantity, price, image, description, supplier } =
    inventoryDetail;
  if (inventoryDetail === {}) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  const deliveredInventory = () => {
    const inventoryName = name;
    const inventoryQuantity = parseInt(quantity) - 1;
    const inventoryPrice = price;
    const inventoryImage = image;
    const inventoryDescription = description;
    const inventorySupplier = supplier;
    const inventoryEmail = email;
    const confirm = window.confirm("Are you sure you want to delivered");
    if (!confirm) {
      return;
    }
    if (quantity == -1) {
      return toast.error("Out of stock", {
        position: "top-center",
        autoClose: 3000,
      });
    }

    const card = {
      inventoryName,
      inventoryQuantity,
      inventoryPrice,
      inventoryImage,
      inventoryDescription,
      inventorySupplier,
      inventoryEmail,
    };
    fetch(`https://cars-warehouse.herokuapp.com/cars/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(card),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Product Delivered successfully!", {
            duration: 4000,
            position: "top-center",
          });
          const inventory = inventoryDetail.filter((i) => i._id !== id);
          inventoryDetail(inventory);
        }
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const inventoryName = name;
    const inputValue = parseInt(e.target.update.value);
    const inventoryQuantity = inputValue + parseInt(quantity);
    const inventoryPrice = price;
    const inventoryImage = image;
    const inventoryDescription = description;
    const inventorySupplier = supplier;
    const inventoryEmail = email;
    if (!inputValue) {
      return toast.error("Please enter a valid number", {
        position: "top-center",
        autoClose: 3000,
      });
    }
    const card = {
      inventoryName,
      inventoryQuantity,
      inventoryPrice,
      inventoryImage,
      inventoryDescription,
      inventorySupplier,
      inventoryEmail,
    };
    fetch(`https://cars-warehouse.herokuapp.com/cars/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(card),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(`${inputValue} product added successfully`);
        const inventory = inventoryDetail.filter((i) => i._id !== id);
        inventoryDetail(inventory);
      });
    e.target.reset();
  };

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
          <Button variant="primary" onClick={deliveredInventory}>
            Delivered
          </Button>
        </Card.Body>
        <form onSubmit={handleUpdate}>
          <InputGroup className="mb-3 input">
            <FormControl
              name="update"
              placeholder="Update Inventory Quantity"
              aria-label="Update Inventory Quantity"
              aria-describedby="basic-addon2"
              type="number"
            />
            <Button variant="primary" type="submit">
              Update
            </Button>
          </InputGroup>
        </form>
      </Card>
    </div>
  );
}

export default InventoryDetails;
