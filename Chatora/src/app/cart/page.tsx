"use client";
import { useSelector } from "react-redux";
import CardCart from "@/components/cardCart/CardCart";
import { GiMoneyStack } from "react-icons/gi";

interface Item {
  id: number;
  title: string;
  price: number;
  sexo: string;
  image: string;
  description: string;
}

interface RootState {
  items: {
    items: Item[];
  };
}

export default function MiPagina() {
  // Usa el tipo RootState para el estado global
  const items = useSelector((state: RootState) => state.items.items);
  let sum = 0;
  items.map((item, index) => {
    sum += item.price;
  });
  return (
    <div className="mt-[70%] md:mt-[30%] lg:mt-[10%] xl:mt-[10%] w-[100%] gap-10 flex flex-col justify-center items-center min-h-[100vh] text-black ">
      {items.length === 0 ? (
        <li className="list-none text-xl mb-20 border-2  border-gray-500 p-5 rounded-xl">
          The Cart is Empty
        </li>
      ) : (
        items.map((item) => <CardCart key={item.id} {...item} />)
      )}
      <section className="mt-20  text-gray-500 py-5 flex flex-col gap-10 md:flex-row  mb-20 px-10 bg-slate-800 items-center justify-around pl-10 min-h-[10vh]  w-[100%] ">
        <div className="flex justify-center">
          <h1 className="text-center font-bold text-2xl">Total to Pay :</h1>
          <p className="ml-10 font-bold text-3xl text-yellow-500">${sum}.00</p>
        </div>
        <button className="flex justify-center gap-2 items-center bg-gray-500 transition hover:bg-gray-600 text-white rounded font-bold text-xl w-[20%] min-h-[7vh]">
          Pay <GiMoneyStack size={40} className="text-green-400" />
        </button>
      </section>
    </div>
  );
}
