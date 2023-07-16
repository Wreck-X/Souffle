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
      <p className="grid grid-cols-2 gap-16 ml-64 -mb-10 text-xl">Transactions</p>
      <div className="grid grid-cols-2 gap-16 mx-48 m-14">
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
        {/* <div className="flex items-center justify-center"> */}
        <Graph></Graph>
        {/* </div> */}

        <div className="flex flex-col">
          <div className="grid h-full place-content-center">
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
