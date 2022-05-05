import { useEffect, useState } from "react";

const useInventoryDetail = (id) => {
  const [inventoryDetail, setInventoryDetail] = useState({});

  useEffect(() => {
    const url = `https://cars-warehouse.herokuapp.com/cars/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventoryDetail(data));
  }, [id]);
  return [inventoryDetail, setInventoryDetail];
};

export default useInventoryDetail;
