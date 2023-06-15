import React, { useContext, useCallback, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { DataContext } from "../utils/context/Context";
import useSporran from "../utils/customHook/useSporran";
const Navbar = () => {
  const { setIsOpen, isOpen } = useContext(DataContext);
  const { extensions } = useSporran();
  console.log("Extentions",extensions);
  const { kilt } = window;
  const [processing, setProcessing] = useState(false);
  // const handleConnect = async (extension) => {
  //   try {
  //     setProcessing(true);
  //     setError(undefined);

  //     handleConnect(await getSession(kilt[extension]));
  //   } catch (exception) {
  //     const { message } = exceptionToError(exception);
  //     if (message.includes("closed")) {
  //       setError("closed");
  //     } else if (message.includes("Not authorized")) {
  //       setError("unauthorized");
  //     } else {
  //       setError("unknown");
  //       console.error(exception);
  //     }
  //     setProcessing(false);
  //   }
  // };

  return (
    <>
      {/* <section className="mt-20">
        {extensions && (
          <p>
            Looking for a wallet… To make a claim you need to have e.g. Sporran
            wallet installed and have an identity configured in it.
          </p>
        )} */}

        {/* <button
          type="button"
          onClick={() => handleConnect(extensions.sporran.name)}
          className="border bg-violet-500 px-3 py-2 rounded-sm text-white"
        >
          Connect to {extensions.sporran.name}
        </button> */}

        {/* {processing && <p>Connecting…</p>}  */}
      {/* </section> */}
      <nav className="bg-white  shadow-sm fixed top-0 left-0 w-full z-20  dark:border-gray-600 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-12 mr-3" alt="Flowbite Logo" />
          </a>
          <div className="flex md:order-2">
            <BsFillMoonFill color="black" className="mt-3 mx-3" size={20} />
            <BiBell color="black" className="mt-3 mr-10" size={24} />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className=" connect-wallet-button rounded-lg text-sm px-4 py-3 text-center mr-3 md:mr-0"
            >
              Connect Wallet
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 text-black"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 text-black font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <li>
                {/* <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white main-color rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Marketplace
                </a> */}
                <Link to="/market-place">Marketplace</Link>
              </li>
              <li>
                {/* <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Dev-Loan
                </a> */}
                <Link to="/real-estate">Estate</Link>
              </li>
              <li>
                <Link to="#">Stake</Link>
              </li>
              <li>
                <Link to="/list-property">List-Property</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
