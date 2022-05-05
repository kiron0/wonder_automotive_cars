import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { InputGroup, FormControl } from "react-bootstrap";
import "./InventoryDetails.css";
import Loading from "../../Shared/Loading/Loading";

function InventoryDetails() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isReload, setIsReload] = useState(false);
  useEffect(() => {
    const url = `https://cars-warehouse.herokuapp.com/cars/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id, isReload]);
  if (item === {}) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  const deliveredInventory = (e) => {
    const name = item.name;
    const image = item.image;
    const description = item.description;
    const price = item.price;
    const quantity = parseInt(item.quantity) - 1;
    const email = item.email;
    const supplier = item.supplier;
    const confirm = window.confirm("Are you sure you want to delivered?");
    if (!confirm) {
      return;
    }
    if (quantity === -1) {
      return toast.error("Out of Stock!");
    }

    const card = {
      name,
      image,
      description,
      price,
      quantity,
      supplier,
      email,
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
          toast.success("1 Inventory Delivered Successfully");
          setIsReload(!isReload);
        }
      });
  };

  const handleQuantityUpdate = (e) => {
    e.preventDefault();
    const name = item.name;
    const image = item.image;
    const description = item.description;
    const price = item.price;
    const inputValue = parseInt(e.target.update.value);
    const quantity = inputValue + parseInt(item.quantity);
    const email = item.email;
    const supplier = item.supplier;
    const confirm = window.confirm("Are you sure you want to update?");
    if (!confirm) {
      return;
    }
    if (!inputValue) {
      return toast.error("Please add the product quantity first!");
    }
    // negative input value
    if (inputValue < 0) {
      return toast.error("Please add positive quantity!");
    }
    const card = {
      name,
      image,
      description,
      price,
      quantity,
      supplier,
      email,
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
        toast.success(`${inputValue} Inventory Added Successfully!`);
        setIsReload(!isReload);
      });
    e.target.reset();
  };

  return (
    <div className="updated mx-auto d-block my-4">
      <Card className="border-0">
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.quantity} cars</Card.Text>
          <Card.Text className="fs-4 fw-bold">${item.price}</Card.Text>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text className="fs-6 fw-bold">
            Supplier: {item.supplier}
          </Card.Text>
          <Button variant="primary" onClick={deliveredInventory}>
            Delivered
          </Button>
        </Card.Body>
        <form onSubmit={handleQuantityUpdate}>
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
