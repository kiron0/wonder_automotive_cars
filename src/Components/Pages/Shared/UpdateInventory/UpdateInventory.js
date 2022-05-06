import { TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { auth } from "../../../../Firebase/Firebase.init";
import PageTitle from "../PageTitle/PageTitle";
import "./UpdateInventory.css";

const UpdateInventory = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [updateInv, setUpdateInv] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const url = `https://cars-warehouse.herokuapp.com/cars/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdateInv(data));
  }, [id]);

  const handleUpdateInv = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const email = e.target.email.value;
    const supplier = e.target.supplier.value;
    const updated = {
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
      body: JSON.stringify(updated),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Inventory Updated Successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      })
      .catch((error) => {
        toast.error("Error: ", error);
      });
    e.target.reset();
  };

  return (
    <div className="inventory-container">
      <PageTitle title="Update Inventory" />
      <button
        className="btn btn-secondary d-flex align-items-center"
        onClick={() => navigate(-1)}
        style={{ margin: "0 auto", display: "block", marginBottom: "-2rem" }}
      >
        <BiLeftArrowAlt className="fs-5"></BiLeftArrowAlt>
        Back
      </button>
      <h2 className="py-4 text-center">Update: {updateInv.name}</h2>
      <form onSubmit={handleUpdateInv}>
        <TextField
          sx={{ width: "90%" }}
          id="outlined-basic"
          label="Your Email"
          variant="outlined"
          value={user?.email}
          readOnly
          name="email"
          required
        />
        <br />
        <br />
        <TextField
          sx={{ width: "90%" }}
          id="outlined-basic"
          label="Inventory Name"
          variant="outlined"
          name="name"
          required
        />
        <br />
        <br />
        <TextField
          sx={{ width: "90%" }}
          id="outlined-basic"
          label="Image Link"
          variant="outlined"
          name="image"
          required
          type="text"
        />
        <br />
        <br />
        <TextField
          sx={{ width: "90%" }}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          name="description"
          required
        />
        <br />
        <br />
        <TextField
          sx={{ width: "90%" }}
          id="outlined-basic"
          label="Supplier Name"
          variant="outlined"
          name="supplier"
          required
        />
        <br />
        <br />
        <TextField
          sx={{ width: "90%" }}
          id="outlined-basic"
          label="Price"
          variant="outlined"
          name="price"
          required
          type="number"
        />
        <br />
        <br />
        <TextField
          sx={{ width: "90%" }}
          id="outlined-basic"
          label="Quantity"
          variant="outlined"
          name="quantity"
          required
          type="number"
        />
        <br />
        <br />
        <Button variant="contained" type="submit" className="update-btn">
          Update Inventory
        </Button>
      </form>
    </div>
  );
};

export default UpdateInventory;
