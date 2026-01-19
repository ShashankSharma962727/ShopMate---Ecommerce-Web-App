import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { darkTheme, lightTheme } from "../../Styles/Colors";
import { context } from "../../Context/ContextProvider";
import { useContext, useState } from "react";
import ProductsTable from "./ProductsTable";
import OrdersTable from "./OrdersTable";
import UsersTable from "./UsersTable";

const DashboardTabs = () => {
  const { isDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;

  const [activeTab, setActiveTab] = useState("products");

  const tabClass = (tab) =>
    `flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg transition-all ${
      activeTab === tab
        ? "text-blue-500 bg-blue-100"
        : "opacity-70 hover:opacity-100"
    }`;

  return (
    <div className="mt-10">
      <div
        className={`${color.text.primary} flex items-center gap-20 w-full justify-center ${color.background.card} py-3 rounded-2xl shadow-lg`}
      >
        <div onClick={() => setActiveTab("products")} className={tabClass("products")}>
          <FaShoppingCart /> Products
        </div>

        <div onClick={() => setActiveTab("orders")} className={tabClass("orders")}>
          <IoBag /> Orders
        </div>

        <div onClick={() => setActiveTab("users")} className={tabClass("users")}>
          <FaUserAlt /> Users
        </div>
      </div>

      <div
        className={`${color.text.secondary} ${color.background.card} mt-5 rounded-2xl shadow-lg p-5`}
      >
        {activeTab === "products" && <ProductsTable/>}
        {activeTab === "orders" && <OrdersTable/>}
        {activeTab === "users" && <UsersTable/>}
      </div>
    </div>
  );
};

export default DashboardTabs;
