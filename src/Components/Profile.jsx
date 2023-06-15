import React, { useRef } from "react";
import { BsCircle } from "react-icons/bs";
//import axios from "axios";
//import { XCAV_API } from "../services/APIService";

const Profile = () => {
  const fullNameRef = useRef(""); // can also use useState instead of ref.
  const emailRef = useRef("");
  const addressRef = useRef("");
  const phoneRef = useRef("");
  const bioRef = useRef("");
  const imageRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //setting input state without using setState but ref.
    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const bio = bioRef.current.value;
    const address = addressRef.current.value;
    const imageUrl = imageRef.current.value;
    const postBody = { fullName, email, phone, address, bio, imageUrl };

    //console.log(postBody);
    // axios.post(`${XCAV_API}/propertyInfo`, {postBody}).then(res=> console.log(res))
    // .catch(err => console.log(err))
    //toast.success("Comment Added Successfully");
  };
  return (
    <div className="container mt-20 m-auto flex justify-center items-center flex-col h-[100%]">
      <div className="py-4 px-10 mt-20 rounded-md shadow-lg w-[60%] mb-2 flex justify-between">
        <label
          for="name"
          className="flex text-sm font-bold text-gray-900 dark:text-black"
        >
          <BsCircle color="blue" className="mt-1" />{" "}
          <span className="mx-2 font-bold text-md1">
            Link Your credential to your DID
          </span>
        </label>
      </div>
      <div className="py-10 px-20 rounded-md shadow-lg w-[60%]">
        {/* */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-6">
            <label
              for="name"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              ref={fullNameRef}
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter full name"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              for="email"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="number"
              ref={phoneRef}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="phone number"
              required
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <label
              for="email"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="email"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              for="email"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
            >
              Profession
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a Profession</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
            <label
              for="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              ref={addressRef}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              placeholder="Address"
            />
          </div>

        {/* <div className="mb-6">
            <label
              for="bio"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Bio
            </label>
            <textarea
              id="bio"
              rows="4"
              ref={bioRef}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="We would like to know more about you as a real estate developer..."
            ></textarea>
          </div> */}
        <label
          for="id"
          className="block mb-2 text-sm font-bold text-gray-900 dark:text-black text-center mt-5"
        >
          Upload Id
        </label>
        <div className="flex justify-around mt-3">
        <div><label
          for="id"
          className="block mb-4 text-sm font-medium text-gray-900 dark:text-gray-500 "
        >
          Driving License / Passport
        </label>
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-34 px-4 border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 "
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div></div> <div><label
          for="id"
          className="block mb-4 text-sm font-medium text-gray-900 dark:text-gray-500 "
        >
          DUtility Bill with 3 Months
        </label>
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-34 px-4 border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 "
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div></div>
        </div>
        <button
          type="button"
          className="connect-wallet-button w-full rounded-md mt-10 bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  shadow-xl text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
