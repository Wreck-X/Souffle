import React from "react";
import TopBar from "../components/TopBar";
import PaymentCard from "../components/PaymentCard";

const Payment = () => {  
  return (
    <>
      <TopBar />
      <PaymentCard bankID="whadahek"/>
    </>
  );
};

export default Payment;
