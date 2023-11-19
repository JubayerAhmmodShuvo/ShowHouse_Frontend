"use client";
import { useCreatePaymentMutation } from "@/redux/api/paymentApi";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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
  const [paymentInfo, setPaymentInfo] = React.useState({
    price: 0,
    name: "",
    transactionId: "",
  });

  const [clientSecret, setClientSecret] = React.useState<string | null>(null); 
  console.log(clientSecret);

  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [createPayment, { isSuccess, isError }] = useCreatePaymentMutation();

  React.useEffect(() => {
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
      if (!stripe || !cardElement) return null;

      const response: ApiResponse<PaymentResponse> = await createPayment({
        data: paymentInfo,
      });

      const client_secret = response?.data?.clientSecret;

      if (client_secret !== null && client_secret !== undefined) {
        console.log("Client Secret:", client_secret);
        setClientSecret(client_secret);

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
      } else {
        console.error(
          "Failed to create payment. Missing client_secret in the response:",
          response
        );
        toast.error("Payment failed.");
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
        >
          Pay
        </button>
      </div>
    </form>
  );
}
