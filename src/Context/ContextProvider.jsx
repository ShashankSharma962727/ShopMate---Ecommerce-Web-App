import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  updateDoc,
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
      alert("Product Added");
      window.location.href = "/dashboard"
    } catch (error) {
      console.log(error);
    }
  };

  // Get Product Data
  useEffect(() => {
    const q = query(
      collection(db, "Products"),
      orderBy("time", "desc")
    );

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
    try{
      await deleteDoc(doc(db, "Products", id));
      alert("Product Deleted");
    }
    catch(error){
      console.log(error);
    }
  }
  
  // Update Product
  const updateproduct = async (id) => {
    try{
      const doc = await doc(db, "Products", id);
      await updateDoc(doc, product);
    }
    catch(error){
      console.log(error);
    }
  }
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
        updateproduct
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
