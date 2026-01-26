import { useContext } from "react";
import { context } from "../../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../../Styles/Colors";
import { useNavigate } from "react-router-dom";

const Card = ({ item, addCart }) => {
  const { isDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/productinfo/${item.id}`)}
      className={`${color.background.card} w-full max-w-60 shadow-lg rounded-xl border border-gray-200 cursor-pointer hover:shadow-xl transition-all`}
    >
      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={item.imageURL}
          alt={item.title}
          className="rounded-lg h-48 w-full object-contain"
        />
      </figure>

      {/* Content */}
      <div className={`${color.text.secondary} p-4`}>
        <h2 className="text-lg font-semibold line-clamp-1">
          {item.title}
        </h2>

        <p className="text-md font-bold mt-1">
          ₹ {item.price}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addCart(item);
            }}
            className="btn btn-primary flex-1"
          >
            Add to Cart
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/productinfo/${item.id}`);
            }}
            className="btn btn-outline flex-1"
          >
            View Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
