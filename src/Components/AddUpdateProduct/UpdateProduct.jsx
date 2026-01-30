import { useContext } from "react";
import { context } from "../../Context/ContextProvider";

const UpdateProduct = () => {
  const { updateProduct, product, setProduct } = useContext(context);

  return (
    <div className={`min-h-screen flex items-center bg-[#fdfdfc] justify-center`}>
      <div className={`w-60 sm:w-80 lg:w-100 bg-gray-200 p-3 rounded-xl shadow-md text-[#020101]`}>
        <h2 className={`text-xl lg:text-2xl font-bold text-center mb-6`}>
          Update Product
        </h2>

        <form className="space-y-4"
        onSubmit={updateProduct}
        >
          <input
            type="text"
            placeholder="Product Title"
            value={product.title}
            onChange={(e) => setProduct({...product, title: e.target.value})}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Product Price"
            value={product.price}
            onChange={(e) => setProduct({...product, price: e.target.value})}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        
          <input
            type="text"
            placeholder="Product Image URL"
            value={product.imageURL}
            onChange={(e) => setProduct({...product, imageURL: e.target.value})}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <input
            type="text"
            placeholder="Product Category"
            value={product.category}
            onChange={(e) => setProduct({...product, category: e.target.value})}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Product Description"
            value={product.description}
            onChange={(e) => setProduct({...product, description: e.target.value})}
            rows="3"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-white py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
