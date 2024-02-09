"use client";

import { removeItem } from "@/redux/itemsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CardCart(props: any) {
  const items = useSelector((state: any) => state.items);
  const dispatch = useDispatch();
 

  return (
    <section className="shadow-xl px-10 flex justify-around items-center gap-2 py-5 w-[90%] min-h-[10vh] border-2 rounded-xl">
      
      <img src={props.image} alt="imagen" className="w-[100px] h-[100px]" />
      <div>{props.title}</div>
      <div className="text-green-500 font-bold text-xl">${props.price}.00</div>
      <button
        className="font-bold text-3xl transition  text-center items-centers rounded-[50%] hover:text-red-500 cursor-pointer"
        onClick={() => {
          dispatch(removeItem(props.id))
        }}
      >
        x
      </button>
    </section>
  );
}
