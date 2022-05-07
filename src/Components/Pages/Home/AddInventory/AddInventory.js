import { TextField, Button } from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { auth } from "../../../../Firebase/Firebase.init";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import "./AddInventory.css";

const AddInventory = () => {
  const [user] = useAuthState(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const email = e.target.email.value;
    const supplier = e.target.supplier.value;
    const item = {
      name,
      image,
      description,
      price,
      quantity,
      supplier,
      email,
    };
    fetch("https://cars-warehouse.herokuapp.com/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Inventory Added Successfully!", {
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
    <div className="inventory-container add">
      <PageTitle title="Add Item"></PageTitle>
      <h2 className="text-center py-4">Add an Inventory</h2>
      <form onSubmit={handleSubmit}>
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
          label="Image Direct Link"
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
        <Button variant="contained" type="submit" className="add-btn">
          Add Inventory
        </Button>
      </form>
    </div>
  );
};

export default AddInventory;
