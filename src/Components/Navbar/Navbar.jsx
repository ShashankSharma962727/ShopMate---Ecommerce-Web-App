import { useContext, useEffect, useState } from "react";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";
import { NavLink } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import user from "../../assets/user.jpg";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const { isDark, setIsDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
  const [menu, setMenu] = useState(false);

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

  return (
    <>
      <div
        className={`flex justify-between items-center p-3 shadow-md ${color.background.secondary} ${color.text.secondary}`}
      >
        <h1 className={`font-bold text-lg lg:text-2xl ${color.primary}`}>
          ShopMate
        </h1>

        <div className="hidden lg:flex items-center gap-5 text-lg font-semibold">
          <NavLink to={"/allproducts"}>All Products</NavLink>
          <NavLink to={"/orders"}>Order</NavLink>
          <NavLink to={"/admin"}>Admin</NavLink>
          <span>Logout</span>
          <div className="h-7 w-7 rounded-full overflow-hidden">
            <img src={user} alt="user" />
          </div>
          <button
            onClick={() => {
              setIsDark((prev) => !prev);
            }}
          >
            <FiSun />
          </button>
          <NavLink to={"/cart"} className={`flex items-center gap-1.5`}>
            <FiShoppingCart />0
          </NavLink>
        </div>

        <div className="flex lg:hidden items-center gap-5 text-lg font-semibold">
          <button
            onClick={() => {
              setIsDark((prev) => !prev);
            }}
          >
            <FiSun />
          </button>
          <NavLink to={"/cart"} className={`flex items-center gap-1.5`}>
            <FiShoppingCart />0
          </NavLink>

          <button onClick={handelMenu}>
            <RiMenu3Line />
          </button>
        </div>
      </div>

      {menu && (
        <div
          className={`flex w-full flex-col ${color.background.secondary} items-center shadow-md p-3 fixed`}
        >
          <NavLink to={"/allproducts"}>All Products</NavLink>
          <NavLink to={"/orders"}>Order</NavLink>
          <NavLink to={"/admin"}>Admin</NavLink>
          <div className="h-7 w-7 rounded-full overflow-hidden">
            <img src={user} alt="user" />
          </div>
          <span>Logout</span>
        </div>
      )}
    </>
  );
};

export default Navbar;
