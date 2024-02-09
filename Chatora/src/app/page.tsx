"use client";
import CardStore from "@/components/cardStore/CardStore";
import info from "../app/info";
import Image from "next/image";
import { FaPowerOff } from "react-icons/fa";
import { GiStrong } from "react-icons/gi";
import { FaSalesforce } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react';

const data = [
  { id: 1, image: "/hand-1076597_1920.jpg", text: "Maximizing your economic potential" },
  { id: 2, image: "/istockphoto-1345105817-1024x1024.jpg", text: "Economics: Your ally for growth" },
  { id: 3, image: "/istockphoto-1369227756-1024x1024.jpg", text: "Creating value through economy" },

  // ... más objetos
];

const data_mobile=[
  'Sale','Business','Economy','Money','Investing','Strong','Trust','Increase','Sale','Business','Economy','Money','Investing','Strong','Trust','Increase','Sale','Business','Economy','Money','Investing','Strong','Trust','Increase'
]

export default function Home() {
 

 
  return (
    <main className=" mt-[28vh]  md:mt-[30vh] lg:mt-[10vh] xl-[15vh] flex flex-col md:flex-row md:items-start gap-10">
      <div className="w-[100%]  ">
        <div className="flex  w-[100%] pt-20 pb-5">
          <Carousel showStatus={false}  autoPlay infiniteLoop showThumbs={false} className=" flex justify-center w-[100%]">
            {data.map((item) => (
              <div key={item.id} className="flex w-[100%]  flex-col md:flex-row justify-center gap-10 px-10 md:px-[20%] items-center">
                <img src={item.image} className="w-[10vw] rounded h-[60vh]" alt="" />
                <p className="text-center  text-5xl text-green-600 ">{item.text}</p>
              </div>
            ))}
          </Carousel>
        </div>
        <section className="flex flex-col">
          <section className="text-center text-gray-400 p-5 bg-slate-900 mt-20 text-5xl w-[90%] mx-auto rounded  min-h-20 flex justify-center items-center ">
            Today's offer
          </section>
          <ul className="w-[100%] my-5 gap-5 mt-[1%]  px-10  min-h-[60vh]  flex justify-around flex-col md:flex-row  ">
            {info.slice(3, 6).map((item, index) => {
              return <CardStore {...info[index + 3]} />;
            })}
          </ul>
        </section>
        <div className="overflow-x-hidden flex-col items-center gap-2 w-[100%] bg-slate-950 mt-20">
          {" "}
          <ul className="w-[100%]  text-green-500 font-bold text-3xl flex items-center gap-20  justify-center bg-slate-950 min-h-20  animate-infinite-scroll-ri">
         {data_mobile.map((item)=>{
          return (<li>{item}</li>)
         })}
          </ul>
          <ul className="w-[100%]  text-gray-400 font-bold text-3xl flex items-center gap-20  justify-center bg-slate-950 min-h-20  animate-infinite-scroll">
          {data_mobile.map((item)=>{
          return (<li>{item}</li>)
         })}
          </ul>
        </div>

        <div className="my-20 text-xl flex flex-col md:flex-row justify-around mx-10 gap-10 ">
          <article className="flex flex-col items-center gap-10">
            <h2>
              <GiStrong size={100} className="text-slate-500" />
            </h2>
            <p>
              {" "}
              "While there’s nothing like an original black GitHub hoodie, these
              new pullover hoodies are an instant classic. Featuring
              tone-on-tone embroidered Invertocats on the chest and wrist, these
              understated hoodies will have you looking so fresh and so clean
              (and so warm!).",
            </p>
          </article>
          <article className="flex flex-col items-center gap-10">
            <h2>
              <FaPowerOff size={100} className="text-red-500" />
            </h2>
            <p>
              {" "}
              "While there’s nothing like an original black GitHub hoodie, these
              new pullover hoodies are an instant classic. Featuring
              tone-on-tone embroidered Invertocats on the chest and wrist, these
              understated hoodies will have you looking so fresh and so clean
              (and so warm!).",
            </p>
          </article>
          <article className="flex flex-col items-center gap-10">
            <h2>
              <FaSalesforce size={100} className="text-blue-500" />
            </h2>
            <p>
              {" "}
              "While there’s nothing like an original black GitHub hoodie, these
              new pullover hoodies are an instant classic. Featuring
              tone-on-tone embroidered Invertocats on the chest and wrist, these
              understated hoodies will have you looking so fresh and so clean
              (and so warm!).",
            </p>
          </article>
          <article className="flex flex-col items-center gap-10">
            <h2>
              <FaCoins size={100} className="text-orange-500" />
            </h2>
            <p>
              {" "}
              "While there’s nothing like an original black GitHub hoodie, these
              new pullover hoodies are an instant classic. Featuring
              tone-on-tone embroidered Invertocats on the chest and wrist, these
              understated hoodies will have you looking so fresh and so clean
              (and so warm!).",
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
