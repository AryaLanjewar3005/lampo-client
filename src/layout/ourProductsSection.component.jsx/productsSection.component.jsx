import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import ProductCard from "../../components/productCard/productCard.component";
import "./productsSection.styles.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProductsSection = () => {
  const [lamps, setLamps] = useState([]);
  useEffect(() => {
    fetch("https://lampo-backend.onrender.com/showcase")
      .then((response) => response.json())
      .then((finalresp) => setLamps(finalresp));
  }, []);
  const parentVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1, // Delay between each child animation
      },
    },
  };

  const childVariants = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className="my-[60px] flex flex-col items-center justify-center space-y-10">
      {/* Title div */}
      <div className="flex flex-col space-y-3">
        <h2 className="font-syne text-white text-4xl text-center">
          Our Products
        </h2>
        <p className="text-secondary text-sm text-center ">
          Find and get variety of your home lighting products here
        </p>
      </div>
      <motion.div
        variants={parentVariants}
        initial="initial"
        whileInView="animate"
        className="products-grid w-full mx-auto"
      >
        {lamps.map((lampi, index) => (
          <ProductCard key={index} lamp={lampi} childVariants={childVariants} />
        ))}
      </motion.div>

      <div className="flex w-full items-center justify-center">
        <div className="w-full md:w-1/4">
          <Link to="/products">
            <Button type={"inverted"} title={"View All Products"} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductsSection;
