import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import ManageInventory from "../ManageInventory/ManageInventory";
import "../ManageInventory/ManageInventory.css";

const AllInventory = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("https://cars-warehouse.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);

  const handleDeleteInventories = (id) => {
    // confirm dialog when user click on delete button
    Swal.fire({
      text: "Are you sure you want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete!",
    }).then((result) => {
      if (result.value) {
        // if user click on delete button
        const url = `https://cars-warehouse.herokuapp.com/cars/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message) {
              toast.error(data.message);
            } else {
              toast.success("Deleted Successfully!");
              setInventories(
                inventories.filter((inventory) => inventory._id !== id)
              );
            }
          });
      }
    });
  };

  return (
    <div className="container-fluid all-invent">
      <PageTitle title="Manage Items"></PageTitle>
      <div className="vn-admin-dashboard px-lg-5 px-0">
        <div className="row">
          <div className="col-lg-3">
            <div className="admin-controls py-3 d-flex flex-lg-column"></div>
          </div>
          <div className="col-lg-12">
            {
              <ManageInventory
                inventories={inventories}
                handleDeleteInventories={handleDeleteInventories}
              ></ManageInventory>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInventory;
