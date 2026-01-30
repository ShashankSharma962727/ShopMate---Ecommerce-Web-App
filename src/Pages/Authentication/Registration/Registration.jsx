import { useContext, useState } from "react";
import { NavLink } from "react-router";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../../Firebase/Firebase";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 


export const db = getFirestore(app);

export const Registration = () => {
  const auth = getAuth(app);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    try{
      const users = await createUserWithEmailAndPassword(auth, email, password);
      setName("");
      setEmail("");
      setPassword("");

      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        email: users.user.email,
        uid: users.user.uid
      });
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfdfc]">
      <form

      onSubmit={signUp}
        className={`w-60 sm:w-80 lg:w-100 bg-gray-200 p-3 rounded-xl shadow-md text-[#020101]`}
      >
        <h2 className={`text-xl lg:text-2xl font-bold text-center mb-6`}>
          Create Account
        </h2>

        <div className="mb-4">
          <label className="block text-sm lg:text-base font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-2 py-1 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>

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

        <div className="mb-4">
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

        <button
          type="submit"
          className="w-full bg-yellow-400 text-white py-1 lg:py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Register
        </button>
        
        <p className="text-xs lg:text-sm text-center mt-4 text-gray-600">
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
