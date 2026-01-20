import { useContext, useState } from "react";
import { context } from "../../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../../Styles/Colors";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../Firebase/Firebase";

export const Login = () => {
  const { isDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try{
      const user = await signInWithEmailAndPassword(auth, email, password)
      console.log(user);
      alert("Login Successfuly");
      setEmail("");
      setPassword("");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
      onSubmit={login}
        className={`${color.text.secondary} w-full max-w-md bg-white p-8 rounded-xl shadow-md`}
      >
        <h2 className={`${color.primary} text-2xl font-bold text-center mb-6`}>
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4 text-gray-600">
          Don't have an account? 
          <NavLink
            to="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Register
          </NavLink>
        </p>
      </form>
    </div>
  );
};
