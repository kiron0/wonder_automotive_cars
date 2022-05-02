import React, { useState } from "react";
import useInventory from "../../../../hooks/useInventory";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { toast } from "react-hot-toast";
import ManageInventory from "../ManageInventory/ManageInventory";
import "../ManageInventory/ManageInventory.css";

const AllInventory = () => {
  const [inventories, setInventories] = useInventory();
  const [show, setShow] = useState(false);

  // Delete a inventory item
  const handleDeleteInventories = (id) => {
    fetch(`https://cars-warehouse.herokuapp.com/cars/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Inventory deleted successfully!");
        if (result) {
          const inventory = inventories.filter((inventoryItem) => inventoryItem._id !== id);
          setInventories(inventory);
        }
      });
    setShow(false);
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
                show={show}
                setShow={setShow}
              ></ManageInventory>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInventory;
