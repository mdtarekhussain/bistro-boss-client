import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import Section from "../../Component/Section/Section";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <br />
        <br />
        <Section className="mt-10" heading={"Payment"} subHeading={"Please pay to eat"} />
        <div className="max-w-2xl mx-auto mt-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <Elements stripe={stripePromise}>
              <CheckOutForm />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;