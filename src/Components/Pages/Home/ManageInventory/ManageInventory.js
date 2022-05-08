import React from "react";
import "./ManageInventory.css";
import trash from "../../../Assets/logo/trash-2.png";
import edit from "../../../Assets/logo/edit.png";
import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";

function ManageInventory({ inventories, handleDeleteInventories }) {
  return (
    <div>
      <h5 className="display-5 fst-italic py-lg-0 pb-2 text-center">
        Manage All Inventory List
      </h5>
      <div className="inventory-content">
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
                  <td className="buttons">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteInventories(inventory._id)}
                    >
                      <img src={trash} alt="delete" style={{ width: "21px" }} />
                    </button>
                    <Link to={`/update/${inventory._id}`}>
                      <button className="edit-btn2">
                        <img
                          src={edit}
                          alt="update"
                          style={{ width: "21px" }}
                        />
                      </button>
                    </Link>
                    <Link to={`/inventory/${inventory._id}`}>
                      <GrUpdate
                        className="update-btn2"
                        style={{ width: "33px", position: "relative" }}
                      ></GrUpdate>
                    </Link>
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
