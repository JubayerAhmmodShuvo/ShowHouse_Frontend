import React from "react";
import Aero from "../assets/11.jpg";
import Truck from "../assets/22.jpg";
import Man from "../assets/33.jpeg";

import Image from "next/image";

const Delivery = () => {
  return (
    <div className="mb-32 mt-20">
      <h1 className="text-3xl font-extrabold text-center my-20 ">
        <span className=" p-2 font-serif font-secondary text-secondary font-extrabold">
          Our Delivery Service
        </span>
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 my-10 gap-8 container ">
        <div className="card border card-compact w-96 bg-base-100 shadow-xl mx-auto ">
          <h1 className="text-3xl font-xl text-center p-4 text-secondary font-serif ">
            International Shipping
          </h1>
          <Image
            src={Aero}
            alt="stew"
            width={300}
            height={250}
            className="w-full lg:h-96 md:h-72 object-cover hover:animate-bounce"
          />
          <p className="text-justify p-6 text-lg">
            For the international delivery service our warehouse is one of the
            best in our country within time.If you want to grow your business
            you can feel free to contact with us anytime you need. We will
            always be there for you and help you to grow your business no matter
            where are you from.
          </p>
        </div>
        <div className="card border card-compact w-96 bg-base-100 shadow-xl mx-auto ">
          <h1 className="text-3xl font-xl text-center p-4 font-serif text-secondary ">
            Internal Shipping
          </h1>

          <Image
            src={Truck}
            alt="stew"
            width={300}
            height={250}
            className="w-full lg:h-96 md:h-72 object-cover hover:animate-bounce"
          />

          <p className="text-justify p-6 text-lg">
            Internal delivery service in our whole country from the werehouse is
            made so easy with this container vehicle. Those who are thinking for
            grow their business with us can easily stock any kind of books for
            their business. We can reach any corner of the country at any period
            of time.
          </p>
        </div>
        <div className="card border card-compact w-96 bg-base-100 shadow-xl mx-auto ">
          <h1 className="text-3xl font-xl text-center p-4 font-serif text-secondary ">
            City Shipping
          </h1>
          <Image
            src={Man}
            
            alt="stew"
            width={300}
            height={250}
            className="w-full lg:h-96 md:h-72 object-cover hover:animate-bounce"
          />
        
          <p className="text-justify p-6 text-lg">
            We are now living in an era where we can easily reach any corner of
            the city any time with our delivery man and stock items for business
            if one wants do some business. We can help you with our delivery man
            in the city to stock books.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
