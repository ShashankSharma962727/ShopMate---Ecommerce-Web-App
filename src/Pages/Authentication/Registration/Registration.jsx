import { useContext } from "react";
import { context } from "../../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../../Styles/Colors";
import { NavLink } from "react-router";

export const Registration = () => {
  const { isDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className={`${color.text.secondary} w-full max-w-md bg-white p-8 rounded-xl shadow-md`}
      >
        <h2 className={`${color.primary} text-2xl font-bold text-center mb-6`}>
          Create Account
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Register
        </button>
        
        <p className="text-sm text-center mt-4 text-gray-600">
          Already registered?{" "}
          <NavLink
            to={"/login"}
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};
