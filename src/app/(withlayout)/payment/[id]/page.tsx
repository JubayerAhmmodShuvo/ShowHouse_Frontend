"use client";
import PaymentForm from "@/components/CheckoutForm";
import { useGetProductByIdQuery } from "@/redux/api/productsApi";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
type IDProps = {
  params: any;
};

export default function Home({ params }: IDProps) {
  const { id: productId } = params;
  
  const { data: product } = useGetProductByIdQuery(productId);

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:my-48 my-32  ">
      <div className="card w-50 h-full bg-base-100 shadow-xl mb-7 ">
        <div className="card-body p-5 text-center ">
          <p className="text-success font-serif font-bold mx-auto mb-4">
            Hello
          </p>
          <h2 className="card-title mx-auto text-center ">
            Please Pay for{" "}
            <span className="text-secondary mb-2 font-serif font-semibold text-purple-700 ">
              {product?.name }{" "}
             
            </span>
          </h2>

          <p className="font-bold text-center mt-4 ">
            Total Amount: $ {""}
             <span className="text-purple-700 font-serif">
              {product?.price}
            </span>
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 shadow-2xl bg-base-100 p-6 ">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <PaymentForm product={product } />
          </Elements>
        </div>
      </div>
    </div>
  );
}
