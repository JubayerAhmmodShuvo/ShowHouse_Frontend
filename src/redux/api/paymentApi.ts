import { baseApi } from "./baseApi";

const Payment_URL = "/payment";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPayment: build.mutation({
      query: (data) => ({
        url: `${Payment_URL}/create-payment`,
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useCreatePaymentMutation } = paymentApi;
