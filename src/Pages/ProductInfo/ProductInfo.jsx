import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";

export const ProductInfo = () => {
  const { isDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;

  return (
    <Layout>
      <div className="w-[90%] m-auto mt-16">
        <div className="flex flex-col md:flex-row gap-10">
          
          
          <div className="flex-1 bg-gray-300 rounded-xl h-[420px] flex items-center justify-center">
            <span className="text-gray-600">Product Image</span>
          </div>

          <div className={`flex-1 flex flex-col gap-4 ${color.text.secondary}`}>
            
            <p className="uppercase tracking-wide text-sm">
              Brand Name
            </p>

            <h1 className={`${color.text.primary} text-3xl font-bold`}>
              The Catcher in the Rye
            </h1>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
              <span className="opacity-70">(4 Reviews)</span>
            </div>

            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Tenetur dolorum ut, quod voluptatem repellendus eveniet quas 
              quos eos aliquam rerum.
            </p>

            <div className="flex items-center gap-6 mt-4">
              <span className="text-2xl font-semibold">
                $59.00
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
