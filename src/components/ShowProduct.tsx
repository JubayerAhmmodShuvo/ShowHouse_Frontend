"use client";
import React from 'react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useGetAllProductsQuery } from '@/redux/api/productsApi';
import ProductCard from './ProductCard';

const ShowProduct = () => {
  const router = useRouter();
  const { data: products, isLoading } = useGetAllProductsQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      pollingInterval: 2000,
    }
  );
  return (
    <div className="my-10 mx-auto ">
      <h1 className='text-center my-8 text-purple-700 font-serif font-bold text-2xl ' >Products</h1>
      {products && products?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-center">
          {products?.map(
            (product: {
              _id?: string;
              name?: string;
              price?: number;
              image?: string;
            }) => (
              <ProductCard key={product?._id} product={product} />
            )
          )}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};
export default ShowProduct;