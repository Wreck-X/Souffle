import React from "react";
import Search from "../components/Search";
import Charitycard from "../components/Charitycard";
import TopBar from "../components/TopBar";
import "../styles/charitypage.css";

function Home() {
  return (
    <>
      <div className="home-container h-full w-full">
        <TopBar></TopBar>
        <div className="h-[2rem]"></div>
        <div className="flex justify-center mt-10">
          <Search />
        </div>
        <div className="mt-32">
          <div className="grid items-center lg:grid-cols-3 md:grid-cols-2 lg:mx-48 md:mx-0 gap-y-9 my-9 place-items-center justify ">
            <Charitycard />
            <Charitycard />
            <Charitycard />
            <Charitycard />
            <Charitycard />
            <Charitycard />
            <Charitycard />
            <Charitycard />
            <Charitycard />
            <Charitycard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
