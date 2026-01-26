import { useContext } from "react"
import DashboardInfoCard from "./DashboardInfoCard"
import { context } from "../../Context/ContextProvider"
import { darkTheme, lightTheme } from "../../Styles/Colors";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";

export const DashboardInfo = () => {
    const {isDark , products, orders} = useContext(context);
    const color = isDark ? darkTheme : lightTheme;

    const dashboardCardData = [
      {
        products: products,
        label: "Total Products",
        icon: <FaBoxOpen/>
      },
      {
        products: orders,
        label: "Total Orders",
        icon: <IoBagHandleOutline/>
      },
    ]
  return (
    <div className={` w-full flex ${color.text.secondary} justify-between mt-10`}>
        {
          dashboardCardData.map((data) => (
            <DashboardInfoCard length={data.products.length} label={data.label} icon={data.icon}/>
          ))
        }
    </div>
  )
}
