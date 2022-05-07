import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { InputGroup, FormControl } from "react-bootstrap";
import "./InventoryDetails.css";
import Loading from "../../Shared/Loading/Loading";
import { BiLeftArrowAlt } from "react-icons/bi";

function InventoryDetails() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [isReload, setIsReload] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const url = `https://cars-warehouse.herokuapp.com/cars/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id, isReload]);
  if (!item.image) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  const deliveredInventory = () => {
    const name = item.name;
    const image = item.image;
    const description = item.description;
    const price = item.price;
    const quantity = parseInt(item.quantity) - 1;
    const email = item.email;
    const supplier = item.supplier;

    if (quantity === -1) {
      return toast.error("Out of Stock!");
    }
    // confirm dialog when user click on delivered button
    Swal.fire({
      text: "Are you sure you want to delivered?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delivered!",
    }).then((result) => {
      if (result.value) {
        // if user click on delivered button
        const url = `https://cars-warehouse.herokuapp.com/cars/${id}`;
        const data = {
          name,
          image,
          description,
          price,
          quantity,
          email,
          supplier,
        };
        fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              toast.error(data.error);
            } else {
              toast.success("1 Inventory Delivered!");
              setIsReload(!isReload);
            }
          });
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
    if (!inputValue) {
      return toast.error("Please Add The Product Quantity First!", {
        autoClose: 5000,
      });
    }
    // negative input value
    if (inputValue < 0) {
      return toast.error("Please Add Positive Quantity!", {
        autoClose: 5000,
      });
    }

    // confirm dialog when user click on update button
    Swal.fire({
      text: "Are you sure you want to restock?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Restock!",
    }).then((result) => {
      if (result.value) {
        // if user click on update button
        const url = `https://cars-warehouse.herokuapp.com/cars/${id}`;
        const data = {
          name,
          image,
          description,
          price,
          quantity,
          email,
          supplier,
        };
        fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              toast.error(data.error);
            } else {
              toast.success(`${inputValue} Inventory Added Successfully!`);
              setIsReload(!isReload);
            }
          });
      }
    });
    e.target.reset();
  };

  return (
    <div className="updated mx-auto d-block my-4">
      <button
        className="btn btn-secondary d-flex align-items-center"
        onClick={() => navigate(-1)}
        style={{ margin: "0 auto", display: "block", marginBottom: "1rem" }}
      >
        <BiLeftArrowAlt className="fs-5"></BiLeftArrowAlt>
        Back
      </button>
      <Card className="border-0">
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            <strong>{item.quantity} cars</strong>
          </Card.Text>
          <Card.Text className="fs-4 fw-bold">${item.price}</Card.Text>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text className="fs-6 fw-bold">
            Supplier: {item.supplier}
          </Card.Text>
          <Button variant="danger" onClick={deliveredInventory}>
            Delivered
          </Button>
        </Card.Body>
        <form onSubmit={handleQuantityUpdate}>
          <InputGroup className="mb-3 input">
            <FormControl
              name="update"
              placeholder="Restock Inventory"
              aria-label="Restock Inventory"
              aria-describedby="basic-addon2"
              type="number"
            />
            <Button variant="danger" type="submit">
              Restock
            </Button>
          </InputGroup>
        </form>
      </Card>
    </div>
  );
}

export default InventoryDetails;
