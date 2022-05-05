import React from "react";
import "./ManageInventory.css";
import trash from "../../../Assets/logo/trash-2.png";
import edit from "../../../Assets/logo/edit.png";

function ManageInventory({ inventories, handleDeleteInventories }) {
  return (
    <div className="admin-vol-list">
      <h5 className="display-5 py-lg-4 pb-2 text-center">
        Manage All Inventory List
      </h5>
      <div className="admin-content">
        <table>
          <thead>
            <tr>
              <th>Inventory Name</th>
              <th>User Email</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Supplier</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {inventories.length > 0 ? (
              inventories.map((inventory) => (
                <tr key={inventory._id}>
                  <td>{inventory.name}</td>
                  <td>{inventory.email}</td>
                  <td>${inventory.price}</td>
                  <td>{inventory.quantity}</td>
                  <td>{inventory.supplier}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteInventories(inventory._id)}
                    >
                      <img src={trash} alt="delete" style={{ width: "21px" }} />
                    </button>
                    <button className="edit-btn2">
                    <img src={edit} alt="update" style={{ width: "21px" }} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">
                  <div className="alert alert-warning text-center" role="alert">
                    No inventory found on database
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageInventory;
