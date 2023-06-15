import React from "react";

const SummaryCards = ({sumData}) => {
    return ( 
        <>
            
        <div className="max-w-sm mt-2 bg-white relative  asset-card  shadow">
        
        {/* <div className="p-3 absolute top-0">
        <span className="text-orange-500 border  text-xs font-medium mr-2 px-2.5 py-0.5 rounded backdrop-blur-3xl">Verified</span>
        </div> */}
        <div className="px-5 py-3 summarry-card">
        
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-black-900 dark:text-black">
             {sumData.title}
            </h5>
            <div className="w-full flex justify-center mt-5 items-center"><h5 className="text-2xl font-bold tracking-tight text-gray-500">
               {sumData.value}
            </h5></div>
      
          <h3 className="text-white mt-1 mb-1">{sumData.value}</h3>
        </div>
      </div>

        </>
     );
}
 
export default SummaryCards;