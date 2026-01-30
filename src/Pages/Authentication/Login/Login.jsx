import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../Firebase/Firebase";

export const Login = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginErr, setLoginErr] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.log(error);
      let message = "";

      switch (error.code) {
        case "auth/user-not-found":
          message = "User not found. Please register first.";
          break;

        case "auth/wrong-password":
          message = "Incorrect password.";
          break;

        case "auth/invalid-email":
          message = "Invalid email address.";
          break;

        case "auth/invalid-credential":
          message = "Email or password is incorrect.";
          break;

        default:
          message = "Something went wrong. Please try again.";
      }
      setLoginErr(message);

      setTimeout(() => {
        setLoginErr("")
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfdfc]">
      <form
        onSubmit={login}
        className={`w-60 md:w-80 lg:w-100 bg-gray-200 p-3 rounded-xl shadow-md text-[#020101]`}
      >
        <h2 className={` text-xl lg:text-2xl font-bold text-center mb-6`}>
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-2 py-1 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-2 py-1 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>

        <p className="text-red-500">{loginErr}</p>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-white py-1 lg:py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Login
        </button>

        <p className="text-xs lg:text-sm text-center mt-4 text-gray-600">
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
