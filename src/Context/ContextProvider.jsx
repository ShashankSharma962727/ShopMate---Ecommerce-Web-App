import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../Pages/Authentication/Registration/Registration";

export const context = createContext(null);

const ContextProvider = ({ children }) => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    imageURL: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [selectCategory, setSelectCategory] = useState("All");
  const [orders, setOrders] = useState([]);
  const [addressInfo, setAddressInfo] = useState({
    name: "",
    email: "",
    pincode: "",
    phone: "",
  });

  useEffect(() => {
    const q = query(
      collection(db, "Orders"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const OrderArr = [];
      snapshot.forEach((doc) => {
        OrderArr.push({ ...doc.data(), id: doc.id });
      });
      setOrders(OrderArr);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "Products"), orderBy("time", "desc"));

    const data = onSnapshot(q, (snapshot) => {
      const productArray = [];
      snapshot.forEach((doc) => {
        productArray.push({ ...doc.data(), id: doc.id });
      });
      setProducts(productArray);
    });

    return () => data();
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();

    if (
      product.title == null ||
      product.price == null ||
      product.imageURL == null ||
      product.category == null ||
      product.description == null
    ) {
      alert("All input fields are required");
      return;
    }

    await addDoc(collection(db, "Products"), product);
    window.location.href = "/dashboard";
  };

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "Products", id));
    alert("Product Deleted");
  };

  const editHandle = (item) => {
    setProduct(item);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "Products", product.id), product);
    window.location.href = "/dashboard";
  };

  return (
    <context.Provider
      value={{
        product,
        setProduct,
        addProduct,
        products,
        setProducts,
        deleteProduct,
        updateProduct,
        editHandle,
        searchItem,
        setSearchItem,
        selectCategory,
        setSelectCategory,
        setAddressInfo,
        addressInfo,
        setOrders,
        orders,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
