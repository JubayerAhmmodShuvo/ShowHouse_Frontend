import Delivery from "@/components/Delivery";
import HeroSection from "@/components/Main/HeroSection";
import ShowProduct from "@/components/ShowProduct";
import Summary from "@/components/Summary";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ShowProduct />
      <Summary />
      <Delivery />
    </>
  );
};

export default HomePage;
