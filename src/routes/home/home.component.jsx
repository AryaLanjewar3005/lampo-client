import BrandSection from "../../layout/brandSection/brandSection.component";
import FlashSales from "../../layout/flashSales/flashSales.component";
import Hero from "../../layout/heroSection/herosection.component";
import ProductsSection from "../../layout/ourProductsSection.component.jsx/productsSection.component";
import SocialSection from "../../layout/socialsSection/socialSection.component";
import WhyUsSection from "../../layout/whyUsSection/whyUsSection.component";

const Home = () => {
    return (
        <div className="flex flex-col mx-4 md:mx-[10vh]">
            <Hero/>
            <SocialSection/>
            <BrandSection/>
            <FlashSales/>
            <WhyUsSection/>
            <ProductsSection/>
        </div>
        
    )
}

export default Home;