import { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { context } from "../../Context/ContextProvider";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../Redux/CartSlice/CartSlice";

export const ProductInfo = () => {
  const { products } = useContext(context);
  const {id} = useParams();
  const dispatch = useDispatch();

  const product = products.find((item) => item.id === id);
  const addCart = (item) => {
      dispatch(addtoCart({ ...item, time: Date.now() }));
  };

  return (
    <Layout>
      <div className="w-[90%] min-h-150 m-auto mt-16 text-[#020101]">
        <div className="flex flex-col md:flex-row gap-10">
          
          
          <div className="flex-1 bg-gray-300 rounded-xl h-[420px] flex items-center justify-center overflow-hidden">
            <img src={product?.imageURL} alt="product" className="h-full w-full object-contain" />
          </div>

          <div className={`flex-1 flex flex-col gap-4`}>

            <h1 className={` text-xl md:text-2xl  font-bold`}>
              {product?.title}
            </h1>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
              <span className="opacity-70">(4 Reviews)</span>
            </div>

            <p className="leading-relaxed text-sm md:text-base">
              {product?.description}
            </p>

            <div className="flex items-center gap-6 mt-4">
              <span className="text-2xl font-semibold">
                ₹{product?.price}/-
              </span>

              <button
                onClick={() => addCart(product)} 
                className="bg-yellow-200 py-2 px-6 text-xs md:text-sm rounded-lg font-semibold text-yellow-900"
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
