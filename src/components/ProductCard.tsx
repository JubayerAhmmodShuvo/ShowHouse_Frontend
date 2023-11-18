import React from "react";
import { useRouter } from "next/navigation";
type Product = {
  _id?: string;
  name?: string;
  price?: number;
  image?: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  const handleBuyNow = () => {
    const paymentPageRoute = `/payment/${product?._id}`;
    router.push(paymentPageRoute);
  };

  return (
    <div>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-purple-500 ring-opacity-40 max-w-sm ">
        <div className="relative">
          <img className="w-full " src={product.image} alt="Product Image" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">
            {product.name || "Unnamed Product"}
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">${product.price || 0}</span>
            <button
              onClick={handleBuyNow}
              className="bg-purple-800 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
