import React from "react";
import "tailwindcss/tailwind.css";
import NavBarComponent from "../components/NavBarComponent";
import SideBar from "../components/SideBar";
import Footer from "../components/AdminFooter";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";

const eLoan = () => {
  const bannerData = [
    {
      id: 1,
      imageUrl:
        "http://139.59.41.77/storage/images/account/images/app-bannersartboard-1-copy-5-20240114204717-KsRPgu.png",
      title: "Working Capital loan",
      slug: "working-capital-loan",
      icon: "http://139.59.41.77/storage/images/account/icons/rectangle-1153-20230912091636-FBcjw4.webp",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      addedOn: "Monday, February 19, 2024 4:03 PM",
    },
    {
      id: 2,
      imageUrl:
        "http://139.59.41.77/storage/images/account/icons/group-790-1-20240108171307-DZEzvG.png",
      title: "Share Loan",
      slug: "share-loan",
      icon: "http://139.59.41.77/storage/images/banner/images/111-20240204124155-3L0r0F.PNG",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      addedOn: "Monday, February 19, 2024 4:21 PM",
    },

    {
      id: 3,
      imageUrl:
        "http://139.59.41.77/storage/images/account/images/app-bannersartboard-1-copy-9-20240114204738-QuwCDr.png",
      title: "Education Loan",
      slug: "education-loan",
      icon: "http://139.59.41.77/storage/images/account/icons/group-786-20230912091656-ymbWEO.webp",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      addedOn: "Monday, February 19, 2024 4:03 PM",
    },
    {
      id: 4,
      imageUrl:
        "http://139.59.41.77/storage/images/account/images/app-bannersartboard-1-copy-13-20240114204724-QcTzi6.png",
      title: "Vehicle loan",
      slug: "vehicle-loan",
      icon: "http://139.59.41.77/storage/images/account/icons/group-788-20230912091647-ct5aHH.webp",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      addedOn: "Monday, February 19, 2024 4:03 PM",
    },
    {
      id: 5,
      imageUrl:
        "http://139.59.41.77/storage/images/banner/images/111-20240204124155-3L0r0F.PNG",
      title: "Business Loan",
      slug: "business-loan",
      icon: "http://139.59.41.77/storage/images/account/icons/group-1202-20230912102414-ktmuxn-20240110061647-jq2Uzo.png",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      addedOn: "Monday, February 19, 2024 4:03 PM",
    },
    {
      id: 6,
      imageUrl:
        "http://139.59.41.77/storage/images/account/images/app-bannersartboard-1-copy-15-20240114204710-PC8JRn.png",
      title: "Personal Loan",
      slug: "personal-loan",
      icon: "http://139.59.41.77/storage/images/account/icons/group-337-20240108171314-189n9l.png",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      addedOn: "Monday, February 19, 2024 4:03 PM",
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
                        All <b>Loan Types</b>
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
                              <div class="font-semibold text-left">Image</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                              <div class="font-semibold text-left">Title</div>
                            </th>
                            <th class="whitespace-nowrap">
                              <div class="font-semibold text-center">Slug</div>
                            </th>
                            <th class="whitespace-nowrap">
                              <div class="font-semibold text-center">Icon</div>
                            </th>
                            <th class=" whitespace-nowrap">
                              <div class="font-semibold text-center">
                                Display
                              </div>
                            </th>

                            <th class="pl-8 whitespace-nowrap">
                              <div class="font-semibold text-left">
                                Added On
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
                                  {item.slug}
                                </div>
                              </td>
                              <td class="p-4 whitespace-nowrap">
                                <div class="text-left font-medium">
                                  <div class="text-left">
                                    {" "}
                                    <img
                                      src={item.icon}
                                      style={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50%",
                                      }}
                                    />
                                  </div>
                                </div>
                              </td>
                              <td class="p-4 whitespace-nowrap">
                                <div class="text-left font-medium">
                                  {item.display}
                                </div>
                              </td>
                              <td class="p-8 whitespace-nowrap ">
                                <div class="text-left font-medium w-200">
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

export default eLoan;
