"use client"
import Deals from "@/components/Deals";
import DynamicSearchItems from "@/components/DynamicSearchItems";
import HotDeals from "@/components/HotDeals";
import Review from "@/components/Review";
import SearchBar from "@/components/SearchBar";
import SearchedItems from "@/components/SearchedItems";
import Tabs from "@/components/Tabs";
import TodaysHotDeals from "@/components/TodaysHotDeals";
import { useState } from "react";

export default function Home() {
  const [searchedItems, setSearchedItems] = useState([]);
  return (
    <>
      <SearchBar setSearchedItems={setSearchedItems}/>
      <Tabs/>
      <DynamicSearchItems searchedItems={searchedItems}/>
      <HotDeals/>
      <TodaysHotDeals/>
      <SearchedItems/>
      <Deals/>
      <Review/>
    </>
  )
}
