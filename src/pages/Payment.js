import React from "react";
import TopBar from "../components/TopBar";
import PaymentCard from "../components/PaymentCard";

const Payment = () => {  
  return (
    <>
      <TopBar />
      <PaymentCard bankID="sb-al7am26189088@business.example.com"/>
    </>
  );
};

export default Payment;
