import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const EmptyCart = () => {
  return (
    <div className="flex flex-col text-2xl w-full min-h-150 items-center justify-center gap-5 text-yellow-400">
        <div className="text-7xl md:text-9xl"><MdOutlineRemoveShoppingCart/></div>
        <p className="text-2xl md:text-4xl">Cart is Empty!</p>
    </div>
  )
}

export default EmptyCart