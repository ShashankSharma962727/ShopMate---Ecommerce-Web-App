import { useNavigate } from "react-router-dom";

const Card = ({ item, addCart }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/productinfo/${item.id}`)}
      className={`w-full max-w-60 rounded-xl bg-gray-200 cursor-pointer text-[#020101]`}
    >
      
      <figure className="px-1 pt-2">
        <img
          src={item.imageURL}
          alt={item.title}
          className="rounded-lg h-48 w-full object-contain"
        />
      </figure>

      <div className={`p-4`}>
        <h2 className="text-base md:text-lg font-semibold line-clamp-1">
          {item.title}
        </h2>

        <p className="text-sm md:text-base font-bold mt-1">
          ₹ {item.price}/-
        </p>


        <div className="flex flex-col gap-1 mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addCart(item);
            }}
            className="bg-yellow-200 p-2 rounded-lg text-sm md:text-base font-semibold text-yellow-900"
          >
            Add to Cart
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/productinfo/${item.id}`);
            }}
            className="border-2 border-yellow-300 p-2 rounded-lg  text-sm md:text-base font-semibold"
          >
            View Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
