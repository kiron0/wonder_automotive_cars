import { useEffect, useState } from "react";

const useInventory = () => {
  const [inventoryCards, setInventoryCards] = useState([]);
  useEffect(() => {
    fetch(
      "https://cars-warehouse.herokuapp.com/cars"
    )
      .then((res) => res.json())
      .then((data) => setInventoryCards(data));
  }, []);
  return [inventoryCards, setInventoryCards];
};
export default useInventory;
