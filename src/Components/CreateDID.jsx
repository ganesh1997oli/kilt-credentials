import React from "react";

const CreateDID = () => {
  return (
    <>
      <div className="flex w-[100%] border border-red-600 h-[100vh] justify-center items-center flex-col">
        <h1 className="font-extrabold text-2xl ">
          Create your Decentralized Identifier (DID)
        </h1>
        <p className="text-md mt-2 text-center">
          You would need to make a deposit to create your DID. <br/> This is a token
          which would be refunded if you disconnect your DID.{" "}
        </p>
        <div className="w-full mt-10  max-w-xl flex flex-col  p-4 bg-white border border-gray-200 sm:p-6">
            <h1 className="text-black font-extrabold text-sm">Payment Option</h1>
          <div class="flex border px-4 rounded-sm py-2 mt-3">
            <div class="flex items-center h-5">
              <input
                id="orange-radio" 
                aria-describedby="helper-radio-text"
                type="radio"
                value=""
                class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div class="ml-2 text-sm">
              <label
               for="orange-radio"
                class="ftext-black font-extrabold text-sm"
              >
                Pay With Kilt
              </label>
              <p
                id="helper-radio-text"
                class="text-sm font-normal text-gray-800 dark:text-gray-800"
              >
               To use this option you would have to have at least 2.0582 KILTs as Fee
              </p>
            </div>
          </div>

          <button className=" w-full mt-5 connect-wallet-button  rounded-sm text-sm px-4 py-3 text-center ">
            Continue to Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateDID;
