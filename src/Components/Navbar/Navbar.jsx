import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { RiMenu3Line } from "react-icons/ri";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const cartItem = useSelector((state) => state.cart);

  const handelMenu = () => {
    setMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1152) {
        setMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logout = () => {
    localStorage.clear("user");
    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-between items-center py-3 px-5 md:px-20 bg-[#fdfdfc] text-[#020101]">
        <h1 className="font-extrabold text-lg lg:text-2xl text-[#020101]">
          SHOPMATE
        </h1>

        <div className="hidden lg:flex items-center gap-5 text-lg font-semibold">
          <NavLink to="/" className="text-[#020101] hover:text-yellow-500">HOME</NavLink>
          <NavLink to="/allproducts" className="text-[#020101] hover:text-yellow-500">PRODUCTS</NavLink>

          {user?.user?.email !== "shashanksharma962727@gmail.com" ? (
            <NavLink to="/orders" className="text-[#020101] hover:text-yellow-500">{user ? "" : ""}</NavLink>
          ) : ""}

          {user?.user?.email === "shashanksharma962727@gmail.com" ? (
            <NavLink to="/dashboard" className="text-[#020101] hover:text-yellow-500">ADMIN</NavLink>
          ) : ""}

          <NavLink to="/cart" className="flex items-center gap-1.5 text-[#020101] hover:text-yellow-500">
            <FiShoppingCart /> {cartItem?.length || 0}
          </NavLink>

          <NavLink onClick={logout} className="text-yellow-900 bg-yellow-300 py-1 px-3 rounded-lg hover:bg-yellow-400">
            {user ? "LOGOUT" : "LOGIN"}
          </NavLink>
        </div>

        <div className="flex lg:hidden items-center gap-5 text-lg font-semibold">

          <NavLink to="/cart" className="flex items-center gap-1.5 text-[#020101] hover:text-yellow-500">
            <FiShoppingCart /> {cartItem?.length || 0}
          </NavLink>

          <button onClick={handelMenu} className="text-[#020101] hover:text-yellow-500">
            <RiMenu3Line />
          </button>
        </div>
      </div>

      {menu && (
        <div className="flex w-full flex-col items-center shadow-md p-3 fixed bg-yellow-200 font-semibold z-11">
          <NavLink to="/" className="text-[#020101] hover:text-yellow-500">HOME</NavLink>
          <NavLink to="/allproducts" className="text-[#020101] hover:text-yellow-500">PRODUCTS</NavLink>

          {user?.user?.email !== "shashanksharma962727@gmail.com" ? (
            <NavLink to="/orders" className="text-[#020101] hover:text-yellow-500">{user ? "ORDERS" : ""}</NavLink>
          ) : ""}

          {user?.user?.email === "shashanksharma962727@gmail.com" ? (
            <NavLink to="/dashboard" className="text-[#020101] hover:text-yellow-500">ADMIN</NavLink>
          ) : ""}

          <NavLink 
          className="text-[#020101] hover:text-yellow-500 bg-yellow-400 px-2 rounded-lg"
          onClick={logout} >
            {user ? "LOGOUT" : "LOGIN"}
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
