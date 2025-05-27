import { FacebookIcon } from "lucide-react";
import { Link } from "react-router";

const CreateAcc = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-gradient-to-br from-[#f0fdfd] via-[#dff5f6] to-[#b5e0e3] w-120 p-15 h-160 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-center mt-5 text-black">
          Create Account
        </h1>
        <form action="#" className="text-black text-xl">
          <fieldset className="flex flex-col gap-4">
            <label htmlFor="username" className="text-2xl mt-8">
              Username
            </label>
            <input
              type="text"
              placeholder="Username Or Email"
              id="username"
              className="outline-none border-2 rounded-lg p-2"
            />
          </fieldset>
          <fieldset className="flex flex-col gap-4">
            <label htmlFor="username" className="text-2xl mt-8">
              Password
            </label>
            <input
              type="Password"
              placeholder="Password"
              id="Password"
              className="outline-none border-2 rounded-lg p-2"
            />
          </fieldset>
          <button className="btns mt-10 w-full p-3 rounded-2xl bg-[#008f96] text-white m-[0 auto]">
            Submit
          </button>
        </form>
        <div className="  flex flex-row justify-center mt-10 gap-20">
          <span className="  flex gap-1.5 items-center shadow-md p-4 rounded-2xl w-60">
            <p className=" font-extrabold text-2xl">G</p>
            <p>Google</p>
          </span>
          <span className="flex gap-1.5  items-center shadow-md p-4 rounded-2xl w-60">
            <FacebookIcon />
            <p>Facebook</p>
          </span>
        </div>
        <Link to={"/Login"}>
          <p className="pt-6 text-center decoration-blue-400 underline text-blue-500">
            Already have an account ? Sign up
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CreateAcc;
