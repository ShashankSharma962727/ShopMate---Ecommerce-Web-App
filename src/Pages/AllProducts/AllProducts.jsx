import Filter from "../../Components/Filter/Filter";
import Layout from "../../Components/Layout/Layout";
import { ProductCardSection } from "../../Components/ProductCard/ProductCardSection/ProductCardSection";

const AllProducts = () => {
  return (
    <Layout>
      <div className="w-full m-auto flex px-5 gap-5">
        <Filter />
        <ProductCardSection />
      </div>
    </Layout>
  );
};

export default AllProducts;
