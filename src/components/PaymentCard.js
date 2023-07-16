import React from "react";
import { Card } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

function PayPal() {
  return (
    <>
      <img
        src="https://rangers.co.th/wp-content/uploads/2018/09/paypal-logotype-png-510.png"
        alt="Secure payment in PayPal"
        className="h-[6rem] w-[13rem] ml-[88vw]"
      />
    </>
  );
}

function Input(props) {
  return (
    <>
      <div className="flex flex-col mt-20">
        <label className="text-xl">{props.label}</label>
        <input
          placeholder={props.placeholder}
          className="z-1 text-lg lg:w-[30rem] h-[4rem] md:w-[20rem] sm:w-[20rem] w-[10rem] rounded-full drop-shadow-lg p-5 text-black outline-none mt-2"
        ></input>
      </div>
    </>
  );
}

function PaymentCard(props) {
  return (
    <>
      <div className="flex justify-center items-center mt-14">
        <Card css={{ borderRadius: "2rem", height: "650px", width: "720px" }}>
          <div className="flex flex-col justify-center mx-auto">
            <h1 className="text-5xl font-bold mt-16 mb-8">Transfer Money</h1>
            <div className="mt-14">
              <label className="text-xl">Bank ID</label>
              <div className="z-1 bg-gray-200 text-lg lg:min-w-[30rem] min-h-[4rem] md:min-w-[20rem] sm:min-w-[20rem] min-w-[10rem] rounded-full drop-shadow-lg p-5 text-gray-600 outline-none mt-2">
                <div>{props.bankID}</div>
              </div>
              <Input
                label="PayPal ID"
                placeholder="Enter your email, phone or id"
              />
              <Input label="Amount (in USD)" placeholder="Enter amount" />
            </div>
            <Button className="mx-auto w-[10rem] h-[3rem] rounded-full mt-[5rem] text-black outline outline-1">
              Transfer
            </Button>
          </div>
        </Card>
      </div>
      <PayPal />
    </>
  );
}
export default PaymentCard;
