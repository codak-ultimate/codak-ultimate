import { useState, useEffect } from "react";
import  Home  from "./components/Home";
import  Login  from "./components/Login";
import appFirebase from "./authorization";
import "./App.css";
import {getAuth,onAuthStateChanged} from 'firebase/auth'


const auth=getAuth(appFirebase);
function App() {
  const notify = () => toast("¡Usted no esta registrado,primero cree una cuenta!");

  const [usuario,setUsuario]=useState(null);
  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if(usuarioFirebase){
         setUsuario(usuarioFirebase)
    }else{
      setUsuario(null);
    }
  })
  return (
    <>
     <div>
       {usuario?<Home correoUsuario={usuario.email}/>:<Login/>}
     </div>
    </>
  );
}

export default App;
