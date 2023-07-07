import React from "react";
import SingleDeal from "./SingleDeal";

const DynamicSearchItems = ({ searchedItems }) => {
  console.log("searchedItems", searchedItems);
  return (
    <div className="mt-8">
      {searchedItems?.length > 0 && (
        <>
          <h4 className="font-bold">{`Searched Items`}</h4>
          <div className="grid grid-cols-5 border-t-2 border-orange-300 border-dashed mt-4 gap-x-10 gap-y-4">
            {searchedItems?.map((hotDeal) => (
              <SingleDeal hotDeal={hotDeal}></SingleDeal>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DynamicSearchItems;
