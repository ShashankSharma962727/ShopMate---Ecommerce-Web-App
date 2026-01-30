import { FaShoppingCart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { useState } from "react";
import ProductsTable from "./ProductsTable";
import OrdersTable from "./OrdersTable";

const DashboardTabs = () => {

  const [activeTab, setActiveTab] = useState("products");

  const tabClass = (tab) =>
    `flex items-center gap-2 text-[#020101] cursor-pointer px-4 py-2 rounded-lg transition-all ${
      activeTab === tab
        ? "text-yellow-500 bg-yellow-100"
        : "opacity-70 hover:opacity-100"
    }`;

  return (
    <div className="mt-10 ">
      <div
        className={`flex bg-gray-200 items-center gap-5 text-sm w-full justify-center py-3 rounded-2xl shadow-lg`}
      >
        <div onClick={() => setActiveTab("products")} className={tabClass("products")}>
          <FaShoppingCart /> Products
        </div>

        <div onClick={() => setActiveTab("orders")} className={tabClass("orders")}>
          <IoBag /> Orders
        </div>
      </div>

      <div
        className={`mt-5 rounded-2xl shadow-lg p-5 bg-gray-200`}
      >
        {activeTab === "products" && <ProductsTable/>}
        {activeTab === "orders" && <OrdersTable/>}
      </div>
    </div>
  );
};

export default DashboardTabs;
