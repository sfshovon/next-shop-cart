'use client'

import { useEffect, useState } from 'react';
import SingleDeal from './SingleDeal';

const HotDeals = () => {
  const [hotDeals, setHotDeals] = useState([]);
  
  useEffect(() => {
    const fetchHotDeals = () => {
      fetch("https://api.hiring.masterkey.tech/api/v1/products/search?search=hot%20deals%20for%20you")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setHotDeals(data?.products[0]?.Result);
        })
    }
    fetchHotDeals();
  }, [])
  
  return (
    <div className="flex justify-center items-center my-20">
      <div className="w-1/4">
        <h2 className="text-7xl">We picked some <span className='text-orange-300 font-bold'>cool things</span> for you!</h2>
      </div>
      <div className="w-3/4 pl-24">
        <h4 className="text-xl font-bold">hot deals for you</h4>
        <div className="grid grid-cols-3 border-t-2 border-orange-300 border-dashed mt-4 gap-x-20 gap-y-4">
        {
          hotDeals?.map(hotDeal => (
            <SingleDeal deal={hotDeal} key={hotDeal?._id}></SingleDeal>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default HotDeals