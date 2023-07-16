import React from "react";
import "../styles/loader.css";

const Loader = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-black flex justify-center items-center my-auto">
        <div className="flex flex-col space-y-40">
          <div className="item">
            <i className="loader --7"></i>
          </div>
          <div className="text-white text-center text-2xl">
            Did you know? <br />
            <span className="text-3xl">
              There are more than 7,300 cryptocurrencies currently out there.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
