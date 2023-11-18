
import { baseApi } from "./baseApi";

const Payment_URL = "/payment";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPaymentIntent: build.query({
      query: (price) => ({
        url: `${Payment_URL}/create-payment-intent`,
        method: "POST",
        body: { price },
      }),
    }),

  }),
});

export const { useCreatePaymentIntentQuery } =
  paymentApi;
