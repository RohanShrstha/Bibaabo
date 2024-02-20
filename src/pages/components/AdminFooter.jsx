import Logout from "./LogoutComponent";

const AdminFooter = () => {
  return (
    <>
      <footer
        className="p-5 shadow bg-gray-800 text-white"
        style={{ paddingLeft: "270px" }}
      >
        <div className="w-full mx-auto max-w-screen-xl p-3 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white-500 dark:text-gray-400">
            Copyright © 2024{" "}
            <a href="/" className="hover:underline text-blue-400">
              Bibaabo
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-white-500 dark:text-gray-400 sm:mt-0">
            <p>{""}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AdminFooter;
