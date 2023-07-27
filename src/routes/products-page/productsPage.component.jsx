import ProductCard from "../../components/productCard/productCard.component";
import { useEffect, useState } from "react";
import "./productPage.styles.css";

const ProductPage = () => {
  const [lamps, setLamps] = useState([]);
  useEffect(() => {
    fetch("https://lampo-backend.onrender.com/products")
      .then((response) => response.json())
      .then((finalresp) => setLamps(finalresp));
  }, []);

  return (
    <div className="mx-4 md:mx-[10vh] flex flex-col space-y-[7vh]">
        <div><h1 className="font-syne text-white justify-start text-4xl mt-[5vh]">Featured Products</h1></div>
      <div className="products-grid w-full mx-auto">
        {lamps.map((lampi, index) => (
          <ProductCard key={index} lamp={lampi} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
