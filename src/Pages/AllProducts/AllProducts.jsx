import Filter from "../../Components/Filter/Filter";
import Layout from "../../Components/Layout/Layout";
import { ProductCardSection } from "../../Components/ProductCard/ProductCardSection/ProductCardSection";
import TestimonialSection from "../../Components/Testimonials/TestimonialSection";

const AllProducts = () => {
  return (
    <Layout>
      <div className="w-full m-auto">
        <Filter />
        <ProductCardSection />
        <TestimonialSection />
      </div>
    </Layout>
  );
};

export default AllProducts;
