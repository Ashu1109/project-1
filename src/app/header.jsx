"use client";

import Link from "next/link";
import { LogoutBtn } from "../components/client";
import "./app.css";
const Header = () => {
  
  const handleClick = () => {
    document.getElementById("toggle")?.classList.toggle("done");
    document.getElementById("arrow")?.classList.toggle("hide");
    document.getElementById("arrow")?.classList.add("show");
    document.getElementById("burger")?.classList.toggle("show");
    document.getElementById("burger")?.classList.toggle("hide");
  };
  return (
    <div  className=" h-16 w-full bg-indigo-300 flex justify-between items-center">
      <div className=" ml-8">
        <Link  className="text-2xl" href={"/"}>
          ToDo.
        </Link>
      </div>
      <div className=" hidden md:block mr-8">
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
      <div
        onClick={handleClick}
        className="md:hidden transition-transform absolute z-20 top-4 right-4 block"
      >
        <div id="arrow" className="hide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div id="burger" className="show">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      </div>
      <div
        id="toggle"
        className="z-10 active transition done md:hidden flex h-[100vh] justify-center items-center bg-indigo-200 w-1/2"
      >
        <main className=" flex min-h-screen flex-col pt-32 justify-start items-center w-full ">
          <div className="w-full h-[77vh] flex flex-col text-2xl  items-center justify-start">
            <Link
              onClick={handleClick}
              className="m-5 w-11/12 hover:bg-indigo-400 bg-indigo-300 shadow-lg shadow-indigo-300  transition h-12 rounded-2xl items-center justify-center flex "
              href={"/"}
            >
              Home
            </Link>
            <Link
              onClick={handleClick}
              className="m-5 w-11/12 hover:bg-indigo-400 bg-indigo-300 shadow-lg shadow-indigo-300  transition h-12 rounded-2xl items-center justify-center flex "
              href={"/profile"}
            >
              Profile
            </Link>
            <Link
              onClick={handleClick}
              className="m-5 w-11/12 hover:bg-indigo-400 bg-indigo-300 shadow-lg shadow-indigo-300  transition  h-12 rounded-2xl items-center justify-center flex "
              href={"/"}
            >
              <LogoutBtn />
            </Link>
            <Link
              onClick={handleClick}
              className="m-5 w-11/12 hover:bg-indigo-400 bg-indigo-300 shadow-lg shadow-indigo-300  transition  h-12 rounded-2xl items-center justify-center flex "
              href={"/signup"}
            >
              SignUp
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Header;
