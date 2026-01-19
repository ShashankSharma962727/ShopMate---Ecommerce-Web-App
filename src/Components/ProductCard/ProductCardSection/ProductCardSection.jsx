import { useContext } from "react";
import Card from "../Card/Card";
import { context } from "../../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../../Styles/Colors";

export const ProductCardSection = () => {
  const {isDark} = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
  return (
    <div className={`w-[90%] m-auto flex flex-col gap-2`}>
      <h2 className={`${color.text.primary} text-3xl font-semibold mt-3`}>Our Latest Collection</h2>
      <div className="flex w-full justify-between mt-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
