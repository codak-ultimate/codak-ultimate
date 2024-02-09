"use client";
import ProductPage from "@/app/store/[id]/page";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaCartPlus } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import info from "@/app/info";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/itemsSlice";
import { Overlay } from "../overlay/Overlay";

export default function CardStore(props: any) {
  const router = useRouter();
  const items = useSelector((state: any) => state.items);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = () => {
     setIsLoading(true);
     setTimeout(() => {
       setIsLoading(false);
     }, 5000); // Cambia esto al tiempo que desees
  };

  
  const handlerClick = () => {
    router.push(`/store/${props.id}`);
  };
  return (
    <li
      key={props.id}
      className=" mt-10 bg-gradient-to-b  from-slate-200 to-slate-100 py-5 flex flex-col items-center pt-2   justify-between gap-1 md:gap-5 rounded-xl overflow-hidden border-2 shadow-xl mx-auto  
        w-[69%]  h-[79%]  md:h-[79vh] md:w-[70%] lg:h-[80%] lg:w-[89%] xl:h-[80%]  "
    >
      <Image
        className="border rounded-xl shadow w-[90%]  h-[60%]"
        key={props.id}
        src={props.image}
        alt="img"
        width={150}
        height={100}
      />
      <div className="  bg-gradient-to-b   from-slate-300 to-slate-100  flex flex-col   md:flex-row   md:items-center  md:justify-around gap-1  w-[100%] mx-2 rounded-xl p-2  shadow">
        <div className="">
          <span className="font-bold ">Name: {props.title}</span>
          <p className="font-bold ">
            Price:{" "}
            <span className="text-green-600  text-xl">${props.price}.00</span>
          </p>
        </div>
        <div className="flex   flex-row  justify-around md:justify-center items-start md:flex-col w-[100%] gap-2  min-h-[100%] ">
          <button
            onClick={() => {
              let obj;
              info.map((item, index) => {
                if (item.id === props.id) {
                  obj = item;
                }
              });
              dispatch(addItem(Object(obj)));
              handleClick()
            }}
            className="hover:bg-slate-900 bg-slate-800 flex  justify-around items-center w-[100%]   rounded-xl text-center  p-2  text-yellow-400"
          >
                  <Overlay isOpen={isLoading} text="Loading..." />

            Add <FaCartPlus size={30} />
          </button>
          <button
            className="transition hover:bg-green-600  flex  justify-around items-center w-[100%]   rounded-xl text-center  p-2  text-white bg-green-500"
            onClick={handlerClick}
          >
            View
            <FaRegEye size={30} />
          </button>
        </div>
      </div>
    </li>
  );
}
