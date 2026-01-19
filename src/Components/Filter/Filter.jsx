import { useContext } from "react";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";

const Filter = () => {
  const { isDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
  return (
    <div
      className={`w-[90%] h-40 m-auto ${color.background.secondary} ${color.text.secondary} rounded-lg shadow-lg mt-5 flex flex-col gap-2 p-5`}
    >
      <input
        type="text"
        className="w-full bg-white p-2 rounded-lg"
        placeholder="Search here"
      />
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">Filter</h2>
        <div className="flex items-center gap-2">
          <select className="bg-white p-1 rounded-lg flex-1">
            <option>Jacket</option>
            <option>Shirt</option>
            <option>Jeanse</option>
            <option>Pant</option>
          </select>
          <select className="bg-white p-1 rounded-lg flex-1">
            <option>Jacket</option>
            <option>Shirt</option>
            <option>Jeanse</option>
            <option>Pant</option>
          </select>
          <button className={`${color.button.primary} p-1 rounded-md`}>Remove Filter</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
