import { TextField, Input, Button } from "@mui/material";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { auth } from "../../../../Firebase/Firebase.init";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import "./AddInventory.css";

const AddInventory = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email] = useState(user?.email);
  const [description, setDescription] = useState("");
  const [supplier, setSupplier] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("supplier", supplier);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("image", image);
    formData.append("email", email);
    fetch("http://localhost:5000/cars", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Inventory added successfully");
        }
      })
      .catch((error) => {
        toast.error("Error: ", error);
      });
    e.target.reset();
  };

  return (
    <div className="inventory-container">
      <PageTitle title="Add Item"></PageTitle>
      <h2 className="py-4 text-center">Add an Inventory</h2>
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
          onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => setDescription(e.target.value)}
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
          onChange={(e) => setSupplier(e.target.value)}
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
          onChange={(e) => setPrice(e.target.value)}
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
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
        />
        <br />
        <br />
        <Input
          sx={{ width: "90%" }}
          label="Upload Image"
          accept="image/*"
          name="image"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />{" "}
        <br />
        <br />
        <Button
          variant="contained"
          type="submit"
          style={{ marginLeft: "9rem" }}
        >
          Add Inventory
        </Button>
      </form>
    </div>
  );
};

export default AddInventory;
