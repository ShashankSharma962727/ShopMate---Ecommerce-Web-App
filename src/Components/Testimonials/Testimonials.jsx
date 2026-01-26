import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";

export const Testimonials = ({ feed }) => {
  const { isDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
  return (
    <div
      className={`${color.background.card} flex flex-col items-center text-center w-full min-h-70 max-w-80 border border-gray-200 rounded-lg py-5 px-4 shadow-lg`}
    >
      <div className={`${color.primary} text-6xl`}>
        <FaUserCircle />
      </div>
      <p className={`${color.text.secondary} text-md`}>{feed.feedback}</p>
      <div className="w-20 h-0.5 bg-blue-500 mt-5"></div>
      <p className={`${color.text.secondary} text-lg font-semibold`}>
        {feed.name}
      </p>
      <p className={`${color.text.secondary}`}>{feed.occupation}</p>
    </div>
  );
};
