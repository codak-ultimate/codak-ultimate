import { Link } from "react-router-dom";
export function Header() {
   const imagen="https://i.pinimg.com/236x/04/1b/77/041b77602ad09df67713c2ca167cd13e.jpg"
    return (
    <nav className="h-[50vh] p-10  gap-10 flex items-center md:flex-row md:justify-between md:items-start flex-col">
<div >
     <img src={imagen} loading="lazy" alt="imagen de macdonalds" className="w-[150px] h-[150]  rounded-[50%] shadow-2xl"/>
</div>
<ul className="flex justify-end gap-10 ">
      <Link
        to="/"
        className="text-white font-bold text-xl transition  hover:text-yellow-400  "
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-white font-bold text-xl transition  hover:text-yellow-400"
      >
        About
      </Link>
      <Link
        to="/services"
        className="text-white font-bold text-xl transition  hover:text-yellow-400"
      >
        Services
      </Link>
    </ul>
    </nav>
  );
}
