"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillAudio } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Store",
    path: "/store",
  },
  {
    name: "Login",
    path: "/login",
  }
];
export default function Header():JSX.Element {
  interface Item {
    id: number;
    title: string;
    price:number;
    sexo:string;
    image:string;
    description:string;
   }

interface RootState {
    items: {
       items: Item[];
    };
   }

  const items = useSelector((state: RootState) => state.items.items);
 
    const namepath=usePathname();
   const router=useRouter();

    const cambioCart=()=>{
      router.push('/cart');
    }
   
  return (
    <header className="z-10 w-full fixed bg-slate-950 text-white min-h-2 max-h-[40vh] flex flex-col justify-center gap-5   lg:gap-10 lg:flex-row md:justify-between shadow-xl items-center px-20 py-5 " >
      <div className="font-bold text-3xl w-12 text-green-600 flex gap-2 justify-center underline">
     <section >
     <Avatar alt="Remy Sharp" src="/hand-1076597_1920.jpg" className="cursor-pointer "/>
    
     </section>
        {namepath.length==1?'Home':namepath.split("/")[namepath.length-(namepath.length-1)].toUpperCase()}
      </div>
      <ul className="w-full min-h-4 flex gap-4 justify-center items-center">
        {links.map((item, index) => {
          return (
            <Link key={index} className=" text-xl transition hover:text-yellow-400" href={item.path}>
              {item.name}
            </Link>
          );
        })}
      </ul>
      <div className=" flex rounded-2xl justify-around px-5 items-center border-2 w-[100%] border-yellow-500">
      <input  type="text" placeholder="request" className="w-[90%] py-1 bg-transparent outline-none    md:px-2 "/>
      <section className="  flex   gap-5 ">
      <AiFillAudio className="transition hover:text-slate-500 "/>
      <BsSearch className="transition hover:text-slate-500 "/>

      </section>  
      </div>

      <section className="flex item-center justify-between gap-1 ">
          <article onClick={cambioCart} className="border  p-2  text-white flex justify-between gap-1  border-yellow-500 rounded shadow-xl font-bold cursor-pointer">
            Cart <span className=" text-green-500" >({items.length})</span>
          </article>
      </section>
    
    </header>
    
  );
}
