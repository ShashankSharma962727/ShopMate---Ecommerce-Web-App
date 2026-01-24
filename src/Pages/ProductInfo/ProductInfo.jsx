import { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";
import { useParams } from "react-router";

export const ProductInfo = () => {
  const { isDark, products } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
  const {id} = useParams();

  const product = products.find((item) => item.id === id);

  return (
    <Layout>
      <div className="w-[90%] m-auto mt-16">
        <div className="flex flex-col md:flex-row gap-10">
          
          
          <div className="flex-1 bg-gray-300 rounded-xl h-[420px] flex items-center justify-center overflow-hidden">
            <img src={product?.imageURL} alt="product" className="h-full w-full object-cover" />
          </div>

          <div className={`flex-1 flex flex-col gap-4 ${color.text.secondary}`}>

            <h1 className={`${color.text.primary} text-3xl font-bold`}>
              {product?.title}
            </h1>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
              <span className="opacity-70">(4 Reviews)</span>
            </div>

            <p className="leading-relaxed">
              {product?.description}
            </p>

            <div className="flex items-center gap-6 mt-4">
              <span className="text-2xl font-semibold">
                ₹{product?.price}/-
              </span>

              <button
                className={`${color.button.primary} py-2 px-6 rounded-lg font-medium hover:opacity-90 transition`}
              >
                Add to Cart
              </button>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};
