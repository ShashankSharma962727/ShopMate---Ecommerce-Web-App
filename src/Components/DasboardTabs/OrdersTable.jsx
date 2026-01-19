import { useContext } from "react";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";

const OrdersTable = () => {
  const { isDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;

  return (
    <div>
        <h1 className={`${color.text.primary} text-center font-bold text-4xl mb-4`}>Orders</h1>
    <table className="w-full border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Payment Id</th>
          <th className="border p-2">Image</th>
          <th className="border p-2">Title</th>
          <th className="border p-2">Price</th>
          <th className="border p-2">Category</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Address</th>
          <th className="border p-2">Pincode</th>
          <th className="border p-2">Phone Number</th>
          <th className="border p-2">Email</th>
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
          <td className="border p-2">Shashank Sharma</td>
          <td className="border p-2">Agra</td>
          <td className="border p-2">282010</td>
          <td className="border p-2">+91 0000000000</td>
          <td className="border p-2">shashanksharma123@gmail.com</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default OrdersTable;
