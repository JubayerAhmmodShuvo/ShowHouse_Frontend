"use client"


const HeroSection = () => {
  return (
    <div className="mt-7 ">
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4948095c2bd04bbcb5c2af1601154a02_9366/Stan_Smith_Lux_Shoes_White_HP2201_HM1.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 ">
            <h2 className="mb-5 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none ">
              ShoeHouse
              <br className="hidden md:block  " />
              Elevate Your Look,{" "}
              <span className="inline-block font-serif text-purple-500 mt-3">
                Elevate Your Comfort.
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base font-serif text-gray-700 md:text-lg">
              Elevate Your Every Step. Discover a curated selection of trendy
              and comfortable footwear. Stride in style with ShoeHouse – where
              fashion meets function.
            </p>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-800  p-2 hover:bg-purple-700 focus:outline-none focus:bg-gray-700"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;