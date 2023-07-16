import React from "react";
import { ChevronLeft, Home } from "react-iconly";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/topbar.css";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowBorder(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    if (window.location.pathname == "/home") {
      setShowBackButton(false);
    } else {
      setShowBackButton(true);
    }
  });

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div
      className={`sticky top-0 bg-[#ffffff] z-10 ${
        showBorder ? "border-b-2 border-opacity-100 border-transition" : ""
      } shadow-xl`}
    >
      <ol className="flex justify-evenly items-center p-4 font-bold">
        <div
          className={`transition ease-in-out cursor-pointer w-12 h-12 hover:bg-[#DDDDDD] flex items-center justify-center rounded-full ${
            !showBackButton ? "opacity-0" : ""
          }`}
        >
          <button onClick={goBack}>
            <li className="inline ">
              <ChevronLeft />
            </li>
          </button>
        </div>
        <div className="">
          <li className="text-3xl inline tracking-[.20em]">Souffle</li>
        </div>
        <div>
          <Link to="/">
            <li className="transition ease-in-out cursor-pointer w-12 h-12 hover:bg-[#DDDDDD] flex items-center justify-center rounded-full p-1">
              <Home set="bold" primaryColor="black" />
            </li>
          </Link>
        </div>
      </ol>
    </div>
  );
}

export default TopBar;
