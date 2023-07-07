'use client'

import { useEffect, useState } from 'react';
import SingleDeal from './SingleDeal';

const TodaysHotDeals = () => {
  const [todaysHotDeals, setTodaysHotDeals] = useState([]);
  
  useEffect(() => {
    const fetchTodaysHotDeals = () => {
      fetch("https://api.hiring.masterkey.tech/api/v1/products?product_type=Today%E2%80%99s%20hot%20deals")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setTodaysHotDeals(data?.products[0]?.productData);
        })
    }
    fetchTodaysHotDeals();
  }, [])
  
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold">{`Today's hot deals`}</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 border-t-2 border-orange-300 border-dashed mt-4 gap-x-10 gap-y-4">
        {
          todaysHotDeals?.map(hotDeal => (
            <SingleDeal deal={hotDeal} key={hotDeal?._id}></SingleDeal>
          ))
        }
        </div>
    </div>
  )
}

export default TodaysHotDeals