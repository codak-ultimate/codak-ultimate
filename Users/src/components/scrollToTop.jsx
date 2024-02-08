import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
 const [isVisible, setIsVisible] = useState(false);

 // Muestra el botón cuando el usuario se desplaza hacia abajo en la página
 const toggleVisibility = () => {
   if (window.pageYOffset > 300) {
     setIsVisible(true);
   } else {
     setIsVisible(false);
   }
 };

 // Agrega el event listener cuando el componente se monta
 useEffect(() => {
   window.addEventListener('scroll', toggleVisibility);
 }, []);

 // Elimina el event listener cuando el componente se desmonta
 useEffect(() => {
   return () => window.removeEventListener('scroll', toggleVisibility);
 }, []);

 const scrollToTop = () => {
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
 };

 return (
   <div className="mt-[-123%] ml-[-45vw]  mb-10 scroll-to-top bg-green-500 w-[20vw] rounded text-center transition hover:text-white">
     {isVisible && <button onClick={scrollToTop}>Go up</button>}
   </div>
 );
};

export default ScrollToTop;
