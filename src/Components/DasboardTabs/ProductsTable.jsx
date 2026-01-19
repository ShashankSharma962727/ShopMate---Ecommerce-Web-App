import { useContext } from "react";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";

const ProductsTable = () => {
  const { isDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
  return (
    <div>
      <h1 className={`${color.text.primary} text-center font-bold text-4xl mb-4`}>Products</h1>
      <button className={`${color.button.primary} py-1 px-3 rounded-lg`}>
        Add New Products
      </button>
      <table className="w-full border border-gray-300 mt-5">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">S No.</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-2 text-center">1</td>
            <td className="border p-2 text-center">
              <img
                src="https://via.placeholder.com/40"
                alt="product"
                className="mx-auto"
              />
            </td>
            <td className="border p-2">Phone</td>
            <td className="border p-2">₹20,000</td>
            <td className="border p-2">Electronics</td>
            <td className="border p-2">12/12/25</td>
            <td className="border p-2 text-center">
              <button className="text-red-500">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
