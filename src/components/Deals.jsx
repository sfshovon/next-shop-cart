"use client"
import { useEffect, useState } from "react";
import SingleDeal from "./SingleDeal";

const Deals = () => {
  const [deals, setDeals] = useState([]);
  
  useEffect(() => {
    const fetchDeals = () => {
      fetch("https://api.hiring.masterkey.tech/api/v1/products?product_type=Deals%20on%20furniture")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDeals(data?.products[0]?.productData);
      })
    }
    fetchDeals();
  }, [])

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold ml-4 mb-4">Deals on furniture</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 border-t-2 border-orange-300 border-dashed mt-4 gap-x-10 gap-y-4">
      {
        deals?.map(deal => (
          <SingleDeal deal={deal} key={deal?._id}></SingleDeal>
        ))
      }
      </div>
    </div>
  );
};

export default Deals;