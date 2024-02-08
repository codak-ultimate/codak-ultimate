export function Footer(){
    return (
        <footer className="flex pt-10">
            <ul className="flex flex-row gap-10 pt-20 md:pt-0 justify-end pr-[10%] pt-5 w-[100%]">
                <li className="transform transition-all duration-300 hover:translate-y-[-10px]">
                   <a href="#" className="text-white">
                       <ion-icon size="large" name="logo-facebook"></ion-icon>
                   </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-y-[-10px]">
                   <a href="#" className="text-white">
                       <ion-icon size="large" name="logo-instagram"></ion-icon>
                   </a>
                </li>
                <li className="transform transition-all duration-300 hover:translate-y-[-10px]">
                   <a href="#" className="text-white">
                       <ion-icon size="large" name="logo-whatsapp"></ion-icon>
                   </a>
                </li>
            </ul>
        </footer>
    )
 }