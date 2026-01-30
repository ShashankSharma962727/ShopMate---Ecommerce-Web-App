import { useContext, useState } from "react";
import { context } from "../../Context/ContextProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";

const ProductsTable = () => {
  const { products, deleteProduct, editHandle } = useContext(context);
  const navigate = useNavigate();
  const [delPopUp, setDelPopUp] = useState(false);
  const [selectProductId, setSelectProductId] = useState("");

  return (
    <div className="relative text-[#020101]">
      <h1
        className={`text-center font-bold text-lg md:text-2xl mb-4`}
      >
        Products
      </h1>
      <button
        onClick={() => {
          navigate("/addproduct");
        }}
        className="bg-yellow-200 py-2 px-4 text-sm md:text-base rounded-lg font-semibold text-yellow-900 cursor-pointer"
      >
        Add New Products
      </button>
      <div className="w-full overflow-x-auto">
        <table className="w-full border border-gray-300 mt-5 text-sm md:text-base">
        <thead>
          <tr>
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
          {products.map((item, index) => (
            <tr key={item.id}>
              <td className="border p-2 text-center">{index + 1}</td>

              <td className="border text-center w-20">
                <img src={item.imageURL} alt="product" className="mx-auto" />
              </td>

              <td className="border p-2">{item.title}</td>
              <td className="border p-2">₹{item.price}</td>
              <td className="border p-2">{item.category}</td>
              <td className="border p-2">{item.date}</td>
              <td className="border p-2 text-center">
                <div className="flex items-center justify-evenly text-2xl">
                  <NavLink to={"/updateproduct"}>
                    <button onClick={() => editHandle(item)}>
                    <RiEdit2Fill />
                  </button>
                  </NavLink>
                  <button
                    onClick={() => {
                      setSelectProductId(item.id);
                      setDelPopUp(true);
                    }}
                  >
                    <RiDeleteBin5Line />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {delPopUp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="w-80 bg-white rounded-xl shadow-xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Delete Product
            </h2>
            <p className="text-sm text-gray-600 mb-5">
              Are you sure you want to delete this product? This action cannot
              be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDelPopUp(false)}
                className="px-4 py-1 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  deleteProduct(selectProductId);
                  setDelPopUp(false);
                }}
                className="px-4 py-1 rounded-md bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsTable;
