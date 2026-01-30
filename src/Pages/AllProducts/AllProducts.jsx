import Filter from "../../Components/Filter/Filter";
import Layout from "../../Components/Layout/Layout";
import { ProductCardSection } from "../../Components/ProductCard/ProductCardSection/ProductCardSection";

const AllProducts = () => {
  return (
    <Layout>
      <div className="w-full m-auto flex flex-col xl:flex-row px-3 md:px-5 gap-5">
        <Filter />
        <ProductCardSection />
      </div>
    </Layout>
  );
};

export default AllProducts;
