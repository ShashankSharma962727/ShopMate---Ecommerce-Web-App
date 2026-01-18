import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";

const Layout = ({ children }) => {

  const {isDark, setIsDark} = useContext(context)
  const color = isDark ? darkTheme : lightTheme;

  return (
    <div className={`w-full min-h-screen ${color.background.main}`}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
