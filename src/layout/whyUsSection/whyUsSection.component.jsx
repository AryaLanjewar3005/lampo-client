import { useState } from "react";

const WhyUsSection = () => {
    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);

  
  const toggleHandler = () => {
    setToggle(!toggle)
  }
  const toggleHandler2 = ( ) => {
    setToggle2(!toggle2)
  }
  const toggleHandler3 = ( ) => {
    setToggle3(!toggle3)
  }
  
  

  return (
    <div className=" my-[60px] flex flex-col md:space-x-[10vw] md:flex-row   ">
      {/* Left side Image */}
      <div className="hidden order-2 md:order-1 md:flex w-full md:w-auto items-center justify-center">
        <div className="mt-[5vh] md:mt-0 relative w-[440px] h-[500px] rounded-t-[500px] rounded-b-[80px] ">
          <img
            className="object-cover h-full w-full absolute rounded-t-[500px] rounded-b-[80px]"
            src="https://images.unsplash.com/photo-1580130281320-0ef0754f2bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
        </div>
      </div>

      {/* Right side */}
      <div className="order-1 md:order-2 flex flex-col space-y-12 items-center md:items-baseline h-full md:mt-[10vh]">
        {/* Hero text/ info */}
        <div className=" mt-[5vh]  flex flex-col space-y-5">
          <h1 className=" text-5xl   text-white font-syne min-w-[270px] max-w-[500px] tracking-wide ">
            Why should you choose us as your partner?
          </h1>
          <div className="flex flex-col space-y-5 ">
            {/* first option */}
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <h3 className="text-white font-semibold">
                  Remote Light Control
                </h3>
                <span className="cursor-pointer" onClick={toggleHandler}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m7 10l5 5l5-5"
                    />
                  </svg>
                </span>
              </div>
              <p className={(toggle===true) ?  'flex text-secondary text-xs min-w-[270px] max-w-[400px] ':"hidden text-secondary text-xs min-w-[270px] max-w-[400px] "}>It's easier to control brightness with the remote control lamp, so you don't have to go to the light switch</p>
            </div>
             {/* second option */}
             <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <h3 className="text-white font-semibold">
                  Latest and modern design
                </h3>
                <span className="cursor-pointer" onClick={toggleHandler2}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m7 10l5 5l5-5"
                    />
                  </svg>
                </span>
              </div>
              <p className={(toggle2===true) ?  'flex text-secondary text-xs min-w-[270px] max-w-[400px] ':"hidden text-secondary text-xs min-w-[270px] max-w-[400px] "}>It's easier to control brightness with the remote control lamp, so you don't have to go to the light switch</p>
            </div>
            {/* third option */}
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <h3 className="text-white font-semibold">
                  Saving Electricity and Quality Control
                </h3>
                <span className="cursor-pointer" onClick={toggleHandler3}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m7 10l5 5l5-5"
                    />
                  </svg>
                </span>
              </div>
              <p className={(toggle3===true) ?  'flex text-secondary text-xs min-w-[270px] max-w-[400px] ':"hidden text-secondary text-xs min-w-[270px] max-w-[400px] "}>It's easier to control brightness with the remote control lamp, so you don't have to go to the light switch</p>
            </div>
            
          </div>
        </div>

        {/* Image */}
        <div className="mt-[5vh] md:mt-0 relative w-[270px] h-[400px] sm:w-[380px] sm:h-[500px] rounded-t-[500px] rounded-b-[80px] md:hidden">
          <img
            className="object-cover h-full w-full absolute rounded-t-[500px] rounded-b-[80px]"
            src="https://images.unsplash.com/photo-1580130281320-0ef0754f2bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default WhyUsSection;
