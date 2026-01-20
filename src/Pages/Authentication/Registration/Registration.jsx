import { useContext, useState } from "react";
import { context } from "../../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../../Styles/Colors";
import { NavLink } from "react-router";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../../Firebase/Firebase";

export const Registration = () => {
  const { isDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
  const auth = getAuth(app);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    try{
      const users = await createUserWithEmailAndPassword(auth, email, password);
      console.log(users);
      alert("Signup successfuly");
      setEmail("");
      setPassword("");

      const user = {
        name: name,
        email: users.user.email,
        uid: users.user.uid
      }
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form

      onSubmit={signUp}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
