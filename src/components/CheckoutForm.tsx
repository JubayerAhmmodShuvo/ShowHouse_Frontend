"use client";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
interface Product {
  _id: string;
  name: string;
  price: number;
 
}

interface PaymentFormProps {
  product: Product;
}

export default function PaymentForm({ product }: PaymentFormProps) {
  console.log(product.name);
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cardElement = elements?.getElement("card");
    console.log(cardElement);

    try {
      if (!stripe || !cardElement) return null;
      const { data } = await axios.post("/api/create-payment-intent", {
        data: { amount: 89 },
      });
      const clientSecret = data;

      await stripe?.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(onSubmit);

  return (
    <form onSubmit={onSubmit} className="text-center">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="flex flex-col items-center mt-4">
        <button
          className="bg-purple-800 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded w-48 mt-16"
          type="submit"
        >
          Pay
        </button>
      </div>
    </form>
  );
}

