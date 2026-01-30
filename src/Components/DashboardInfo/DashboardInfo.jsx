import { useContext } from "react"
import DashboardInfoCard from "./DashboardInfoCard"
import { context } from "../../Context/ContextProvider"
import { IoBagHandleOutline } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";

export const DashboardInfo = () => {
    const {products, orders} = useContext(context);

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
    <div className={` w-full flex flex-col gap-3 lg:flex-row justify-evenly items-center mt-10`}>
        {
          dashboardCardData.map((data) => (
            <DashboardInfoCard length={data.products.length} label={data.label} icon={data.icon}/>
          ))
        }
    </div>
  )
}
