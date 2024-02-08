import { Header } from "../components/header";
import { Footer } from "../components/Footer";
export function Home() {
  return (
    <div className="">
      <Header />

      <div className="px-[10%] mt-[25%] sm:mt-[12%] md:mt-[0%]">
        <div className="flex flex-col md:flex-row gap-5 w-[100%]">
          <div className="flex flex-col pt-10">
            <h1 className="text-yellow-400 font-bold text-5xl pb-5">
              I love it
            </h1>
            <p className="text-white font-semibold text-2xl w-[70%]">
              Guys, we're here to change the landscape of fast food. Our new
              product is a revolution, and we need to present it in a way that
              makes it irresistible to our customers.
            </p>
            <a
              href="#"
              className="border mt-5 border-yellow-500 transition  hover:text-yellow-500 bg-red-800 w-20  w-[80%]   sm:w-[60%] h-10 pt-1.5  rounded-xl text-center text-white font-bold text-xl"
            >
              Order{" "}
            </a>
          </div>
          <div>
            <img
              src="/5882486ce81acb96424ffaae (2).png"
              loading="lazy"
              className="w-[100%] h-[100%]"
              alt="imagen de productos de macdonalds"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
