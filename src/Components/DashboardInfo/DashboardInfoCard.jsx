
import { context } from "../../Context/ContextProvider";
import { useContext } from "react";
import { darkTheme, lightTheme } from "../../Styles/Colors";

const DashboardInfoCard = ({length, label, icon}) => {
  const { isDark} = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
  return (
    <div
      className={`${color.background.card} flex max-w-96 w-full flex-col shadow-lg items-center p-3 gap-3 rounded-2xl`}
    >
      <div className={`${color.primary} text-3xl`}>{icon}</div>
      <span className={`${color.text.primary} text-3xl`}>{length}</span>
      <span className={`${color.text.secondary} text-lg font-semibold`}>{label}</span>
    </div>
  );
};

export default DashboardInfoCard;
