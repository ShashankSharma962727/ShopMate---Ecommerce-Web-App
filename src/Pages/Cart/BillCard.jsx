import { useContext } from "react";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";

const BillCard = () => {
  const { isDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;

  return (
    <div
      className={`${color.text.secondary} ${color.background.card} w-72 p-6 rounded-xl shadow-lg flex flex-col gap-4`}
    >
      <h3 className="text-lg font-semibold">Order Summary</h3>


      <div className="flex justify-between text-sm">
        <span className="opacity-80">Subtotal</span>
        <span className="font-medium">$100</span>
      </div>


      <div className="flex justify-between text-sm">
        <span className="opacity-80">Shipping</span>
        <span className="font-medium">$20</span>
      </div>

      <div className="w-full h-px bg-gray-300 my-2"></div>


      <div className="flex justify-between text-base font-semibold">
        <span>Total</span>
        <span>$120</span>
      </div>


      <button
        className={`${color.button.primary} mt-4 py-2 rounded-lg font-medium hover:opacity-90 transition`}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default BillCard;
