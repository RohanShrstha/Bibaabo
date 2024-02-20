import React from "react";
import "tailwindcss/tailwind.css";
import NavBarComponent from "../components/NavBarComponent";
import SideBar from "../components/SideBar";
import Footer from "../components/AdminFooter";
const Dashboard = () => {
  return (
    <>
      <NavBarComponent />
      <div className="flex h-full">
        <div className=" h-full ">
          <SideBar />
        </div>
        <div
          className="mt-20 mb-10 h-full w-full"
          style={{
            minHeight: "76.73vh",
            marginLeft: "260px",
            marginRight: "30px",
          }}
        >
          {/* <div className="bg-gray-100 shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">KYC Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-500 text-white p-8 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">Pending</h3>
                <h1 className="text-4xl font-bold">7</h1>
              </div>
              <div className="bg-green-500 text-white p-8 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">Verified</h3>
                <h1 className="text-4xl font-bold ">10</h1>
              </div>
            </div>
          </div> */}
          <h1 className="text-6xl text-gray-400 mt-4 ml-4">
            Bibaabo, Dashboard!
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
