"use client";

import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";

const SearchBar = ({ setSearchedItems }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const fetchAllProducts = () => {
      fetch("https://api.hiring.masterkey.tech/api/v1/products")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setAllProducts(data?.products[0]?.productData);
        });
    };
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (searchText.length > 2) {
      const searchedProducts = allProducts?.filter(
        (product) =>
          product.product_name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          product.product_type.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchedItems(searchedProducts);
    } else {
      setSearchedItems([]);
    }
  }, [searchText]);

  return (
    <div className="flex justify-between items-center border-t border-zinc-600 pt-2">
      <div className="bg-orange-300 rounded-xl p-3 flex justify-center items-center">
        <GrLocation size={24} />
        <span className="pl-2 font-semibold">Dhaka, 1212</span>
      </div>
      <div className="form-control lg:w-1/3 flex relative">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="absolute top-3 right-2">
          <BiSearch size={22}/>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
