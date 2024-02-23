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
                {/* Upper Heading */}
                <div class="flex flex-col justify-center h-full">
                  <header class="px-5 py-1 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="card-title text-sm">
                        <b>KYC Detail</b> --- Received At: Monday, February 12,
                        2024 11:50 PM
                      </h2>
                    </div>
                  </header>
                </div>

                {/* Verified Section */}
                <div class="flex items-center justify-between mt-2">
                  <div class="flex items-center left">
                    <input type="checkbox" class="mr-4 leading-tight w-4 h-4" />
                    <label for="checkbox text-gray-300" class="mr-8">
                      KYC Verified
                    </label>
                  </div>

                  <div class="center">
                    <select class="px-2 py-1 border w-96 outline-none bg-gray-200">
                      <option>Select Status</option>
                      <option>Received</option>
                      <option>Processing</option>
                      <option>Invalid</option>
                      <option>Valid</option>
                      <option>Rejected</option>
                      <option>Archieve</option>
                      <option>Verified</option>
                    </select>
                  </div>

                  <div class="flex items-center right">
                    <button class="px-4 py-2 bg-blue-500 text-white rounded-md">
                      Update
                    </button>
                  </div>
                </div>

                <form class="w-full  mt-4">
                  {/* Two tables */}
                  <div class="flex">
                    {/* First Table */}
                    <div class="w-1/2 px-3 mb-6 md:mb-0">
                      <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                              <table class="min-w-full text-left text-sm font-light border">
                                <thead class="border-b font-medium">
                                  <tr>
                                    <th scope="col" class="px-6 py-4">
                                      Item
                                    </th>
                                    <th scope="col" class="px-6 py-4">
                                      Details
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                                      Uploaded by
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                      <img
                                        src="http://139.59.41.77/storage/images/bank/logos/download-18-20230901081927-zMmjOF.png"
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                          borderRadius: "50%",
                                        }}
                                      />
                                    </td>
                                  </tr>
                                  <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                                      Name
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4 flex items-center">
                                      Sandesh Rimal
                                      <div className="text-xs text-white bg-red-500 px-2 py-1 w-20 ml-2">
                                        Not Verified
                                      </div>
                                    </td>
                                  </tr>
                                  <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                                      Email
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                      sandeshrimal@gmail.com
                                    </td>
                                  </tr>
                                  <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                                      Phone
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                      9808633563
                                    </td>
                                  </tr>
                                  <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                                      KYC Created for
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                      <div className=" bg-yellow-400  w-8">
                                        <i>other</i>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Second Table */}
                    <div class="w-1/2 px-3 mb-6 md:mb-0">
                      <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                              <table class="min-w-full text-left text-sm font-light border">
                                <thead class="border-b font-medium">
                                  <tr>
                                    <th scope="col" class="px-6 py-4">
                                      Item
                                    </th>
                                    <th scope="col" class="px-6 py-4">
                                      Details
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                                      KYC CODE
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4 flex items-center">
                                      KYC-EGZPK-1707761155
                                      <div className="text-xs text-white bg-green-500 px-2 py-1 w-20 ml-2">
                                        Verified
                                      </div>
                                    </td>
                                  </tr>
                                  <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                                      Full Name
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4 flex items-center">
                                      Mr. Sandesh Rimal
                                    </td>
                                  </tr>
                                  <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                                      Gender
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                      male
                                    </td>
                                  </tr>
                                  <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                                      Nationality
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                      Nepali
                                    </td>
                                  </tr>
                                  <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                                      Maritial Status
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                      Single
                                    </td>
                                  </tr>
                                  <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                                      DOB
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                      977 , 9841000000 , 9841000000 ,
                                      hr@bibaabo.com
                                    </td>
                                  </tr>
                                  <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                                      Remarks
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                      Dangerous
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* PP and Signature */}
                  <div class="mb-6 w-1/2 ml-2" style={{ marginTop: "-60px" }}>
                    <div class="flex">
                      {/* <!-- First Image --> */}
                      <div className="firstimage  p-4 bg-white border border-gray-200 rounded-lg shadow-xl">
                        <h1 className="text-lg text-left border-b ">
                          <b>PP Photo </b>
                        </h1>
                        <label
                          for="grid-image"
                          class="block relative w-60 h-60 bg-gray-200 border border-gray-200 rounded cursor-pointer z-0 mt-4"
                        >
                          <img src="/profile.png" />
                        </label>
                      </div>
                      {/* <!-- Second Image --> */}
                      <div className="secondimage  p-4 bg-white border border-gray-200 rounded-lg shadow-xl ml-4">
                        <h1 className="text-lg text-left border-b ">
                          <b>Signature</b>
                        </h1>
                        <label
                          for="grid-image"
                          class="block relative w-60 h-60 bg-gray-200 border border-gray-200 rounded cursor-pointer z-0 mt-4"
                        >
                          <img src="/sign.jpeg" />
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Table 1 */}
                  <div className="p-3 shadow-xl border">
                    <h1 className="text-xl text-left pb-2">
                      <b>Address</b>
                    </h1>
                    <hr class="border-t border-gray-300" />
                    <table className=" divide-y divide-gray-600 w-full ">
                      <thead className="text-sm font-bold">
                        <tr className=" h-14">
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">S.N.</div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">Type</div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Province
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">Zone</div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              District
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              VDC/Municipality
                            </div>
                          </th>
                          <th className=" whitespace-nowrap">
                            <div className="font-semibold text-left">Ward</div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Street/Tole
                            </div>
                          </th>

                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              House No
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Contact
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-xs divide-y divide-gray-600">
                        <tr className=" text-center hover:bg-gray-100 hover transition-transform duration-300  h-12">
                          <td className="text-left ">1</td>
                          <td className=" whitespace-nowrap">
                            <div className="text-left">current</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium ">
                              3 undefined
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">hdjs</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">hsjsj</div>
                          </td>
                          <td className="whitespace-nowrap ">
                            <div className="text-left font-medium w-200">
                              hdjs
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">3</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">bfhdh</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">2</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">,,</div>
                          </td>
                        </tr>
                        <tr className=" text-center hover:bg-gray-100 hover transition-transform duration-300  h-12">
                          <td className="text-left">1</td>
                          <td className=" whitespace-nowrap">
                            <div className="text-left">current</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium ">
                              3 undefined
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">hdjs</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">hsjsj</div>
                          </td>
                          <td className="whitespace-nowrap ">
                            <div className="text-left font-medium w-200">
                              hdjs
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">3</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">bfhdh</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">2</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">,,</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Table 2 */}
                  <div className="p-3 shadow-xl border mt-8">
                    <h1 className="text-xl text-left pb-2">
                      <b>Documents</b>
                    </h1>
                    <hr class="border-t border-gray-300" />
                    <table className=" divide-y divide-gray-600 w-full ">
                      <thead className="text-sm font-bold">
                        <tr className=" h-14">
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">S.N.</div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">Type</div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Number
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Office Of Issuance
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Date of Issuance
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Issue District
                            </div>
                          </th>
                          <th className=" whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Valid Till
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">Front</div>
                          </th>

                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">Back</div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Selfiee
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-xs divide-y divide-gray-600">
                        <tr className=" text-center hover:bg-gray-100 hover transition-transform duration-300  h-12"></tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Table 3 */}
                  <div className="p-3 shadow-xl border mt-8">
                    <h1 className="text-xl text-left pb-2">
                      <b>Occupation</b>
                    </h1>
                    <hr class="border-t border-gray-300" />
                    <table className=" divide-y divide-gray-600 w-full ">
                      <thead className="text-sm font-bold">
                        <tr className=" h-14">
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">S.N.</div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">Type</div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Office
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Address
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Position
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Est. Annual Income
                            </div>
                          </th>
                          <th className=" whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Est. Annual Turnover
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Contact
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-xs divide-y divide-gray-600">
                        <tr className=" text-center hover:bg-gray-100 hover transition-transform duration-300  h-12">
                          <td className="text-left ">1</td>
                          <td className=" whitespace-nowrap">
                            <div className="text-left">private</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium ">bxbxnx</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">hdjs</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">hdjs</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">67888</div>
                          </td>
                          <td className="whitespace-nowrap ">
                            <div className="text-left font-medium w-200">
                              7788
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">
                              96667777
                            </div>
                          </td>
                        </tr>
                        <tr className=" text-center hover:bg-gray-100 hover transition-transform duration-300  h-12"></tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Table 4 */}
                  <div className="p-3 shadow-xl border mt-8">
                    <h1 className="text-xl text-left pb-2">
                      <b>Address</b>
                    </h1>
                    <hr class="border-t border-gray-300" />
                    <table className=" divide-y divide-gray-600 w-full ">
                      <thead className="text-sm font-bold">
                        <tr className=" h-14">
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">S.N.</div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Relation
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Full Name
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Citizenship No.
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Place of Issue
                            </div>
                          </th>
                          <th className="whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Date of Issue
                            </div>
                          </th>
                          <th className=" whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Contact
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-xs divide-y divide-gray-600">
                        <tr className=" text-center hover:bg-gray-100 hover transition-transform duration-300  h-12">
                          <td className="text-left ">1</td>
                          <td className=" whitespace-nowrap">
                            <div className="text-left">father</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium ">hdjs</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">6373728</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">hsjjd</div>
                          </td>
                          <td className="whitespace-nowrap ">
                            <div className="text-left font-medium w-200">
                              2053/06/06
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">
                              95959595
                            </div>
                          </td>
                        </tr>
                        <tr className=" text-center hover:bg-gray-100 hover transition-transform duration-300  h-12">
                          <td className="text-left">2</td>
                          <td className=" whitespace-nowrap">
                            <div className="text-left">mother</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium ">
                              bdjdjdjs
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">7272828</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">bdjdjdj</div>
                          </td>
                          <td className="whitespace-nowrap ">
                            <div className="text-left font-medium w-200">
                              2050/09/09
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">
                              95659959494
                            </div>
                          </td>
                        </tr>
                        <tr className=" text-center hover:bg-gray-100 hover transition-transform duration-300  h-12">
                          <td className="text-left">3</td>
                          <td className=" whitespace-nowrap">
                            <div className="text-left">grand_father</div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium ">
                              bdjdjdjs
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">
                              727286228
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">asddasd</div>
                          </td>
                          <td className="whitespace-nowrap ">
                            <div className="text-left font-medium w-200">
                              2050/06/06
                            </div>
                          </td>
                          <td className="whitespace-nowrap">
                            <div className="text-left font-medium">
                              94126149651
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
