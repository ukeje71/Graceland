import { FacebookIcon } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

const CreateAcc = () => {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className=" bg-[#008f96] w-full max-w-md p-6 rounded-xl shadow-2xl overflow-auto max-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          Create Account
        </h1>
        <form className="text-white text-base space-y-4">
          <fieldset className="flex flex-col">
            <label htmlFor="firstname" className="text-lg  font-extrabold">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="First Name"
              value={Fname}
              onChange={(e) => setFname(e.target.value)}
              className="outline-none border-2 rounded-lg p-2"
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="lastname" className="text-lg  font-extrabold">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Last Name"
              value={Lname}
              onChange={(e) => setLname(e.target.value)}
              className="outline-none border-2 rounded-lg p-2"
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="email" className="text-lg  font-extrabold">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none border-2 rounded-lg p-2"
            />
          </fieldset>

          <fieldset className="flex flex-col">
            <label htmlFor="password" className="text-lg  font-extrabold">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none border-2 rounded-lg p-2"
            />
          </fieldset>

          <button
            type="submit"
            className="mt-4 w-full p-3 rounded-xl bg-[#fff] text-black font-semibold  shadow-md"
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

        <Link to={"/Login"}>
          <p className="pt-6 text-center text-black underline text-sm">
            Already have an account? Sign in
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CreateAcc;
//bg-gradient-to-br from-[#71d4d4] via-[#3b7679] to-[#b5e0e3]
