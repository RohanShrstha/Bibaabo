"use client";
import React, { useState } from "react";
import Link from "next/link";
import "tailwindcss/tailwind.css";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="bg-white border border-gray-300 rounded-lg shadow-lg p-10"
        style={{ width: "30%" }}
      >
        <div className="mb-8">
          <img
            src="/logo.png"
            alt="Company Logo"
            className=" align-center"
            width={200}
            priority
          />
        </div>
        <div className="text-gray-400 text-2base">
          <b> Hello! Let's get started</b> <br />
          Sign in to continue.
        </div>

        <form>
          <div className="mt-4">
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Email"
            />
          </div>
          <div className="mt-4">
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Password"
            />
          </div>
          <Link href="/dashboard">
            <div className="mt-4 flex justify-between items-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm w-full"
                href="/dashboard"
              >
                SIGN IN
              </button>
            </div>
          </Link>
        </form>
        <div className="flex items-center mt-8">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-500"
          />
          <span className="ml-3 text-sm text-gray-600">Keep me logged in</span>
          <a href="/forgotpassword" className="ml-auto">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
