import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.css";
import { useState, useContext } from "react";
import Footer from "../footer/footer.component";
import { userContext } from "../../context/userContext/userContext";
import CartIcon from "../../components/cartIcon/cartIcon.component";
import { CartContext } from "../../context/cartContext/cartContext";
const Navigation = () => {
  const { userInfo } = useContext(userContext);
  const {cartItems} = useContext(CartContext);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const handleHamburger = () => {
    setHamburgerToggle(!hamburgerToggle);
  };
  

  return (
    <>
      <div className=" mx-4 lg:mx-20 my-8 flex justify-between items-center xl:mx-32">
        {/* Left side */}
        <div className="flex space-x-10 items-center just">
          {/* Logo */}
          <Link to="/">
            <div>
              <span className="text-bold text-white text-2xl">
                Lampo<span className="text-brand">.</span>{" "}
              </span>
            </div>
          </Link>
          {/* NavLinks */}
          <div className=" hidden lg:flex space-x-6 text-secondary text-sm ">
            <Link to="/products"><div className="hover:text-white cursor-pointer duration-500">
              Product
            </div></Link>
            <Link to="/products"><div className="hover:text-white cursor-pointer duration-500">
              Features
            </div></Link>
            <Link to="/products"><div className="hover:text-white cursor-pointer duration-500 whitespace-nowrap">
              Flash Sale
            </div></Link>
            <Link to="/contact">
              <div className="hover:text-white cursor-pointer duration-500">
                Contact
              </div>
            </Link>
          </div>
        </div>
        {/* Right side */}
        <div>
          <div className=" hidden lg:flex items-center ">
            <div className="self-center  bg-[#2a2a2a] w-64 rounded-3xl flex px-3 items-center justify-between ">
              <div>
                <input
                  className="active:border-0 outline-none border-0 bg-transparent w-full h-full p-2 text-white placeholder:text-sm placeholder:text-secondary text-sm"
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
            <Link to="/checkout">
              <div className="ml-6">
                <CartIcon cartItems={cartItems[0]} />
              </div>
            </Link>

            <Link to="/auth/signIn">
              <div className="ml-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill={userInfo ? "#ff5c01" : "white"}
                    d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5l-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"
                  />
                </svg>
              </div>
            </Link>
          </div>
          {/* mobile */}
          <div class="lg:hidden">
            <button
              onClick={handleHamburger}
              id="menu-btn"
              type="button"
              className={` ${
                hamburgerToggle ? "open" : ""
              } z-40 display-block hamburger lg:hidden focus:outline-none`}
            >
              <span class="hamburger-top"></span>
              <span class="hamburger-middle"></span>
              <span class="hamburger-bottom"></span>
            </button>
          </div>
        </div>
      </div>
      <div className={`${hamburgerToggle? "block" : "hidden"}  absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:hidden `}>
            <div class="flex flex-col md:flex-row md:mx-6">
                <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/" onClick={handleHamburger}>Home</Link>
                <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/products" onClick={handleHamburger}>Products</Link>
                <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/contact" onClick={handleHamburger}>Contact</Link>
                <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/auth/signIn" onClick={handleHamburger}>Sign In </Link>
                <Link className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" to="/checkout" onClick={handleHamburger}>Cart </Link>
            </div>

            
        </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
