import React from "react";
import Link from "next/link";
import NotificationDropdown from "../Components/NotificationDropdown";
import UserDropdown from "../Components/UserDropdown";
import UserSimpleAvatar from "./UserSimpleAvatar";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav
        className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-slate-800 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
        style={{
          backgroundImage: "url(" + "/register_bg_2.png" + ")",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">

          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown transparent />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">

                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12  border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none pt-10 ">
              <li className="items-center rounded-md w-full hover:bg-pink-500 hover:text-white ">
                <Link
                  className="text-pink-500 hover:text-white text-xs uppercase py-3 font-bold block"
                  href="/Dashboard"
                >
                  <i className="fas fa-tv opacity-75 mr-2 text-sm"></i>{" "}
                  Tasks
                </Link>
              </li>

              <li className="items-center rounded-md w-full hover:bg-pink-500 hover:text-white ">
                <Link
                  className="text-pink-500 hover:text-white text-xs uppercase py-3 font-bold block"
                  href="/Dashboard/Friends"
                >
                  <i className="fas fa-tv opacity-75 mr-2 text-sm"></i>{" "}
                  Friends
                </Link>
              </li>


              <li className="items-center rounded-md w-full hover:bg-pink-500 hover:text-white ">
                <Link
                  className="text-pink-500 hover:text-white text-xs uppercase py-3 font-bold block"
                  href="/dashboard"
                >
                  <i className="fas fa-tv opacity-75 mr-2 text-sm"></i>{" "}
                  Logout
                </Link>
              </li>

 


            </ul>

            <div className="absolute bottom-5 w-full">
            <UserSimpleAvatar />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
