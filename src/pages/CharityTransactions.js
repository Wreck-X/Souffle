import React from "react";
import TopBar from "../components/TopBar";
import Transaction from "../components/Transaction";
import Graph from "../components/Graph";

export default function CharityTransactions() {
  const handleTransfer = () => {
    window.location.href = "/payment";
  };
  return (
    <>
      <TopBar></TopBar>
      <div className="h-[2.5rem]"></div>
      <p className="grid grid-cols-2 gap-16 -mb-10 ml-64 text-xl">Transactions</p>
      <div className="grid grid-cols-2 gap-16 m-14 mx-48">
        <div className=" justify-center items-center  overflow-scroll h-[40rem]">
          <Transaction></Transaction>
          <Transaction></Transaction>
          <Transaction></Transaction>
          <Transaction></Transaction>
          <Transaction></Transaction>
          <Transaction></Transaction>
          <Transaction></Transaction>
          <Transaction></Transaction>
          <Transaction></Transaction>
        </div>
        {/* <div className="flex justify-center items-center"> */}
        <Graph></Graph>
        {/* </div> */}

        <div className="flex flex-col">
          <div className="grid place-content-center h-full">
            <div
              class="btn btn-one flex justify-center items-center text-[23px] -mt-10 w-[20rem] h-[5rem]"
              onClick={handleTransfer}
            >
              <span>TRANSFER</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
