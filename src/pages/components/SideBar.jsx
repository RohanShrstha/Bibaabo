"use client";
import { useState } from "react";
import Link from "next/link";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { BiHome } from "react-icons/bi";
import { TfiViewList } from "react-icons/tfi";
import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();
  return (
    <div className="flex h-screen fixed">
      <div className="flex-row lg:flex bg-customBlue text-white w-60">
        <div className="flex flex-col w-full  shadow lg:h-screen lg:w-72">
          <div className="space-y-3">
            <div className="flex-1">
              {/* Logo */}
              <a href="/dashboard">
                <img
                  src="/logo.png"
                  alt="Bibaabo"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "white",
                    padding: "1.5rem 5rem 1.25rem  0",
                  }}
                />
              </a>
              <ul className="pt-2 pb-4 text-sm mt-3 leading-1">
                <li className="rounded-sm px-4 py-2 font-medium text-gray-500 duration-300 ease-in-out hover:bg-gray-800 hover:text-blue-500 active">
                  <Link
                    href="/dashboard"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <BiHome size={20} />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li className="rounded-sm px-4 py-2 font-medium text-gray-500 duration-300 ease-in-out hover:bg-gray-800 hover:text-blue-500 active">
                  <Link
                    href="/banner"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <TfiViewList size={20} />
                    <span>Banner</span>
                  </Link>
                </li>
                <div className="heading text-center mt-1">
                  <span className="text-gray-400 font-bold">
                    eBank Management
                  </span>
                  <hr className="ml-2 mr-2 border-t border-gray-700" />
                </div>
                <li className="rounded-sm px-4 py-2 font-medium text-gray-500 duration-300 ease-in-out hover:bg-gray-800 hover:text-blue-500 active">
                  <Link
                    href="/eBankServices"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <GiCardboardBoxClosed size={20} />

                    <span>eBank Services</span>
                  </Link>
                </li>
                <li className="rounded-sm px-4 py-2 font-medium text-gray-500 duration-300 ease-in-out hover:bg-gray-800 hover:text-blue-500 active">
                  <Link
                    href="/eBankAccount"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <TfiViewList size={20} />
                    <span>eBank Account Types</span>
                  </Link>
                </li>
                <li className="rounded-sm px-4 py-2 font-medium text-gray-500 duration-300 ease-in-out hover:bg-gray-800 hover:text-blue-500 active">
                  <Link
                    href="/eLoan"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <TfiViewList size={20} />
                    <span>eLoan</span>
                  </Link>
                </li>
                <li className="rounded-sm px-4 py-2 font-medium text-gray-500 duration-300 ease-in-out hover:bg-gray-800 hover:text-blue-500 active">
                  <Link
                    href="/bank"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <BiHome size={20} />
                    <span>Bank</span>
                  </Link>
                </li>
                <div className="heading text-center">
                  <span className="text-gray-400 font-bold">
                    eBima Management
                  </span>
                  <hr className="ml-2 mr-2 border-t border-gray-700" />
                </div>
                <li className="rounded-sm px-4 py-2 font-medium text-gray-500 duration-300 ease-in-out hover:bg-gray-800 hover:text-blue-500 active">
                  <Link
                    href="/eBimaAccount"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <TfiViewList size={20} />
                    <span>eBima Accounts</span>
                  </Link>
                </li>
                <li className="rounded-sm px-4 py-2 font-medium text-gray-500 duration-300 ease-in-out hover:bg-gray-800 hover:text-blue-500 active">
                  <Link
                    href="/eBima"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <BiHome size={20} />
                    <span>Bima</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
