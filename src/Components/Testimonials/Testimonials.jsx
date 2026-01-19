import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";

export const Testimonials = () => {
  const { isDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
  return (
<div className={`${color.background.card} flex flex-col items-center text-center max-w-96 border border-gray-200 rounded-lg py-5 px-4 shadow-lg`}>
      <div className={`${color.primary} text-6xl`}>
        <FaUserCircle />
      </div>
      <p className={`${color.text.secondary} text-lg`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod totam nesciunt quos doloremque exercitationem id eos quo aut recusandae.
      </p>
      <div className="w-20 h-0.5 bg-blue-500 mt-5"></div>
      <p className={`${color.text.secondary} text-lg font-semibold`}>Shashank Sharma</p>
      <p className={`${color.text.secondary}`}>Senior Software Developer</p>
    </div>
  );
};
