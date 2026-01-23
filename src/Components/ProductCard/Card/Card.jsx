import { useContext } from "react";
import { context } from "../../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../../Styles/Colors";

const Card = ({item, addCart}) => {
  const {isDark} = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
  return (
    <div className={`${color.background.card} max-w-76 shadow-lg rounded-lg border border-gray-200`}>
      <figure className="px-3 pt-3">
        <img
          src={`${item.imageURL}`}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className={`${color.text.secondary} card-body`}>
        <h2 className={`text-xl font-semibold`}>{item.title}</h2>
        <p>{item.price}</p>
        <div
        onClick={() => addCart(item)}
        className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
