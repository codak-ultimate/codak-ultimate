import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-slate-950 py-2 flex flex-col md:flex-row gap-5 px-2 justify-around items-center ">
      <p className="text-center text-white">
        © 2024 - Todos los derechos reservados
      </p>
      <ul className="flex gap-10">
        <li className="">
          <FaFacebookSquare size={30} className="text-white cursor-pointer" />
        </li>
        <li className="">
          <FaWhatsapp size={30} className="text-white cursor-pointer" />
        </li>
        <li className="">
          <FaInstagram size={30} className="text-white cursor-pointer" />
        </li>
        <li>
          <FaLinkedin size={30} className="text-white cursor-pointer" />
        </li>
      </ul>

    </footer>
  );
}
