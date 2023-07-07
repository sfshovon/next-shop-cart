"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const SearchedItems = () => {
  const [searchData, setSearchData] = useState([]);
  
  useEffect(() => {
    const fetchSearchData = () => {
      fetch("https://api.hiring.masterkey.tech/api/v1/products?product_type=Your%20searched%20items")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log("to", data?.products[0]?.productData);
        setSearchData(data?.products[0]?.productData);
      })
    }
    fetchSearchData();
  }, [])

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold ml-4 mb-4">Your searched items</h3>
      <div className="grid grid-cols-1 md:grid-cols-6 border-t-2 border-orange-300 border-dashed mt-4 gap-x-10 gap-y-4">
      {
        searchData?.map(search => (
          // <Image src={hotDeal?.product_img} height={235} width={235} alt="Product"/>
          <img src={search?.product_img} alt="Product" />
        ))
      }
      </div>
      <div className="mt-6 " style={{ backgroundImage: "url('../../public/Search Banner.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className="flex flex-col justify-center items-center">
          <Image src="/offer.png" height={225} width={750} alt="Banner"/>
          <h5>{`Check it out > > >`}</h5>
        </div>s
      </div>
    </div>
  );
};

export default SearchedItems;