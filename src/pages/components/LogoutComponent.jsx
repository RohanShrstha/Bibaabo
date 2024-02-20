"use client";
import { useRouter } from "next/navigation";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";

const LogoutComponent = () => {
  return (
    <div>
      <Link href="/">
        <button
          className="text-blue-500 duration-300 ease-in-out hover:text-white active "
          style={{ fontSize: "22px" }}
        >
          <IoIosLogOut />
        </button>
      </Link>
    </div>
  );
};

export default LogoutComponent;
