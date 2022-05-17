import { useEffect, useState } from "react";

const useInventory = () => {
  const [inventoryCards, setInventoryCards] = useState([]);
  useEffect(() => {
    fetch("https://cars-warehouse.herokuapp.com/cars", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setInventoryCards(data));
  }, []);
  return [inventoryCards, setInventoryCards];
};
export default useInventory;
