import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdBedroomChild } from "react-icons/md";
import { BsCircle } from "react-icons/bs";
import {BsHeart} from "react-icons/bs";
import {LuBedSingle} from "react-icons/lu";
import {GiBathtub} from "react-icons/gi";
const AssetCard = ({ item, isHome, company }) => {
  return (
    <>
      <div className={`max-w-sm mt-2 bg-white relative ${!isHome ?  "h-[25rem]" : "h-[90%]" } asset-card rounded-lg shadow-md `}  >
        <div className={`w-[100%] overflow-hidden ${!isHome ?  "h-[48%]" : "h-[58%]" }`}>
          <img className="rounded-t-lg" src={item.photo2} alt="hello" />
        </div>
       {!isHome ?  <div className="p-3 absolute top-0">
          <span className="text-orange-500 border  text-xs font-medium mr-2 px-2.5 py-0.5 rounded backdrop-blur-3xl">
            Verified
          </span>
        </div> :  <div className="absolute p-2 backdrop-blur-3xl backdrop-brightness-50 flex justify-center rounded-md items-center right-5 top-5">
          <span className="rounded backdrop-blur-3xl">
            <BsHeart size={20} color="white"/>
          </span>
        </div>}
        <div className="p-5 ">
          <div className="flex justify-between">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-black">
              {item.title}
            </h5>
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-black-400 dark:text-black-400">
            £ {item.listingPrice}
            </h5>
          </div>
          {/* {!isHome ? (
            <h3 className="text-black mt-1 mb-1 capitalize">
              {item.description}
            </h3>
          ) : null} */}
          <div className="flex">
            <a className="flex" href={item.googleMapCode}>
              <HiOutlineLocationMarker className="text-blue-400" size={22} />
              <h5 className=" mx-2 text-1xl tracking-tight text-gray-900 dark:text-gray-500">
                {item.address}
              </h5>
            </a>
          </div>
          

          <div className="mt-2 flex justify-between ">
            <div className="mt-3 text-black flex">
              <span className="flex font-medium text-[15px]"><LuBedSingle className="mx-1" size={20} /> 4 </span>
              <span className="flex font-medium text-[15px]"><GiBathtub className="mx-1" size={20} /> 3 </span>
            </div>
            <img
              class="w-12 h-12 bg-black rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={company ? company : item.company}
              alt="Bordered avatar"
            />
          </div>
          {!isHome ? (
            <>
              <div className="mt-5 flex justify-between">
                <button className="inline-flex button items-center px-5 py-1 text-sm text-center text-white rounded-lg ">
                 Buy
                </button>
                <div className="flex w-[75%]">
                  <button
                    href={item.floorPlan}
                    className="block w-full border border-[#2F8BB2] text-[#2f8bb2] items-center px-3 py-2 text-sm text-center rounded-lg"
                  >
                    Details
                  </button>
                
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default AssetCard;
