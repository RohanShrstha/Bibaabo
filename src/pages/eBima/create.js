import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import NavBarComponent from "../components/NavBarComponent";
import SideBar from "../components/SideBar";
import Footer from "../components/AdminFooter";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { MdEdit, MdDelete } from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";

const create = () => {
  return (
    <div>
      <NavBarComponent />
      <div className="flex h-full">
        <div className="h-full">
          <SideBar />
        </div>
        <div
          className="mt-20 mb-10 h-full w-full"
          style={{
            minHeight: "76.73vh",
            marginLeft: "260px",
            marginRight: "30px",
            maxWidth: "80vw",
          }}
        >
          <div className="p-8 rounded-lg shadow-xl text-center">
            <div className="card-body">
              <section>
                <div class="flex flex-col justify-center h-full">
                  <header class="px-5 py-1 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="card-title text-xl">
                        All New <b>Bima</b>
                      </h2>
                    </div>
                  </header>
                </div>
                <form class="w-full  mt-4">
                  <div class="flex mb-6 ">
                    <div
                      class="w-1/2 px-3 flex flex-col items-center "
                      style={{ zIndex: "-1" }}
                    >
                      <label
                        for="grid-image"
                        class="block relative w-40 h-40 bg-gray-200 border border-gray-200 rounded cursor-pointer z-0"
                      >
                        <input
                          id="grid-image"
                          type="file"
                          class="absolute inset-0 opacity-0  cursor-pointer"
                        />
                        <span class="absolute inset-0 flex items-center justify-center text-gray-400">
                          <BiImageAdd size={30} />
                        </span>
                      </label>
                      <label
                        class="block tracking-wide text-gray-400 text-xs text-center mb-2"
                        for="grid-image"
                      >
                        Choose Banner 5:3 Ratio
                      </label>
                    </div>
                    <div
                      class="w-1/2 px-3 flex flex-col items-center"
                      style={{ zIndex: "-1" }}
                    >
                      <label
                        for="grid-image"
                        class="block relative w-40 h-40 bg-gray-200 border border-gray-200 rounded cursor-pointer"
                      >
                        <input
                          id="grid-image"
                          type="file"
                          class="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <span class="absolute inset-0 flex items-center justify-center text-gray-400">
                          <BiImageAdd size={30} />
                        </span>
                      </label>
                      <label
                        class="block tracking-wide text-gray-400 text-xs text-center mb-2"
                        for="grid-image"
                      >
                        Choose Logo
                      </label>
                    </div>
                  </div>
                  <div class="flex mb-6">
                    <div class="w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        class="block tracking-wide text-gray-400 text-xs font-bold mb-2 text-left"
                        for="grid-first-name"
                      >
                        Title*
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                      />
                    </div>
                    <div class="w-1/2 px-3">
                      <label
                        class="block tracking-wide text-gray-400 text-xs font-bold mb-2 text-left"
                        for="grid-last-name"
                      >
                        Slug
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="flex mb-6">
                    <div class="w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        class="block tracking-wide text-gray-400 text-xs font-bold mb-2 text-left"
                        for="grid-first-name"
                      >
                        Phone*
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                      />
                    </div>
                    <div class="w-1/2 px-3">
                      <label
                        class="block tracking-wide text-gray-400 text-xs font-bold mb-2 text-left"
                        for="grid-last-name"
                      >
                        Mobile
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="flex mb-6">
                    <div class="w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        class="block tracking-wide text-gray-400 text-xs font-bold mb-2 text-left"
                        for="grid-first-name"
                      >
                        Routing no.
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                      />
                    </div>
                    <div class="w-1/2 px-3 flex items-center">
                      <input
                        class="mr-4 leading-tight w-4 h-4"
                        id="display-checkbox"
                        type="checkbox"
                      />
                      <label
                        class="block tracking-wide text-gray-400 text-sm font-bold p-2"
                        for="display-checkbox"
                      >
                        Display
                      </label>
                      <input
                        class="mr-4 ml-20 leading-tight w-4 h-4"
                        id="featured-checkbox"
                        type="checkbox"
                      />
                      <label
                        class="block tracking-wide text-gray-400 text-sm font-bold p-2"
                        for="featured-checkbox"
                      >
                        Featured
                      </label>
                    </div>
                  </div>
                  <div class="flex mb-6">
                    <div class="w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        class="block tracking-wide text-gray-400 text-xs font-bold mb-2 text-left"
                        for="grid-first-name"
                      >
                        Address*
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="flex mb-6">
                    <div class="w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        class="block tracking-wide text-gray-400 text-xs font-bold mb-2 text-left"
                        for="grid-first-name"
                      >
                        Description
                      </label>
                      <textarea
                        class="appearance-none block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-description"
                        rows="8"
                      ></textarea>
                    </div>
                  </div>
                  <div class="flex justify-end">
                    <button
                      class="shadow bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default create;
