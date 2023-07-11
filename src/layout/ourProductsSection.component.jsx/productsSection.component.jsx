import Button from "../../components/button/button.component";
import ProductCard from "../../components/productCard/productCard.component";
import './productsSection.styles.css'
var lamps = [
    {
      name: "Table Lamp 1",
      price: "29.99",
      category: "Table Lamps",
      image: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Floor Lamp 1",
      price: "59.99",
      category: "Floor Lamps",
      image: "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Desk Lamp 1",
      price: "39.99",
      category: "Desk Lamps",
      image: "https://images.unsplash.com/photo-1585597647877-6eaa01bf9a05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
      name: "Ceiling Lamp 1",
      price: "79.99",
      category: "Ceiling Lamps",
      image: "https://images.unsplash.com/photo-1565374235393-6fe32a07cc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
    },
    {
      name: "Wall Lamp 1",
      price: "49.99",
      category: "Wall Lamps",
      image: "https://plus.unsplash.com/premium_photo-1678395446995-575bfdcb0f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Chandelier 1",
      price: "149.99",
      category: "Chandeliers",
      image: "https://images.unsplash.com/photo-1559924508-1461423083c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
      name: "Bedside Lamp 1",
      price: "34.99",
      category: "Bedside Lamps",
      image: "https://plus.unsplash.com/premium_photo-1678375722586-b5eef2972f4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Pendant Lamp 1",
      price: "69.99",
      category: "Pendant Lamps",
      image: "https://images.unsplash.com/photo-1602145461313-26c587cc0ca9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    }
  ];
  

const ProductsSection = ( ) => {
    
    return (
        <div className="my-[60px] flex flex-col items-center justify-center space-y-10">
            {/* Title div */}
            <div className="flex flex-col space-y-3">
                <h2 className="font-syne text-white text-4xl text-center">Our Products</h2>
                <p className="text-secondary text-sm text-center ">Find and get variety of your home lighting products here</p>
            </div>
            <div className="products-grid w-full mx-auto">
            {lamps.map ((lampi, index) => (<ProductCard key={index} lamp={lampi} />))}
            </div>
            
            <div className="flex w-full items-center justify-center">
                <div className="w-full md:w-1/4">
                <Button type={'inverted'} title={'View All Products'}/>
                </div>
                
            </div>
        </div>
    )
}
export default ProductsSection;