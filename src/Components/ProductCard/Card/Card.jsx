import { useContext } from "react";
import { context } from "../../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../../Styles/Colors";

const Card = () => {
  const {isDark} = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
  return (
    <div className={`${color.background.card} max-w-76 shadow-lg rounded-lg border border-gray-200`}>
      <figure className="px-3 pt-3">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className={`${color.text.secondary} card-body`}>
        <h2 className={`text-xl font-semibold`}>Card Title</h2>
        <p>₹ 500 /-</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
