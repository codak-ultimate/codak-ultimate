"use client";
import Link from "next/link";

import "react-toastify/dist/ReactToastify.css";

export default function Register() {

 
  return (
    <div className="mt-[40vh] md:mt-[48vh] lg:mt-[15vh] flex  flex-col  items-center gap-2 md:justify-center h-[100vh] ">
      <article className="text-center md:font-bold text-5xl">Sign in</article>
      <form
        id="forms"
        className="min-w-[60%]  max-w-[70%] border-2 w-[30%] h-[85vh] md:h-[85vh]  rounded-xl py-2 flex flex-col gap-2"
      >
        <label className="flex flex-col items-center gap-2">
          <span className="md:font-semibold text-xl">Email</span>
          <input
            type="email"
            required
            className="border-2 w-[60%] rounded-lg outline-none text-center"
          />
        </label>
        <label className="flex flex-col items-center gap-2">
          <span className="md:font-semibold text-xl">Password</span>
          <input
            type="password"
            required
            className="border-2 w-[60%] rounded-lg outline-none text-center"
          />
        </label>
        <label className="flex flex-col items-center gap-2">
          <span className="md:font-semibold text-xl">Age</span>
          <input
            type="number"
            min={0}
            required
            className="border-2 w-[60%] rounded-lg outline-none text-center"
          />
        </label>
      
        <label className="flex flex-col items-center gap-2">
          <span className="md:font-semibold text-xl text-center ">
            Why do you choose us?{" "}
          </span>
          <textarea className="border-2 w-[60%] h-[20vh] rounded-lg outline-none text-center" />
        </label>
        <section className="mt-1 flex flex-col  items-center pb-5   md:mt-10">
          <div className="flex flex-col gap-2 w-full justify-center   items-center  md:flex-row ">
            <button className="transition hover:bg-blue-600  bg-blue-500 w-[60%] md:w-[40%] min-h-[5vh] rounded-md text-white">
              Sign in
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}
