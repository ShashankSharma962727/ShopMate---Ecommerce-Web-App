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
  const [isDark, setIsDark] = useState(false);
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

  // Add Product
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

    try {
      await addDoc(collection(db, "Products"), product);
      window.location.href = "/dashboard";
    } catch (error) {
      console.log(error);
    }
  };

  // Get Product Data
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

  // Delete Product
  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "Products", id));
      alert("Product Deleted");
    } catch (error) {
      console.log(error);
    }
  };

  // Update Product

  const editHandle = (item) => {
    setProduct(item);
  };

  const updateProduct = async (e) => {
    try {
      e.preventDefault();
      await setDoc(doc(db, "Products", product.id), product);
      window.location.href = "/dashboard";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <context.Provider
      value={{
        isDark,
        setIsDark,
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
