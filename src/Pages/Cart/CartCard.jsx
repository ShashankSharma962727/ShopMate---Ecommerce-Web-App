import { RiDeleteBin5Line } from "react-icons/ri";

export const CartCard = ({ item, deleteItem }) => {

  
  return (
    <div
      className={`w-full max-w-180 flex gap-4 bg-gray-200 text-[#020101] p-4 rounded-xl shadow-lg `}
    >
      <div className="w-32 h-32 rounded-lg">
        <img
          src={`${item.imageURL}`}
          className="h-full w-full object-contain"
          alt=""
        />
      </div>
      <div
        className={` flex flex-1 justify-between gap-4`}
      >
        <div className="flex flex-col gap-2">
          <h1 className={` font-semibold text-base md:text-lg`}>
            {item.title}
          </h1>

          <p className="text-xs md:text-sm line-clamp-2 opacity-80">{item.description}</p>

          <p className="font-semibold">₹ {item.price}/-</p>
        </div>

        <button
          onClick={() => deleteItem(item)}
          className="self-start text-xl hover:opacity-70 transition"
        >
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  );
};
