import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import NavBarComponent from "../components/NavBarComponent";
import SideBar from "../components/SideBar";
import Footer from "../components/AdminFooter";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { MdEdit, MdDelete } from "react-icons/md";

const Serviceprovider = () => {
  const bannerData = [
    {
      id: 1,
      imageUrl:
        "http://139.59.41.77/storage/images/bank/logos/screen-shot-2024-01-10-at-141251-20240112051736-xaRvlE.png",
      //   title: "Sagarmatha Lumibini Insurance Company Limited",
      routing: "2061 B.S (2004 A.D)",
      contact: "9841475825, 9841527841",
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
      //   type: "Non Life Insurance",
      //   address: "",
      //   addedOn: "February 19, 2024 4:31 PM",
    },
    {
      id: 2,
      imageUrl:
        "http://139.59.41.77/storage/images/bima/logos/download-7-20230913085851-InlcXl.png",
      //   title: "Shikhar Insurance Company Limited",
      routing: "2061 B.S (2004 A.D)",
      contact: "01-5346101, 01-5346102, 01-5346107",
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
      rating: "B",
      //   type: "Non-Life Insurance",
      //   address: "Shikhar Biz Centre, Thapathali Fourth to Seventh Floor",
      //   addedOn: "February 19, 2024 4:31 PM",
    },
    {
      id: 3,
      imageUrl:
        "http://139.59.41.77/storage/images/bima/logos/download-6-20230913085606-OgSw3I.png",
      //   title: "	Prabhu Insurance Limited",
      routing: "2053 B.S (1996 A.D)	",
      contact: "977-1-5199220 5199226",
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
      rating: "B",
      //   type: "Non-Life Insurance",
      //   address: "Tinkune, Kathmandu, Nepal",
      //   addedOn: "February 19, 2024 4:31 PM",
    },
    {
      id: 4,
      imageUrl:
        "http://139.59.41.77/storage/images/bima/logos/download-3-20230913085308-BYvMdm.png",
      //   title: "Rastriya Beema Company Limited",
      routing: "2071 B.S (2015 A.D)",
      contact: "0977-1-4258866, 4259374, 4260352, 4215536",
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
      //   type: "Non-Life Insurance",
      //   address: "RBCL Building, Ramshahpath",
      //   addedOn: "February 19, 2024 4:31 PM",
    },
    {
      id: 5,
      imageUrl:
        "http://139.59.41.77/storage/images/bima/logos/download-1-20230913084717-Rnw79a.png",
      title: "Nepal Insurance Company Limited",
      routing: "2004 B.S (1947 A.D)",
      contact: "5321353, 5328690, 5345565/68",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={10} />
        </div>
      ),
      featured: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      rating: "B",
      type: "	Non-Life Insurance",
      address: "Ameer Bhawan, 1st & 7th Floor, Ganeshthan, Kamaladi",
      addedOn: "February 19, 2024 4:31 PM",
    },
    {
      id: 6,
      imageUrl:
        "http://139.59.41.77/storage/images/bima/logos/images-20230911105609-vdJefX.png",
      title: "SANIMA RELIANCE LIFE INSURANCE LIMITED	",
      routing: "",
      contact: "+977-01-5970400/01-4797124",
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
      type: "LIFE INSURANCE	",
      address: "New Baneshwor, Kathmandu, Nepal",
      addedOn: "February 19, 2024 4:31 PM",
    },
    {
      id: 7,
      imageUrl:
        "http://139.59.41.77/storage/images/bima/logos/download-1-20230913085009-cheXhF.jfif",
      title: "Neco Insurance Limited",
      routing: "2051 B.S (1994 A.D)",
      contact: "01-4542263, 01-4526595, 01-4531462",
      display: (
        <div className="rounded-full bg-red-600 w-10 p-2 text-white">
          <RxCross1 size={20} />
        </div>
      ),
      featured: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      rating: "B",
      type: "	Non-Life Insurance",
      address: "BEEMA BHAWAN, GYANESHWOR, KATHMANDU, NEPAL",
      addedOn: "February 19, 2024 4:31 PM",
    },
  ];

  return (
    <div className="bg-gray-100">
      <NavBarComponent />
      <div className="flex h-full ">
        <div
          className="mb-10 h-full w-full bg-white rounded-xl shadow-xl"
          style={{
            minHeight: "76.73vh",
            maxWidth: "95vw",
            margin: "2vw",
            marginTop: "6vw",
          }}
        >
          <div className="p-8 rounded-lg  text-center">
            <div className="card-body">
              <section>
                <div className="flex flex-col justify-center h-full">
                  <header className="px-5 py-1 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="card-title text-xl">
                        <b>Service Providers</b>
                      </h2>
                      <Link href="/eBima/create">
                        <button className="bg-greenbtn hover:bg-activegreenbtn text-white px-4 py-2 rounded inline-flex items-center">
                          <IoIosAddCircleOutline />
                          <span>Add New</span>
                        </button>
                      </Link>
                    </div>
                  </header>
                  <div className="m-3 ">
                    <input
                      type="text"
                      id="search"
                      placeholder="Search "
                      className="bg-gray-100 p-1 pl-2  outline-gray-300"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="p-3">
                    <table className=" divide-y divide-black w-full">
                      <thead className="text-lg font-bold ">
                        <tr>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">S.N.</div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">Logo</div>
                          </th>
                          {/* <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left">
                                Title
                              </div>
                            </th> */}
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Routing no
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Contact
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Display
                            </div>
                          </th>
                          <th className=" whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Featured
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Rating
                            </div>
                          </th>
                          {/* <th className="whitespace-nowrap">
                              <div className="font-semibold text-center">
                                Type
                              </div>
                            </th> */}
                          {/* <th className="whitespace-nowrap">
                              <div className="font-semibold text-left">
                                Address
                              </div>
                            </th> 
                            <th className="whitespace-nowrap">
                              <div className="font-semibold text-left">
                                Added on
                              </div>
                            </th>*/}
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Actions
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-md divide-y divide-gray-300">
                        {bannerData.map((item) => (
                          <tr
                            key={item.id}
                            className=" text-center hover:bg-gray-100 hover transition-transform duration-300"
                          >
                            {" "}
                            {/* Add a className for styling */}
                            <td className="">{item.id}</td>
                            <td className=" whitespace-nowrap">
                              <div className="text-left">
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
                            {/* <td className="p-6 whitespace-nowrap">
                                <div className="text-left font-medium">
                                  {item.title}
                                </div>
                              </td> */}
                            <td className="whitespace-nowrap">
                              <div className="text-left font-medium ">
                                {item.routing}
                              </div>
                            </td>
                            <td className="whitespace-nowrap">
                              <div className="text-left font-medium">
                                {item.contact}
                              </div>
                            </td>
                            <td className="whitespace-nowrap">
                              <div className="text-left font-medium">
                                {item.display}
                              </div>
                            </td>
                            <td className="whitespace-nowrap ">
                              <div className="text-left font-medium w-200">
                                {item.featured}
                              </div>
                            </td>
                            <td className="whitespace-nowrap">
                              <div className="text-left font-medium">
                                {item.rating}
                              </div>
                            </td>
                            {/* <td className="p-4 whitespace-nowrap">
                                <div className="text-left font-medium ">
                                  {item.type}
                                </div>
                              </td>
                              <td className="p-6 whitespace-nowrap">
                                <div className="text-left font-medium ">
                                  {item.address}
                                </div>
                              </td>
                              <td className="p-6 whitespace-nowrap">
                                <div className="text-left font-medium ">
                                  {item.addedOn}
                                </div>
                              </td> */}
                            <td className="pt-4 pb-4">
                              <div className="text-left font-medium">
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

                                {/* <button
                                    className="border border-blue-400 bg-white hover:bg-blue-400 text-blue-400 hover:text-white py-1 px-3 rounded inline-flex items-center mt-1"
                                    type="button"
                                  >
                                    Account Types
                                  </button> */}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default Serviceprovider;
