import { useContext } from "react";
import { userContext } from "../../context/userContext/userContext";
import { Link } from "react-router-dom";

const Hero = () => {
  const {userInfo} = useContext(userContext);
  const buttonHandler = () => {
    console.log(userInfo)
  }
  return (
    <div className=" my-[60px] flex flex-col md:space-x-[10vw] md:flex-row  justify-center  lg:justify-normal">
      {/* Left side Image */}
      <div className="hidden order-2 md:order-1 md:flex w-full md:w-auto items-center justify-center">
        <div className="mt-[5vh] md:mt-0 relative w-[380px] h-[500px] rounded-t-[500px] rounded-b-[80px] ">
          <img
            className="object-cover h-full w-full absolute rounded-t-[500px] rounded-b-[80px]"
            src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt=""
          />
        </div>
      </div>

      {/* Right side */}
      <div className="order-1 md:order-2 flex flex-col space-y-12 items-center md:items-baseline h-full">
        {/* Hero text/ info */}
        <div className=" mt-[5vh]  flex flex-col space-y-5">
          <h1 className=" text-6xl lg:text-6xl xl:text-7xl  text-white font-syne min-w-[270px] max-w-[500px] tracking-wide ">
            Light Up Your Home
          </h1>
          <p className="text-secondary font-light min-w-[280px] max-w-[500px] ">
            Check Out and Explore more additional lighting for home lighting
            solution from start to finish.
          </p>
        </div>
        
        {/* Button */}
        <div className="flex space-x-10 items-center ">
        <Link to="/products"><button onClick={buttonHandler} className=" w-[200px] h-[50px] bg-brand flex justify-center items-center text-white font-syne rounded-3xl space-x-2  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z"
              />
            </svg>
            <p>Shop Now</p>
          </button></Link>
          {/* Play button for some reason */}
          <div className="w-[60px] h-[60px] border-2 rounded-full flex justify-center items-center">
            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-b-[12px] border-b-transparent border-l-brand"></div>
          </div>
        </div>
        {/* Image */}
        <div className="mt-[5vh] md:mt-0 relative w-[270px] h-[400px] sm:w-[380px] sm:h-[500px] rounded-t-[500px] rounded-b-[80px] md:hidden">
          <img
            className="object-cover h-full w-full absolute rounded-t-[500px] rounded-b-[80px]"
            src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt=""
          />
        </div>
        {/* Numbers */}
        <div className="self-start md:self-auto mx-[5vh] md:mx-0 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 ">
          <div>
            <span className="text-white text-5xl md:text-2xl">
              27<span className="font-syne text-brand text-3xl md:text-xl">k+</span>
            </span>
            <p className="text-secondary text-xs font-medium w-28">Premium Quality Products</p>
          </div>
          <div>
          <span className="text-white text-5xl md:text-2xl">
              34<span className="font-syne text-brand text-3xl md:text-xl">k+</span>
            </span>
            <p className="text-secondary text-xs font-medium w-28">Lamp brands available</p>
          </div>
          <div>
          <span className="text-white text-5xl md:text-2xl">
              165<span className="font-syne text-brand text-3xl md:text-xl">k+</span>
            </span>
            <p className="text-secondary text-xs font-medium w-28">Customers feel happy</p>
          </div>
          <div>
          <span className="text-white text-5xl md:text-2xl">
              50<span className="font-syne text-brand text-5xl md:text-xl">+</span>
            </span>
            <p className="text-secondary text-xs font-medium w-28">Stores all around the country</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
