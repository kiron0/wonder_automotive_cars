import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./MyInventory.css";
import { auth } from "../../../Firebase/Firebase.init";
import axios from "axios";
import Loading from "../Shared/Loading/Loading";
import { toast } from "react-hot-toast";

const MyInventory = () => {
  const [user] = useAuthState(auth);
  const [myInventories, setMyInventories] = useState([]);
  const navigate = useNavigate();

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
  }, [user]);

  if (myInventories.length === 0) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (!confirm) {
      return;
    }
    const url = `https://enigmatic-eyrie-33917.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          toast.success("Deleted successfully");
          const newInventories = myInventories.filter(
            (inventory) => inventory.id !== id
          );
          setMyInventories(newInventories);
        }
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Your Total Added Inventories: {myInventories.length}</h2>
      {myInventories.map((myInventory) => (
        <div key={myInventory._id}>
          <p>
            {myInventory.email} : {myInventory.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyInventory;
