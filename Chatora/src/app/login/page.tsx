import Link from "next/link";

import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="mt-[40vh] md:mt-[30vh] lg:mt-[5vh] flex flex-col  items-center gap-5 md:justify-center h-[100vh] ">
      <article className="text-center font-bold text-5xl">Login</article>
      <form
        id="forms"
        className="min-w-[60%] max-w-[60%] border-2 w-[30%] h-[65vh] md:h-[55vh] lg:h-[55vh] xl:h-[55vh] rounded-xl py-2 flex flex-col gap-5"
      >
        <label className="flex flex-col items-center gap-2">
          <span className="font-semibold text-xl">Email</span>
          <input
            type="email"
            required
            className="border-2 w-[60%] rounded-lg outline-none text-center"
          />
        </label>
        <label className="flex flex-col items-center gap-2">
          <span className="font-semibold text-xl">Password</span>
          <input
            type="password"
            required
            className="border-2 w-[60%] rounded-lg outline-none text-center"
          />
        </label>
        <section className="mt-1 flex flex-col  items-center pb-2  gap-5 md:mt-10">
          <div className="flex flex-col gap-2 w-full justify-center items-center  md:flex-row ">
            <button className="transition hover:bg-blue-600 bg-blue-500 w-[60%] md:w-[40%] min-h-[5vh] rounded-md text-white">
              Log In
            </button>
            <button className="transition flex justify-center gap-2 items-center hover:bg-gray-200 bg-gray-100 border-[2px] text-black  w-[60%] md:w-[40%] min-h-[5vh] rounded-md ">
              Sign in with Google <FcGoogle  size={20} className="text-slate-500"/>
            </button>
          </div>

          <Link
            href={"/register"}
            className="text-center text-blue-500 cursor-pointer transition hover:underline"
          >
            Do you haven't an account register Here
          </Link>
        </section>
      </form>
    </div>
  );
}
