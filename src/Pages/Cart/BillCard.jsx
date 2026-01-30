import { useContext, useEffect, useState } from "react";
import { context } from "../../Context/ContextProvider";
import { useSelector } from "react-redux";

const BillCard = ({ setOrderDetails }) => {
  const [total, setTotal] = useState(0);
  const cartItem = useSelector((state) => state.cart);
  const shippingPerItem = 20;
  const shipping = cartItem.length * shippingPerItem;
  const grandTotal = total + shipping;
  const [orderModal, setOrderModal] = useState(false);
  const { setAddressInfo, addressInfo } = useContext(context);

  useEffect(() => {
    let Subtotal = 0;
    cartItem.forEach((item) => (Subtotal = Subtotal + Number(item.price)));
    setTotal(Subtotal);
  }, [cartItem]);

  return (
    <div
      className={`bg-gray-200 text-[#020101] w-72 p-6 rounded-xl shadow-lg flex flex-col gap-4 h-72`}
    >
      <h3 className="text-lg font-semibold">Order Summary</h3>

      <div className="flex justify-between text-sm">
        <span className="opacity-80">Subtotal</span>
        <span className="font-medium">₹{total}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="opacity-80">Shipping</span>
        <span className="font-medium">₹{shipping}</span>
      </div>

      <div className="w-full h-px bg-gray-300 my-2"></div>

      <div className="flex justify-between text-base font-semibold">
        <span>Total</span>
        <span>₹{grandTotal}</span>
      </div>

      <button
        onClick={() => setOrderModal((prev) => !prev)}
        className={`bg-yellow-200 text-yellow-700 mt-4 py-2 rounded-lg font-medium hover:opacity-90 transition`}
      >
        Proceed to Checkout
      </button>

      {orderModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#fdfdfc]/60 z-50 px-3 sm:px-0">
          <div className="bg-gray-200 w-full max-w-md sm:max-w-lg rounded-lg shadow-lg p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setOrderModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg"
            >
              ✕
            </button>

            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
              Place Your Order
            </h2>

            <form onSubmit={setOrderDetails} className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={addressInfo.name}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, name: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />

              <input
                type="email"
                placeholder="Email"
                value={addressInfo.email}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, email: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />

              <input
                type="text"
                placeholder="Pincode"
                value={addressInfo.pincode}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, pincode: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                value={addressInfo.phone}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, phone: e.target.value })
                }
                className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />

              <button
                type="submit"
                className="w-full font-semibold bg-yellow-200 text-yellow-700 py-2 sm:py-3 rounded-md hover:bg-yellow-300 transition text-sm sm:text-base"
              >
                Order Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillCard;
