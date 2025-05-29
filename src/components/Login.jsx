import { signInWithEmailAndPassword } from "firebase/auth";
import { FacebookIcon } from "lucide-react";
import React, { useState } from "react";
import { auth } from "./Firebase";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Successfully Logged In");
      toast.success("Successfully Logged In", {
        position: "top-center",
      });
      window.location.href="/courses"
    } catch (error) {
      console.log(error.message);
      toast.error("An error occured from your end");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="bg-[#008f96] w-full max-w-md p-6 rounded-xl shadow-lg overflow-auto max-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          Log In
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-white text-base"
        >
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="username" className="text-lg  font-extrabold">
              Username
            </label>
            <input
              required
              type="email"
              id="username"
              placeholder="Username or Email"
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none border-2 rounded-lg p-2"
            />
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <label htmlFor="password" className="text-lg  font-extrabold">
              Password
            </label>
            <input
              required
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none border-2 rounded-lg p-2"
            />
          </fieldset>

          <button
            type="submit"
            className="w-full p-3 rounded-xl bg-[#fff] text-black font-semibold  transition"
          >
            Submit
          </button>
        </form>

        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-4">
          <button className="flex justify-center items-center gap-3 shadow-md p-3 rounded-xl w-full sm:w-60 bg-white">
            <span className="font-extrabold text-3xl text-[#3b5998]">G</span>
            <span className="text-black font-medium"> Google</span>
          </button>

          <button className="flex justify-center items-center gap-3 shadow-md p-3 rounded-xl w-full sm:w-60 bg-white">
            <FacebookIcon size={30} className="text-[#3b5998] " />
            <span className="text-black font-medium"> Facebook</span>
          </button>
        </div>

        <Link to="/create">
          <p className="pt-6 text-center text-white-600 underline text-sm">
            Don’t have an account? Sign up
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
