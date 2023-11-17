import Image from "next/image";
import not from "../assets/404.png";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Image src={not} width={350} alt="404 image" />
    </div>
  );
};

export default NotFoundPage;
