import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./MyInventory.css";
import { auth } from "../../../Firebase/Firebase.init";
import axiosPrivate from "../../../api/axiosPrivate";

const MyInventory = () => {
  const [user] = useAuthState(auth);
  const [myInventories, setMyInventories] = useState([]);
  console.log(myInventories);
  const navigate = useNavigate();

  // get my inventories
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `http://localhost:5000/my-items?email=${email}`;
      console.log(url);
      try {
        const { data } = await axiosPrivate.get(url);
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

  return (
    <div className="w-50 mx-auto">
      <h2>Your My Inventories: {myInventories.length}</h2>
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
