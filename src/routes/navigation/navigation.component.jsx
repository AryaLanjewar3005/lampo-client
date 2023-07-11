import './navigation.styles.css';
import {useState} from 'react'

const Navigation = () => {
    const [hamburgerToggle, setHamburgerToggle] = useState(false);
    const handleHamburger = () => {
        setHamburgerToggle(!hamburgerToggle);
    }
  return (
    <div className=" mx-4 lg:mx-20 my-8 flex justify-between items-center xl:mx-32">
      {/* Left side */}
      <div className="flex space-x-10 items-center just">
        {/* Logo */}
        <div>
          <span className="text-bold text-white text-2xl">
            Lampo<span className="text-brand">.</span>{" "}
          </span>
        </div>
        {/* NavLinks */}
        <div className=" hidden lg:flex space-x-6 text-secondary text-sm ">
          <div className="hover:text-white cursor-pointer duration-500">
            Product
          </div>
          <div className="hover:text-white cursor-pointer duration-500">
            Features
          </div>
          <div className="hover:text-white cursor-pointer duration-500 whitespace-nowrap">
            Flash Sale
          </div>
          <div className="hover:text-white cursor-pointer duration-500">
            Contact
          </div>
        </div>
      </div>
      {/* Right side */}
      <div>
        <div className=" hidden lg:flex items-center ">
          <div className="self-center  bg-[#2a2a2a] w-64 rounded-3xl flex px-3 items-center justify-between ">
            <div>
              <input
                className="outline-none bg-transparent w-full h-full p-2 text-white placeholder:text-sm placeholder:text-secondary text-sm"
                type="search"
                placeholder="Search Lamps..."
              />
            </div>
            <svg
              className="w-[20px] stroke-secondary fill-secondary
"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="search"
            >
              <g data-name="Layer 2">
                <path
                  d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
                  data-name="search"
                ></path>
              </g>
            </svg>
          </div>
          <div className="ml-6">
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
                stroke-width="1"
                d="M4 7h16v16H4V7Zm4 2V5c0-2.21 1.795-4 4-4h0c2.21 0 4 1.795 4 4v4"
              />
            </svg>
          </div>
        </div>
        {/* mobile */}
        <div class="lg:hidden">
            <button onClick={handleHamburger} id="menu-btn" type="button" className= {` ${hamburgerToggle ? 'open' : ''} z-40 display-block hamburger lg:hidden focus:outline-none`}>
                <span class="hamburger-top"></span>
                <span class="hamburger-middle"></span>
                <span class="hamburger-bottom"></span>
            </button>
          </div>
        
      </div>
    </div>
  );
};

export default Navigation;
