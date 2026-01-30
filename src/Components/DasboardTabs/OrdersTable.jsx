import { useContext } from "react";
import { context } from "../../Context/ContextProvider";

const OrdersTable = () => {
  const { orders } = useContext(context);

  return (
    <div className="p-6 text-[#020101]">
      <h1 className={`text-center font-bold text-lg md:text-2xl mb-4`}>Orders</h1>

      <div className="w-full overflow-x-auto">
        <table className="w-full border text-sm md:text-base">
        <thead>
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Pincode</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, ind) =>
            order.item?.map((product, index) => (
              <tr key={order.id + product.id}>
                <td className="border p-2">{ind + 1}</td>
                <td className="border p-2">
                  <img
                    src={product.imageURL}
                    alt={product.title}
                    className="w-12 mx-auto"
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
            ))
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default OrdersTable;
