import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Cart from "./Pages/Cart/Cart";
import Order from "./Pages/Orders/Order";
import NoPage from "./Pages/NoPage/NoPage";
import Admin from "./Pages/Admin/Admin";
import ContextProvider from "./Context/ContextProvider";
import { Registration } from "./Pages/Authentication/Registration/Registration";
import { Login } from "./Pages/Authentication/Login/Login";
import { ProductInfo } from "./Pages/ProductInfo/ProductInfo";
import AddProduct from "./Components/AddUpdateProduct/AddProduct";
import UpdateProduct from "./Components/AddUpdateProduct/UpdateProduct";

// Protected Route for users
const ProtectedRouteUser = ({ children }) => {
  const user = localStorage.getItem("user");

  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// Protected Route for Admin
const ProtectedRouteAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user?.user?.email === "shashanksharma962727@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/allproducts",
    element: <AllProducts />,
  },
  {
    path: "/cart",
    element: <ProtectedRouteUser>
        <Cart />
      </ProtectedRouteUser>,
  },
  {
    path: "/orders",
    element: (
      <ProtectedRouteUser>
        <Order />
      </ProtectedRouteUser>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRouteAdmin>
        <Admin />
      </ProtectedRouteAdmin>
    ),
  },
  {
    path: "/signup",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/productinfo/:id",
    element: <ProductInfo />,
  },
  {
    path: "/addproduct",
    element: <ProtectedRouteAdmin>
      <AddProduct />
    </ProtectedRouteAdmin>,
  },
  {
    path: "/updateproduct",
    element: <UpdateProduct />,
  },
  {
    path: "/*",
    element: <NoPage />,
  },
]);

const App = () => {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
};

export default App;
