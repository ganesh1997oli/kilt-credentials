import React, { useState } from "react";

const CredentialForm = () => {
  const [formaData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    profession: "",
    home_address: "",
  });
  const onFormChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formaData, [name]: value });
    console.log(formaData);
  };
  const [formImages, setFormImages] = useState({
    doc1: {
      preview: "",
      data: "",
    },
    doc2: {
      preview: "",
      data: "",
    },
  });

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    let name = e.target.name;
    setFormImages({ ...formImages, [name]: img });
  };
  const formSubmissionClick = () => {
    const data = {
      formaData,
      formImages,
    };
    console.log("Full data",data);
  };
  return (
    <>
      <div className="container mt-20  m-auto flex justify-center items-center flex-col h-[100%]">
        <div className="py-0 px-10 rounded-sm border border-black bg-white w-[60%] mb-2 flex justify-between mt-10">
          <div class="flex items-center  ">
            <input
              id="bordered-radio-1"
              type="radio"
              checked
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="bordered-radio-1"
              class="w-full py-4 ml-2 cursor-pointer text-md font-extrabold text-gray-900 dark:text-black"
            >
              {" "}
              Link your credentials to your DID
            </label>
          </div>
        </div>
      </div>
      <div className="container m-auto flex justify-center items-center flex-col h-[100%]">
        <div className="py-10 px-10 rounded-sm bg-white w-[60%]">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                for="full_name"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                placeholder="Nikku Choubisa"
                required
                onChange={(e) => onFormChange(e)}
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                for="phone_number"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phone_number"
                name="phone_number"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                placeholder="House , Apartment , Land"
                required
                onChange={(e) => onFormChange(e)}
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
                name="email"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                placeholder="Nikku@876.com"
                required
                onChange={(e) => onFormChange(e)}
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                for="profession"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
              >
                Profession
              </label>
              <input
                type="text"
                id=""
                name="profession"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                placeholder="Profession"
                required
                onChange={(e) => onFormChange(e)}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <label
                for="home_address"
                className="block mb-2 text-sm font-bold text-gray-900 dark:text-black"
              >
                Home Address
              </label>
              <input
                type="text"
                id="home_address"
                name="home_address"
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:-light"
                placeholder="Url Map to"
                required
                onChange={(e) => onFormChange(e)}
              />
            </div>
          </div>

          <div className="flex">
            <div className="flex justify-center flex-col">
              <label
                for="doc1"
                className="block mb-4 text-sm font-bold text-gray-900 dark:text-black "
              >
                ID doc 1 (Driving license/ passport)
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  for="doc1"
                  className="flex flex-col items-center justify-center w-full h-34 px-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   dark:border-gray-600 dark:hover:border-gray-500"
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
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    id="doc1"
                    className="hidden"
                    name="doc1"
                    onChange={(e) => handleFileChange(e)}
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-center flex-col mx-3">
              <label
                for="doc2"
                className="block mb-4 text-sm font-bold text-gray-900 dark:text-black "
              >
                ID doc 2 Utility bill (within 3 months)
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  for="doc2"
                  className="flex flex-col items-center justify-center w-full h-34 px-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   dark:border-gray-600 dark:hover:border-gray-500"
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
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    id="doc2"
                    accept="image/*"
                    type="file"
                    className="hidden"
                    name="doc2"
                    onChange={(e) => handleFileChange(e)}
                  />
                </label>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={formSubmissionClick}
            className="text-white button rounded-md w-full mt-10 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold  text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800"
          >
            Send For Verification
          </button>
        </div>
      </div>
    </>
  );
};

export default CredentialForm;
