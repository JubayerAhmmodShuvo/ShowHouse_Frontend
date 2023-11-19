
import { baseApi } from "./baseApi";

interface PaymentResponse {
  clientSecret: string | null; 
}

interface PaymentInfo {
  price: number;
  name: string;
  transactionId: string;
}

const Payment_URL = "/payment";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPayment: build.mutation<PaymentResponse, { data: PaymentInfo }>({
      query: (data) => ({
        url: `${Payment_URL}/create-payment`,
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useCreatePaymentMutation } = paymentApi;
