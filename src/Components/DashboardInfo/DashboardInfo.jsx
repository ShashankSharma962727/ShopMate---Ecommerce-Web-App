import { useContext } from "react"
import DashboardInfoCard from "./DashboardInfoCard"
import { context } from "../../Context/ContextProvider"
import { darkTheme, lightTheme } from "../../Styles/Colors";

export const DashboardInfo = () => {
    const {isDark} = useContext(context);
    const color = isDark ? darkTheme : lightTheme;
  return (
    <div className={` w-full flex ${color.text.secondary} justify-between mt-10`}>
        <DashboardInfoCard/>
        <DashboardInfoCard/>
        <DashboardInfoCard/>
        <DashboardInfoCard/>
    </div>
  )
}
