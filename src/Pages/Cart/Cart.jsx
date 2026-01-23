import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Components/Layout/Layout";
import BillCard from "./BillCard";
import { CartCard } from "./CartCard";
import { deleteFromCart } from "../../Redux/CartSlice/CartSlice";
import { useEffect } from "react";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteCartItem = (item) => {
    dispatch(deleteFromCart(item));
    localStorage.setItem("CartItems", JSON.stringify(cartItem));
  };

  useEffect(() => {
    localStorage.setItem("CartItems", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <Layout>
      <div className="w-[90%] m-auto flex justify-center gap-10 mt-20">
        <div className="flex flex-col gap-5">
          {cartItem.map((item) => (
            <CartCard key={item.id} item={item} deleteItem={deleteCartItem} />
          ))}
        </div>
        <div>
          <BillCard />
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
