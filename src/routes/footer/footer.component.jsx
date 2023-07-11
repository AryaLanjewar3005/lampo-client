const Footer = () => {
  return (
    <div className=" mt-[60px]  border-t-2 border-secondary flex flex-col items-center ">
      <div className="mx-auto my-[80px] space-y-10 md:space-y-0 flex flex-col md:flex-row md:justify-between md:space-x-[10vw] ">
        {/* Left side */}
        <div className="flex flex-col justify-center md:justify-normal  space-y-5 min-w-[260px] max-w-[400px]">
          <div className="flex flex-col space-y-3">
            <span className="text-bold text-white text-xl">
              Lampo<span className="text-brand">.</span>{" "}
            </span>
            {/* base text */}
            <span className="text-secondary text-sm min-w-[260px] max-w-[400px] text-start ">
              Lampo is a company engaged in furniture regarding lighting
              products in 2011. Lampo has made more than 1000 products every
              month since its establishment
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="#ff5c10"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M451 374c-15.88-16-54.34-39.35-73-48.76c-24.3-12.24-26.3-13.24-45.4.95c-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39s-47.34-61.62-50.53-76.48s5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3c-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64s54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374Z"
                />
              </svg>
              <h4 className="text-white">{"(270)555-0117 - (270)555-2344"}</h4>
            </div>
            {/* Location */}
            <div className="flex space-x-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#ff5c10"
                  d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4Z"
                />
                <circle cx="16" cy="13" r="4" fill="none" />
              </svg>
              <h4 className="text-white">
                6391 Elgin St. Celina Delaware 10299
              </h4>
            </div>
            {/* email */}
            <div className="flex space-x-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ff5c10"
                  d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
                />
              </svg>
              <h4 className="text-white">
                Studiolamps@gmail.com 
              </h4>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-col  sm:flex-row sm:justify-between sm:space-x-14 space-y-6 sm:space-y-0 items-center sm:items-start">
            <div className="flex flex-col space-y-6">
                <h3 className="text-lg text-brand text-medium">Menu</h3>
                <div className="flex flex-col space-y-3 text-sm text-secondary items-start">
                    <p>Lighting</p>
                    <p>Products</p>
                    <p>Features</p>
                    <p>Flash Sale</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className="flex flex-col space-y-6 items-start">
                <h3 className="text-lg text-brand text-medium">Product</h3>
                <div className="flex flex-col space-y-3 text-sm text-secondary items-start ">
                    <p>Study Lamp</p>
                    <p>Garden Lamp</p>
                    <p>Kitchen Lamp</p>
                    <p>Living Room Lamp</p>
                </div>
            </div>
            <div className="flex flex-col space-y-6 items-start">
                <h3 className="text-lg text-brand text-medium">Services</h3>
                <div className="flex flex-col space-y-3 text-sm text-secondary items-start ">
                    <p>Order</p>
                    <p>Cash On Delivery</p>
                    <p>Payment</p>
                    <p>Delievery</p>
                </div>
            </div>
            <div className="flex flex-col space-y-6 items-start">
                <h3 className="text-lg text-brand text-medium">Support</h3>
                <div className="flex flex-col space-y-3 text-sm text-secondary items-start ">
                    <p>Chat Online</p>
                    <p>Cally</p>
                    <p>Language</p>
                    <p>Copyright</p>
                </div>
            </div>
        </div>
      </div>
      <div className=" w-[90vw] mx-auto border-t-[1px] border-secondary">
        <div className="flex justify-between mt-[20px] mb-[50px] w-full">
            <div className="flex md:justify-between flex-col space-y-6 md:space-y-0 text-secondary text-sm md:flex-row md:space-x-10">
                <p>Privacy Policy</p>
                <p>Site Map</p>
                <p>Terms of use</p>
            </div>
            <div className="text-secondary text-sm">
            &copy; All rights reserved
            </div>
        </div>
      </div>
      
    </div>
  );
};
export default Footer;
