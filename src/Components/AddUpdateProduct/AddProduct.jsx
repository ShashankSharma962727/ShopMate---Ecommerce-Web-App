import { useContext } from "react";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";

const AddProduct = () => {
  const { isDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;

  const projectContext = useContext(context);
  const {product, setProduct, addProduct} = projectContext;

  return (
    <div className={`min-h-screen flex items-center justify-center ${color.background.main}`}>
      <div className={`${color.background.card} ${color.text.secondary} w-full max-w-md p-6 rounded-lg shadow-lg`}>
        <h2 className="text-2xl font-semibold text-center mb-6">
          Add Product
        </h2>

        <form className="space-y-4"
        onSubmit={addProduct}
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
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
