import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./MyInventory.css";
import { auth } from "../../../Firebase/Firebase.init";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import UserInventory from "../UserInventory/UserInventory";

const MyInventory = () => {
  const [user] = useAuthState(auth);
  const [myInventories, setMyInventories] = useState([]);
  const navigate = useNavigate();
  const [isReload, setIsReload] = useState(false);

  // get my inventories
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `https://cars-warehouse.herokuapp.com/my-items?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMyInventories(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user, isReload]);

  if (myInventories.length === 0) {
    return (
      <div>
        <div className="alert alert-warning text-center" role="alert">
          You don't have any items in your inventory.
        </div>
      </div>
    );
  }

  const handleDelete = (id) => {
    // confirm dialog when user click on delete button
    Swal.fire({
      title: "Are you sure you to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.value) {
        // if user click on delete button
        const url = `https://cars-warehouse.herokuapp.com/cars/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              toast.success("Deleted successfully");
              setMyInventories(
                myInventories.filter((inventory) => inventory.id !== id)
              );
              setIsReload(!isReload);
            } else {
              toast.error(data.message);
            }
          });
      }
    });
  };
  return (
    <div>
      <h2 className="text-center">
        Your Total Added Inventories: {myInventories.length}
      </h2>
      <div className="my-inventory-container">
        {myInventories.map((myInventory) => (
          <UserInventory
            key={myInventory._id}
            myInventory={myInventory}
            handleDelete={handleDelete}
          ></UserInventory>
        ))}
      </div>
      <button
        onClick={() => navigate("/add-inventory")}
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
        className="btn btn-primary mx-auto d-block"
      >
        Add More Item
      </button>
    </div>
  );
};

export default MyInventory;
