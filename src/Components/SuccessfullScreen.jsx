import React from "react";

const SuccessfullScreen = () => {
  return (
    <>
      <div className="w-[100vw] h-[100%] flex justify-center items-center fixed top-0 left-0 backdrop-blur-sm overflow-hidden z-50 ">
        <div className="w-full max-w-md flex justify-center flex-col items-center  p-4 bg-white border border-gray-200 shadow sm:p-6">
          <h5 className="text-center text-[40px]">🎉</h5>
          <h5 className="mb-3 text-base font-extrabold flex justify-center capitalize text-gray-900 md:text-xl dark:text-black">
            Wallet Connect Successful
          </h5>
          <p className="text-center mt-1">
            We would need you to verify your identity before you can list or
            invest in properties. This typically involves submitting personal
            information and supporting documents, such as a government-issued ID
            or proof of address.
          </p>
          <button className=" mt-5 border border-blue-600  rounded-lg text-sm px-4 py-2 text-center ">
            Verify Identity
          </button>
          <button className=" mt-3 rounded-lg text-sm  px-4 py-2 text-center">
            Later
          </button>
         
        </div>
      </div>
    </>
  );
};

export default SuccessfullScreen;
