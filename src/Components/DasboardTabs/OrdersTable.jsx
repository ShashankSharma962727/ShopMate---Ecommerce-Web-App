import { useContext } from "react";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";

const OrdersTable = () => {
  const { isDark, orders } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;

  return (
    <div>
      <h1
        className={`${color.text.primary} text-center font-bold text-4xl mb-4`}
      >
        Orders
      </h1>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Payment Id</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Pincode</th>
            <th className="border p-2">Phone Number</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) =>
            order.item.map((product) => (
              <tr key={product.id + index}>
                <td className="border p-2 text-center">{index + 1}</td>

                <td className="border p-2 text-center">
                  <img
                    src={product.imageURL}
                    alt={product.title}
                    className="w-10 mx-auto"
                  />
                </td>

                <td className="border p-2">{product.title}</td>
                <td className="border p-2">₹{product.price}</td>
                <td className="border p-2">{product.category}</td>

                <td className="border p-2">{order.address.name}</td>
                <td className="border p-2">{order.address.pincode}</td>
                <td className="border p-2">{order.address.phone}</td>
                <td className="border p-2">{order.address.email}</td>
              </tr>
            )),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
