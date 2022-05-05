import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
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
    const confirm = window.confirm("Are you sure you want to delete");
    if (!confirm) {
      return;
    }
    fetch(`https://cars-warehouse.herokuapp.com/cars/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          toast.success("Inventory Deleted Successfully");
        }
        setInventories(inventories.filter((inventory) => inventory._id !== id));
      });
  };

  return (
    <div className="container-fluid">
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
