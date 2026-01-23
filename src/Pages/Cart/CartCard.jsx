import { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";

export const CartCard = ({item, deleteItem}) => {
  const { isDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;

  return (
    <div
      className={`w-full flex gap-4 p-4 rounded-xl shadow-lg ${color.background.card}`}
    >
        
      <div className="w-32 h-32 bg-gray-400 rounded-lg flex-shrink-0">
        <img src={`${item.imageURL}`} className="h-full w-full object-contain" alt="" />
      </div>
      <div
        className={`${color.text.secondary} flex flex-1 justify-between gap-4`}
      >
        <div className="flex flex-col gap-2">
          <h1 className={`${color.text.primary} font-semibold text-lg`}>
            {item.title}
          </h1>

          <p className="text-sm line-clamp-2 opacity-80">
            {item.description}
          </p>

          <p className="font-semibold">{item.price}</p>
        </div>


        <button
        onClick={() => deleteItem(item)}
        className="self-start text-xl hover:opacity-70 transition">
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  );
};
