import { useContext, useEffect } from "react";
import Card from "../Card/Card";
import { context } from "../../../Context/ContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../../Redux/CartSlice/CartSlice";

export const ProductCardSection = () => {
  const { products, searchItem, selectCategory } = useContext(context);

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  const addCart = (item) => {
    dispatch(addtoCart({ ...item, time: Date.now() }));
  };

  const filteredProducts = products.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(searchItem.toLowerCase());
    const matchCategory = selectCategory === "All" || item.category === selectCategory;
    return matchSearch && matchCategory;
  });

  useEffect(() => {
    localStorage.setItem("CartItems", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full gap-5 mt-5">
        {filteredProducts.map((item) => (
          <Card key={item.id} item={item} addCart={addCart} />
        ))}
      </div>
  );
};
