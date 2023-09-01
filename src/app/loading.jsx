import React from "react";

const loading = () => {
  return (
    <>
      <div className="flex min-h-screen justify-center items-center">
        <div className=" h-16 w-16 rounded-full border-b-4 border-t-4 border-b-sky-600 border-t-indigo-700 animate-spin"></div>
      </div>
    </>
  );
};
export default loading;
