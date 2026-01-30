import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Components/Layout/Layout";
import BillCard from "./BillCard";
import { CartCard } from "./CartCard";
import { deleteFromCart, clearCart } from "../../Redux/CartSlice/CartSlice";
import { useContext, useEffect, useState } from "react";
import { context } from "../../Context/ContextProvider";
import { db } from "../Authentication/Registration/Registration";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import EmptyCart from "../../Components/EmptyCart/EmptyCart";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { addressInfo } = useContext(context);

  const [orderInfo, setOrderInfo] = useState({
    address: addressInfo,
    item: cartItem,
    createdAt: Timestamp.now(),
  });

  useEffect(() => {
    setOrderInfo({
      address: addressInfo,
      item: cartItem,
      createdAt: Timestamp.now(),
    });
  }, [addressInfo, cartItem]);

  const setOrderDetails = async (e) => {
    e.preventDefault();

    if (
      addressInfo.name === "" ||
      addressInfo.phone === "" ||
      addressInfo.email === "" ||
      addressInfo.pincode === ""
    ) {
      alert("All Fields Are Required!");
      return;
    }

    try {
      await addDoc(collection(db, "Orders"), orderInfo);

      dispatch(clearCart()); // ✅ cart clear
      alert("Order Placed Successfully");
      window.location.href = "/orders"; // ✅ redirect
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCartItem = (item) => {
    dispatch(deleteFromCart(item));
  };

  useEffect(() => {
    localStorage.setItem("CartItems", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <Layout>
      {cartItem.length === 0 ? (
        <EmptyCart/>
      ) : (
        <div className="w-[90%] min-h-screen m-auto flex flex-col items-center lg:items-start lg:flex-row justify-center gap-10 mt-20">
          <div className="flex flex-col gap-5">
            {cartItem.map((item) => (
              <CartCard
                key={item.id}
                item={item}
                deleteItem={deleteCartItem}
              />
            ))}
          </div>
          <BillCard setOrderDetails={setOrderDetails} />
        </div>
      )}
    </Layout>
  );
};

export default Cart;
