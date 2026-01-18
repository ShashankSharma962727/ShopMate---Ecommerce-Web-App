import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home/Home";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Cart from "./Pages/Cart/Cart";
import Order from "./Pages/Orders/Order";
import NoPage from "./Pages/NoPage/NoPage";
import Admin from "./Pages/Admin/Admin";
import ContextProvider from "./Context/ContextProvider";

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
    element: <Cart />,
  },
  {
    path: "/orders",
    element: <Order />,
  },
  {
    path: "/admin",
    element: <Admin />,
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
