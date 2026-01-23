import { useContext, useEffect, useState } from "react";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";
import { NavLink, useNavigate } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import userimg from "../../assets/user.jpg";
import { RiMenu3Line } from "react-icons/ri";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isDark, setIsDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
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
  }

  return (
    <>
      <div
        className={`flex justify-between items-center p-3 shadow-md ${color.background.secondary} ${color.text.secondary}`}
      >
        <h1 className={`font-bold text-lg lg:text-2xl ${color.primary}`}>
          ShopMate
        </h1>

        <div className="hidden lg:flex items-center gap-5 text-lg font-semibold">
          <NavLink to={"/"} className={`${color.text.hover}`}>Home</NavLink>
          <NavLink to={"/allproducts"} className={`${color.text.hover}`}>All Products</NavLink>
          {
            user?.user?.email !== "shashanksharma962727@gmail.com" ? <NavLink to={"/orders"} className={`${color.text.hover}`}>Order</NavLink> : ""
          }
          {
            user?.user?.email === "shashanksharma962727@gmail.com" ? <NavLink to={"/dashboard"} className={`${color.text.hover}`}>Admin</NavLink> : ""
          }
          <NavLink onClick={logout} className={`${color.text.hover}`}>Logout</NavLink>
          <div className="h-7 w-7 rounded-full overflow-hidden">
            <img src={userimg} alt="user" />
          </div>
          <button
            onClick={() => {
              setIsDark((prev) => !prev);
            }}
          >
            <FiSun />
          </button>
          <NavLink to={"/cart"} className={`flex items-center gap-1.5 ${color.text.hover}`}>
            <FiShoppingCart />{cartItem?.length || 0}
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
            <FiShoppingCart />{cartItem?.length || 0}
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
          {
            user?.user?.email !== "shashanksharma962727@gmail.com" ? <NavLink to={"/orders"}>Order</NavLink> : ""
          }
          {
            user?.user?.email === "shashanksharma962727@gmail.com" ? <NavLink to={"/dashboard"}>Admin</NavLink> : ""
          }
          <div className="h-7 w-7 rounded-full overflow-hidden">
            <img src={userimg} alt="user" />
          </div>
          <NavLink onClick={logout} className={`${color.text.hover}`}>Logout</NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
