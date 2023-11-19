"use client";
import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useCreatePaymentMutation } from "@/redux/api/paymentApi";
import { getUserInfo } from "@/services/auth.service";

interface Product {
  _id: string;
  name: string;
  price: number;
}

interface PaymentResponse {
  clientSecret: string | null;
}

type ApiResponse<T> = {
  data?: T | null;
  error?: unknown;
};

function generateTransactionId() {
  const timestamp = new Date().getTime();
  const randomValue = Math.floor(Math.random() * 1000);
  return `txn_${timestamp}_${randomValue}`;
}

export default function PaymentForm({ product }: { product: Product }) {
  const [paymentInfo, setPaymentInfo] = useState({
    price: 0,
    name: "",
    transactionId: "",
  });

  const stripe = useStripe();
  const elements = useElements();
 // const router = useRouter();
  const [createPayment, { isSuccess, isError }] = useCreatePaymentMutation();

  const { role, name,email } = getUserInfo() as any;

  useEffect(() => {
    if (product) {
      setPaymentInfo({
        price: product.price,
        name: product.name,
        transactionId: generateTransactionId(),
      });
    }
  }, [product]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cardElement = elements?.getElement("card");
    console.log("Payment Info:", paymentInfo);

    try {
      if (!stripe || !cardElement) return;
        const userInfo = getUserInfo() as any;
        setPaymentInfo({
          ...paymentInfo,
          name: userInfo.name,
       //   email: userInfo.email,
        });


      const response: ApiResponse<PaymentResponse> = await createPayment({
        data: paymentInfo,
      });
      console.log("Full API Response:", response);

      if (!response) {
        console.error("API response is null or undefined");
        return;
      }

      if (response.error) {
        console.error("API error:", response.error);
        toast.error("Payment failed.");
        return;
      }

      const client_secret = response.data?.clientSecret;

      if (!client_secret) {
        console.error("Client secret is missing in the response");
        toast.error("Payment failed.");
        return;
      }

      console.log("Client Secret:", client_secret);

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(client_secret, {
          payment_method: {
            card: cardElement,
          },
        });

      console.log("Confirm Payment Response:", paymentIntent);

      if (confirmError) {
        console.error("Failed to confirm payment:", confirmError);
        toast.error("Payment failed.");
      } else {
        console.log("Payment confirmed:", paymentIntent);
        toast.success("Payment successful!");

        const transactionId = paymentIntent.id;
        console.log("Transaction ID:", transactionId);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
          disabled={isSuccess || isError}
        >
          Pay
        </button>
      </div>
    </form>
  );
}
