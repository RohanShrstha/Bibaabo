import React from "react";
import "tailwindcss/tailwind.css";
import NavBarComponent from "../components/NavBarComponent";
import SideBar from "../components/SideBar";
import Footer from "../components/AdminFooter";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";

const Banner = () => {
  const bannerData = [
    {
      id: 1,
      imageUrl:
        "http://139.59.41.77/storage/images/banner/images/111-20240204124155-3L0r0F.PNG",
      title: "hello",
      subTitle: "asdasd",
      page: "home",
      feature: "feature1",
      link: "-",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      addedOn: "Sunday, February 18, 2024 5:09 PM",
    },
    {
      id: 2,
      imageUrl:
        "http://139.59.41.77/storage/images/banner/images/png-clipart-scholarship-student-loan-bank-money-graduates-people-logo-thumbnail-20240204123923-x8XN9H.png",
      title: "hello",
      subTitle: "hgc",
      page: "home",
      feature: "feature3",
      link: "-",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      addedOn: "Sunday, February 18, 2024 5:09 PM",
    },
    {
      id: 3,
      imageUrl:
        "http://139.59.41.77/storage/images/banner/images/eagle-thumbnail-20240204122845-ZDxctp.png",
      title: "hey",
      subTitle: "sdfs",
      page: "eloan",
      feature: "feature2",
      link: "-",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      addedOn: "Sunday, February 18, 2024 5:09 PM",
    },
    {
      id: 4,
      imageUrl:
        "http://139.59.41.77/storage/images/banner/images/app-bannersartboard-1-copy-2-20240108174656-5AgXTB.png",
      title: "banner",
      subTitle: "bands",
      page: "ds",
      feature: "feature3",
      link: "-",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      addedOn: "Sunday, February 18, 2024 5:09 PM",
    },
    {
      id: 5,
      imageUrl:
        "http://139.59.41.77/storage/images/banner/images/app-bannersartboard-1-copy-8-20240114204345-lvhkuN.png",
      title: "dsdsds",
      subTitle: "dssddsds",
      page: "home",
      feature: "feature4",
      link: "-",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      addedOn: "Sunday, February 18, 2024 5:09 PM",
    },
    {
      id: 6,
      imageUrl:
        "http://139.59.41.77/storage/images/banner/images/app-bannersartboard-1-copy-4-20240108174639-XQ0tUK.png",
      title: "dsdsdss",
      subTitle: "sad",
      page: "home",
      feature: "feature0",
      link: "-",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      addedOn: "Sunday, February 18, 2024 5:09 PM",
    },
    {
      id: 7,
      imageUrl:
        "http://139.59.41.77/storage/images/banner/images/111-20240204124155-3L0r0F.PNG",
      title: "hello",
      subTitle: "hgc",
      page: "home",
      feature: "feature3",
      link: "-",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      addedOn: "Sunday, February 18, 2024 5:09 PM",
    },
    {
      id: 8,
      imageUrl:
        "http://139.59.41.77/storage/images/banner/images/111-20240204124155-3L0r0F.PNG",
      title: "hello",
      subTitle: "hgc",
      page: "home",
      feature: "feature3",
      link: "-",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      addedOn: "Sunday, February 18, 2024 5:09 PM",
    },
    {
      id: 9,
      imageUrl:
        "http://139.59.41.77/storage/images/banner/images/111-20240204124155-3L0r0F.PNG",
      title: "hello",
      subTitle: "hgc",
      page: "home",
      feature: "feature3",
      link: "-",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      addedOn: "Sunday, February 18, 2024 5:09 PM",
    },
    {
      id: 10,
      imageUrl:
        "http://139.59.41.77/storage/images/banner/images/111-20240204124155-3L0r0F.PNG",
      title: "hello",
      subTitle: "hgc",
      page: "home",
      feature: "feature3",
      link: "-",
      display: (
        <div className="rounded-full bg-green-400 w-10 p-2 text-white">
          <IoCheckmark size={20} />
        </div>
      ),
      addedOn: "Sunday, February 18, 2024 5:09 PM",
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
                              <div class="font-semibold text-left">Image</div>
                            </th>
                            <th class="p-2 whitespace-nowrap">
                              <div class="font-semibold text-left">Title</div>
                            </th>
                            <th class="whitespace-nowrap">
                              <div class="font-semibold text-center">
                                Sub Title
                              </div>
                            </th>
                            <th class="whitespace-nowrap">
                              <div class="font-semibold text-center">Page</div>
                            </th>
                            <th class=" whitespace-nowrap">
                              <div class="font-semibold text-center">
                                Feature
                              </div>
                            </th>
                            <th class="whitespace-nowrap w-20">
                              <div class="font-semibold text-center">Link</div>
                            </th>
                            <th class="whitespace-nowrap">
                              <div class="font-semibold text-center">
                                Display
                              </div>
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
                                  {item.subTitle}
                                </div>
                              </td>
                              <td class="p-4 whitespace-nowrap">
                                <div class="text-left font-medium">
                                  {item.page}
                                </div>
                              </td>
                              <td class="p-4 whitespace-nowrap">
                                <div class="text-left font-medium">
                                  {item.feature}
                                </div>
                              </td>
                              <td class="p-8 whitespace-nowrap ">
                                <div class="text-left font-medium w-200">
                                  {item.link}
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-left font-medium">
                                  {item.display}
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-left font-medium ">
                                  {item.addedOn}
                                </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                <div class="text-left font-medium">
                                  <td className="col-1">
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
                                  </td>
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

export default Banner;
