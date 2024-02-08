import { Footer } from "../components/Footer";
import { Header } from "../components/header";
export function About() {
  return (
    <div className="">
      <Header />

      <div className=" mt-[50%] md:mt-[15%]  lg:mt-[5%] shadow-2xl py-5 ">
        <div className="flex flex-col md:flex-row mb-10 justify-center items-center gap-7 px-10 bg-red-600 mt-[-40px]  md:mt-[-90px] py-5 w-[90%] mx-auto rounded-xl">
          <div>
            <img
              loading="lazy"
              className="rounded-[50%] h-60 w-60 shadow-2xl"
              src="/IMG_20240105_134424_807.jpg"
              alt=""
            />
          </div>
          <div className="w-[100%] flex flex-col justify-center items-center md:items-end gap-5">
            <h1 className=" text-white font-bold text-[35px] justify-center flex w-[100%] text-orange-400">
              Site Creator
            </h1>
            <p className="border-1 shadow-2xl p-5 text-semibold text-white text-lg rounded-xl">
              My name is{" "}
              <a href="#" className="underline text-yellow-500 text-2xl">
                Javier Ernesto valladares Alonso
              </a>
              , I work with a web developer, I use the technologies of html,
              css, javascript, sass, tailwind, React and I am the creator of
              this website for the marketing of products offered by Macdonal
            </p>
            <button className="bg-yellow-300 w-60 transition hover:bg-yellow-400 h-10 mt-5 text-black font-bold rounded-2xl text-xl">
              Know Me
            </button>
          </div>
        </div>
        <div className=" bg-red-600 w-[90%] mx-auto p-5 rounded-xl font-bold text-xl text-white shadow-2xl">
          <h1 className="font-bold text-4xl text-center pb-2">
            Company Creator
          </h1>
          I hope this message finds you well. My name is Ray Kroc, the founder
          of McDonald's. I write to express my deepest appreciation for your
          continued loyalty and support over the years. Your patronage has been
          instrumental in our success and growth. Your trust and confidence in
          McDonald's have allowed us to bring our commitment to quality,
          service, and value to millions of customers worldwide. We strive to
          provide a simple, enjoyable dining experience with our beloved
          burgers, fries, and other popular menu items. We are constantly
          evolving and improving based on your feedback and preferences. Our
          goal is to exceed your expectations and make every visit to a
          McDonald's restaurant a memorable one. I would like to take this
          opportunity to thank you for choosing McDonald's as your preferred
          dining destination. Your continued support and encouragement motivate
          us to continue delivering the best possible experience. Once again,
          thank you for being part of the McDonald's family. We look forward to
          serving you in the future. Best Regards, Ray Kroc Founder, McDonald's
          Corporation
        </div>
        <Footer />
      </div>
    </div>
  );
}
