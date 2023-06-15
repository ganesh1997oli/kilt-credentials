import React from "react";
import { Link } from "react-router-dom";
const UserRole = () => {
  return (
    <>
      <div className="container mx-auto mt-20 h-[80vh] flex items-center flex-col">
        <section className="career py-[50px]">
          <div className="container p-screen">
            <div className="row m-screen">
              <div className="col-12 p-screen mt-10 text-center mb-[40px] sm:mb-[16px]">
               
                <p className="text-black  md:text-3xl font-bold sm:text-base">
                  What Would Be Your Role ?
                </p>
              </div>
              <div className="col-12 p-screen mt-20">
                <ul className="grid w-full gap-10 sm:gap-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xxl:grid-cols-3">
                  <li className="relative">
                    <input
                      type="radio"
                      id="web1"
                      name="hosting"
                      value="web1"
                      className="hidden peer"
                      required
                    />
                    
                    <label
                      for="web1"
                      className="block w-full peer-checked:border-blue-600 h-full py-8 px-8 shadow-xl text-white  border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-[lightred] peer-checked:text-lightred "
                    >
                      <h3 className="text-2xl font-bold mt-4 sm:text-lg mb-2 text-black">
                      Real Estate Developer
                      </h3>
                    </label>
                  </li>

                  <li className="relative">
                    <input
                      type="radio"
                      id="web2"
                      name="hosting"
                      value="web2"
                      className="hidden peer"
                      required
                    />
                    
                    <label
                      for="web2"
                      className="block w-full h-full peer-checked:border-blue-600 py-8 px-8 shadow-xl text-white  border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-[lightred] peer-checked:text-lightred "
                    >
                      <h3 className="text-2xl font-bold mt-4 sm:text-lg mb-2 text-black">
                      Real Estate Investor 
                      </h3>
                    </label>
                  </li>

                  <li className="relative">
                    <input
                      type="radio"
                      id="web3"
                      name="hosting"
                      value="web3"
                      className="hidden peer"
                      required
                    />
                    
                    <label
                      for="web3"
                      className="block w-full h-full peer-checked:border-blue-600 py-8 px-8 shadow-xl text-white  border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-[lightred] peer-checked:text-lightred "
                    >
                      <h3 className="text-2xl font-bold mt-4 sm:text-lg mb-2 text-black">
                      Letting Agent
                      </h3>
                    </label>
                  </li>

                  <li className="relative">
                    <input
                      type="radio"
                      id="web4"
                      name="hosting"
                      value="web4"
                      className="hidden peer"
                      required
                    />
                    
                    <label
                      for="web4"
                      className="block w-full h-full peer-checked:border-blue-600 py-8 px-8 shadow-xl text-white  border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-[lightred] peer-checked:text-lightred "
                    >
                      <h3 className="text-2xl font-bold mt-4 sm:text-lg mb-2 text-black">
                      Surveyor
                      </h3>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Link to="/market-place" className="text-blue-500">-- Browse Property -- </Link>
      </div>
    </>
  );
};

export default UserRole;
