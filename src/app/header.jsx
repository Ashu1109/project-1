"use client";

import Link from "next/link";
import { LogoutBtn } from "../components/client";
import "./app.css";
const Header = () => {
  const handleClick = () => {
    // document.getElementById('navBar').classList.toggle('h-16')
    document.getElementById("navBar").classList.toggle("active");
    document.getElementById("onclicking").classList.toggle("hidden");
    document.getElementById("links").classList.toggle("blocking");
  };
  return (
    <>
      <div className="hidden h-16 w-full bg-indigo-300 md:flex justify-between items-center">
        <div className=" hidden md:block ml-8">
          <Link className="text-2xl" href={"/"}>
            ToDo.
          </Link>
        </div>
        <div className=" hidden md:block md:mr-8">
          <Link className="p-4 text-xl hover:text-indigo-100" href={"/"}>
            Home
          </Link>
          <Link className="p-4 text-xl hover:text-indigo-100" href={"/profile"}>
            Profile
          </Link>
          <LogoutBtn />
          <Link className="p-4 text-xl hover:text-indigo-100" href={"/signup"}>
            Signup
          </Link>
        </div>
      </div>
      <div
        onClick={handleClick}
        id="navBar"
        className=" md:hidden h-16 w-full bg-indigo-300 flex justify-between items-center"
      >
        <div className=" md:hidden block ml-8">
          <Link className="text-2xl" href={"/"}>
            ToDo.
          </Link>
        </div>
        <div className="md:hidden block mr-4">
          <div className=" flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </div>
          <div id="onclicking" className="hidden ">
            <div id="links" className="">
              <Link className="p-2 text-xl hover:text-indigo-100" href={"/"}>
                Home
              </Link>
              <Link
                className="p-2 text-xl hover:text-indigo-100"
                href={"/profile"}
              >
                Profile
              </Link>
              <LogoutBtn />
              <Link
                className="p-2 text-xl hover:text-indigo-100"
                href={"/signup"}
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
