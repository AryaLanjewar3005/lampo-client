import { useContext } from "react";
import { CartContext } from "../../context/cartContext/cartContext";
import {motion } from 'framer-motion';

const ProductCard = ({lamp, childVariants}) => {
  
  const {addItemsToCart} = useContext(CartContext)
  const addItemToCartHandler = () => {
    addItemsToCart(lamp);
  }
  
  // const { lamp } = lampi;
  const { image_url, price, product_name, category } = lamp;
  return (
    <motion.div variants={childVariants} transition={{ duration: 0.5 }} className="bg-[#2a2a2a] rounded-t-[500px] rounded-b-[80px] flex flex-col space-y-3 w-[250px] h-[430px] mx-auto">
      <div className=" relative w-auto h-2/3 rounded-t-[500px] rounded-b-[80px] m-3">
        <img
          className="object-cover h-full w-full absolute rounded-t-[500px] rounded-b-[80px]"
          src={image_url}
          alt=""
        />
      </div>
      <div className="p-2 flex flex-col space-y-4">
        <div className="flex flex-col space-y-1 items-start">
          <h2 className="text-md text-white ">{product_name}</h2>
          <p className="text-xs text-secondary ">{category}</p>
        </div>
        <div className="flex justify-between w-full items-center">
          <span className="text-lg">
            <span className="text-brand">$</span>
            <span className="text-white font-light">{price}</span>
          </span>
          <motion.div className="flex" whileHover={{scale: 1.2, transition: {duration: 0.2}}} whileTap={{scale: 1.3}}>
          <button onClick={addItemToCartHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 14 14"
            >
              <g
                fill="#ff5c01"
                stroke="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="7" cy="7" r="6.5" />
                <path stroke="white" d="M7 4v6M4 7h6" />
              </g>
            </svg>
          </button>
          </motion.div>
          
        </div>
      </div>
    </motion.div>
  );
};
export default ProductCard;
