import { baseApi } from "./baseApi";

const Product_URL = "/product";

export const productsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => ({
        url: `${Product_URL}/`,
        method: "GET",
      }),
    }),

    getProductById: build.query({
      query: (productId) => ({
        url: `${Product_URL}/${productId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} = productsApi;
