import React from "react";
import "tailwindcss/tailwind.css";
import NavBarComponent from "../components/NavBarComponent";
import SideBar from "../components/SideBar";
import Footer from "../components/AdminFooter";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { MdEdit, MdDelete } from "react-icons/md";

const bank = () => {
  const bannerData = [
    {
      id: 1,
      imageUrl:
        "http://139.59.41.77/storage/images/bank/logos/screen-shot-2024-01-10-at-141251-20240112051736-xaRvlE.png",
      title: "Siddhartha Capitalll",
      routing: "",
      contact: "",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      featured: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      rating: "",
      type: "Class A",
      addedOn: "February 19, 2024 4:31 PM",
    },
    {
      id: 2,
      imageUrl:
        "http://139.59.41.77/storage/images/bank/logos/download-16-20230901082711-aZWHjl.jfif",
      title: "Himalayan Bank Limited",
      routing: "HIMANPKA",
      contact: "01-4227749",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      featured: (
        <div className="rounded-full bg-red-600 w-10 p-2 text-white">
          <RxCross1 size={20} />
        </div>
      ),
      rating: "A",
      type: "Class A",
      addedOn: "February 19, 2024 4:31 PM",
    },
    {
      id: 3,
      imageUrl:
        "http://139.59.41.77/storage/images/bank/logos/download-14-20230901082234-6grXLt.jfif",
      title: "Rastriya Banijya Bank Limited",
      routing: "RBBANPKA",
      contact: "+977-1-425-2595",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      featured: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      rating: "A",
      type: "Class A",
      addedOn: "February 19, 2024 4:31 PM",
    },
  ];

  return (
    <div>
      <NavBarComponent />
      <div className="flex h-full">
        <div className="h-full">
          <SideBar />
        </div>
        <div
          className="mt-20 h-full w-full"
          style={{
            minHeight: "76.73vh",
            marginLeft: "260px",
            marginRight: "30px",
          }}
        >
          <div className="p-8 rounded-lg shadow-xl text-center">
            <div className="card-body">
              <section>
                <div class="flex flex-col justify-center h-full">
                  <header class="px-5 py-1 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="card-title text-xl">
                        All <b>Banners</b>
                      </h2>
                      <button className="bg-greenbtn hover:bg-activegreenbtn text-white px-4 py-2 rounded inline-flex items-center">
                        <IoIosAddCircleOutline />
                        <span>Add New</span>
                      </button>
                    </div>
                  </header>
                  <div className="m-3 ">
                    <input
                      type="text"
                      id="search"
                      placeholder="Search "
                      className="bg-gray-100 p-1 pl-2"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div class="p-3">
                    <div class="overflow-x-auto">
                      <table class="table-auto w-full">
                        <thead class="text-md font-bold">
                          <tr>
                            <th class="p-2 whitespace-nowrap">
                              <div class="font-semibold text-left">S.N.</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                              <div class="font-semibold text-left">Logo</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                              <div class="font-semibold text-left">Title</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                              <div class="font-semibold text-left">
                                Routing no
                              </div>
                            </th>
                            <th class="whitespace-nowrap">
                              <div class="font-semibold text-center">
                                Contact
                              </div>
                            </th>
                            <th class="whitespace-nowrap">
                              <div class="font-semibold text-center">
                                Display
                              </div>
                            </th>
                            <th class=" whitespace-nowrap">
                              <div class="font-semibold text-center">
                                Featured
                              </div>
                            </th>
                            <th class="whitespace-nowrap w-20">
                              <div class="font-semibold text-center">
                                Rating
                              </div>
                            </th>
                            <th class="whitespace-nowrap">
                              <div class="font-semibold text-center">Type</div>
                            </th>
                            <th class="whitespace-nowrap">
                              <div class="font-semibold text-left">
                                Added on
                              </div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                              <div class="font-semibold text-left">Actions</div>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-gray-100">
                          {bannerData.map((item) => (
                            <tr key={item.id} className="p-4 text-center">
                              {" "}
                              {/* Add a class for styling */}
                              <td className="">{item.id}</td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-left">
                                  {" "}
                                  <img
                                    src={item.imageUrl}
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      borderRadius: "50%",
                                    }}
                                  />
                                </div>
                              </td>
                              <td class="p-4 whitespace-nowrap">
                                <div class="text-left font-medium">
                                  {item.title}
                                </div>
                              </td>
                              <td class="p-4 whitespace-nowrap">
                                <div class="text-left font-medium ">
                                  {item.routing}
                                </div>
                              </td>
                              <td class="p-4 whitespace-nowrap">
                                <div class="text-left font-medium">
                                  {item.contact}
                                </div>
                              </td>
                              <td class="p-4 whitespace-nowrap">
                                <div class="text-left font-medium">
                                  {item.display}
                                </div>
                              </td>
                              <td class="p-8 whitespace-nowrap ">
                                <div class="text-left font-medium w-200">
                                  {item.featured}
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-left font-medium">
                                  {item.rating}
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-left font-medium ">
                                  {item.type}
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-left font-medium ">
                                  {item.addedOn}
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-left font-medium">
                                  <div className="flex">
                                    <button className="border border-green-400 bg-white hover:bg-green-400 text-green-400 hover:text-white py-1 px-3 rounded inline-flex items-center mr-2">
                                      <span className="pr-1">Edit</span>
                                      <MdEdit size={16} />
                                    </button>
                                    <button className="border border-red-400 bg-white hover:bg-red-400 text-red-400 hover:text-white py-1 px-3 rounded inline-flex items-center">
                                      <span className="pr-1">Delete</span>
                                      <MdDelete size={16} />
                                    </button>
                                  </div>

                                  <button
                                    id="dropdownDefaultButton"
                                    data-dropdown-toggle="dropdown"
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button"
                                  >
                                    Dropdown button{" "}
                                    <svg
                                      class="w-2.5 h-2.5 ms-3"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 10 6"
                                    >
                                      <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 4 4 4-4"
                                      />
                                    </svg>
                                  </button>

                                  <div
                                    id="dropdown"
                                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                  >
                                    <ul
                                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                      aria-labelledby="dropdownDefaultButton"
                                    >
                                      <li>
                                        <a
                                          href="#"
                                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                          Dashboard
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                          Settings
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                          Earnings
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                          Sign out
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default bank;
