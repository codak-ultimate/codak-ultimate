"use client";
import { useSelector, useDispatch } from "react-redux";
import info from "@/app/info";
import { usePathname } from "next/navigation";
import { addItem } from "@/redux/itemsSlice";
import { useState } from "react";
import { Overlay } from "@/components/overlay/Overlay";

export default function ProductPage(props: any) {
  const items = useSelector((state: any) => state.items);
  const dispatch = useDispatch();
  const path = usePathname().split("/");
  const [isLoading, setIsLoading] = useState(false);

  let obj = {};
  info.map((item, index) => {
    if (Number(path[Number(path.length - 1)]) == index) {
      obj = item;
      console.log(obj);
    }
  });

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Cambia esto al tiempo que desees
  };
  return (
    <>
      <div
        key={Object(obj).id}
        className=" mt-[50vh]  md:mt-[0vh]  mb-[10%]  w-full min-h-[100vh] flex  md:flex-row justify-center items-center"
      >
        <section className="  gap-5 w-[100%] min-h-[60vh] flex flex-col md:flex-row  justify-around items-center rounded">
          <img
            alt="image"
            src={Object(obj).image}
            className="transform animate-float w-[80%] md:w-[30%] min-h-[40%]"
          />
          <div className="shadow-xl border-2 rounded-xl pb-5  w-[90%] md:w-[50%] min-h-[50vh]  flex flex-col jutify-center items-start px-5 md:px-10 pt-10">
            <h3 className="text-center font-bold text-xl ">
              {Object(obj).title}
            </h3>
            <h2 className="font-bold text-xl text-center">
              {" "}
              Price:{" "}
              <span className="text-green-500">${Object(obj).price}</span>
            </h2>
            <p className="mt-10 text-center">{Object(obj).description}</p>
            <section className="w-[100%] mt-[5vh]">
              <button
                onClick={() => {
                  dispatch(addItem(Object(obj)));
                  handleClick();
                }}
                className="w-[100%] md:w-[90%] hover:bg-slate-900  bg-slate-800  rounded-xl text-center  p-2  text-yellow-400"
              >
                Add
                <Overlay isOpen={isLoading} text="Loading..."/>
              </button>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
