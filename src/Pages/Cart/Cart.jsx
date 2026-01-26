import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Components/Layout/Layout";
import BillCard from "./BillCard";
import { CartCard } from "./CartCard";
import { deleteFromCart } from "../../Redux/CartSlice/CartSlice";
import { useContext, useEffect, useState } from "react";
import { context } from "../../Context/ContextProvider";
import { db } from "../Authentication/Registration/Registration";
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { addressInfo, setOrders } = useContext(context);
  const [orderInfo, setOrderInfo] = useState({
    address: addressInfo,
    item: cartItem,
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  useEffect(() => {
    setOrderInfo({
      address: addressInfo,
      item: cartItem,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    });
  }, [addressInfo, cartItem]);

  // Orders details
  const setOrderDetails = async (e) => {
    e.preventDefault();
    if (
      addressInfo.name === "" ||
      addressInfo.phone === "" ||
      addressInfo.email === "" ||
      addressInfo.pincode === ""
    ) {
      alert("All Feilds Are Required!");
    }
    try {
      const docRef = await addDoc(collection(db, "Orders"), orderInfo);
    } catch (error) {
      console.log(error);
    }
  };

  // Get Orders Details

  useEffect(() => {
    const q = query(collection(db, "Orders"), orderBy("date"));

    const data = onSnapshot(q, (snapshot) => {
      const OrderArr = [];
      snapshot.forEach((doc) => {
        OrderArr.push({ ...doc.data(), id: doc.id });
      });
      setOrders(OrderArr);
    });

    return () => data();
  }, []);

  const deleteCartItem = (item) => {
    dispatch(deleteFromCart(item));
    localStorage.setItem("CartItems", JSON.stringify(cartItem));
  };

  useEffect(() => {
    localStorage.setItem("CartItems", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <Layout>
      {cartItem.length === 0 ? (
        <div>
          <h1 className="text-3xl text-black text-center">No Item In Cart</h1>
        </div>
      ) : (
        <div className="w-[90%] m-auto flex justify-center gap-10 mt-20">
          <div className="flex flex-col gap-5">
            {cartItem.map((item) => (
              <CartCard key={item.id} item={item} deleteItem={deleteCartItem} />
            ))}
          </div>
          <div>
            <BillCard setOrderDetails={setOrderDetails} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
