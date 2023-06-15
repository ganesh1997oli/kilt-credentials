import React, { useState } from "react";
//import { data } from "../utils/assets";
import {data} from "../utils/estateData"
import AssetCard from "./AssetCard";
import EstateAssets from "./estateAssets";
import SummaryCards from "./summaryCards";
import { sumData } from "../utils/summary";
const RealEstate = () => {
    
  return (
    <>
      <div className="container banner h-[14rem] border w-[100%] relative p-4 mx-auto mb-5 mt-20">

      <div className="w-[120px] h-[120px] left-10 p-1 flex justify-center items-center object-center absolute bottom-[-50px] rounded-full overflow-hidden  profile-banner">
  
      </div>
      </div>
      <div className="px-4 py-10 grid grid-cols-4 gap-2 container mx-auto">
       {sumData.map((item)=>{
         return <SummaryCards sumData={item} key={item.id} />
       })}
      </div>
      <div className="px-4 py-10 grid grid-cols-3 gap-2 container mx-auto">
       {data.map((item)=>{
         return <EstateAssets item={item} key={item._id} />
       })}
      </div>
    </>
  );
};

export default RealEstate;
