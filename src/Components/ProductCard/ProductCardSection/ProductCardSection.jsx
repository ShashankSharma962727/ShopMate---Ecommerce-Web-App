import { useContext, useEffect } from "react";
import Card from "../Card/Card";
import { context } from "../../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../../Styles/Colors";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../../Redux/CartSlice/CartSlice";

export const ProductCardSection = () => {
  const {isDark, products} = useContext(context);
  const color = isDark ? darkTheme : lightTheme;

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
    console.log(cartItem);

  const addCart = (item) => {
    dispatch(addtoCart({...item, time: Date.now()}));
  }

  useEffect(() => {
    localStorage.setItem("CartItems", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <div className={`w-[90%] m-auto flex flex-col gap-2`}>
      <h2 className={`${color.text.primary} text-3xl font-semibold mt-3`}>Our Latest Collection</h2>
      <div className="flex w-full justify-between mt-2">
        {
          products.map((item) => (
            <Card key={item.id} item={item} addCart={addCart}/>
          ))
        }
      </div>
    </div>
  );
};
