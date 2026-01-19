import { FaUserAlt } from "react-icons/fa";
import { context } from "../../Context/ContextProvider";
import { useContext } from "react";
import { darkTheme, lightTheme } from "../../Styles/Colors";

const DashboardInfoCard = () => {
  const { isDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
  return (
    <div
      className={`${color.background.card} flex max-w-96 w-full flex-col shadow-lg items-center p-3 gap-3 rounded-2xl`}
    >
      <div className={`${color.primary} text-3xl`}><FaUserAlt /></div>
      <span className={`${color.text.primary} text-3xl`}>10</span>
      <span className={`${color.text.secondary} text-lg font-semibold`}>Total User</span>
    </div>
  );
};

export default DashboardInfoCard;
