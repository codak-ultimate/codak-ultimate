"use client"
import Image from "next/image";
import React from "react";
import info from "../info";
import CardStore from "@/components/cardStore/CardStore";

const Store = () => {
  return (
    <div className="w-[100%] mt-[50vh] md:mt-20 min-h-[100vh] pb-10">
      <ul  className="w-[100%]    min-h-[100vh]  grid md:grid-cols-2 lg:grid-cols-4 gap-1   ">
        {info.map((item, index) => {
          return <CardStore {...info[index]} />;
        })}
      </ul>
    </div>
  );
};

export default Store;
