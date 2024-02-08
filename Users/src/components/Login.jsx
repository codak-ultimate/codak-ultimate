import { useState } from "react";
import appFirebase from "../authorization";
import {
 getAuth,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
} from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(appFirebase);

const Login = () => {
 const [registro, setRegistro] = useState(false);

 const handleSubmit = async (e) => {
 e.preventDefault();
 const email = e.target.email.value;
 const password = e.target.password.value;
 if (password.length < 6) {
  toast.error("La contraseña debe tener al menos 6 caracteres.", {
    position: "top-right",
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return;
 }
 try {
  if (registro) {
    await createUserWithEmailAndPassword(auth, email, password);
  } else {
    await signInWithEmailAndPassword(auth, email, password);
  }
 } catch (error) {
  switch (error.code) {
    case "auth/invalid-email":
      toast.error("Correo electrónico inválido.", {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    case "auth/wrong-password":
      toast.error("Contraseña incorrecta.", {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    case "auth/user-not-found":
      toast.error("No se encontró el usuario.", {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      break;
    default:
      toast.error("Ha ocurrido un error.", {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }
 }
 };

 return (
  <div className="flex flex-col md:flex-row w-[100vw] h-[100vh] justify-center items-center gap-5 px-10" >
    <div className=" w-[80%] flex-col border border rounded-xl py-5 px-5">
      <div className="mt-1 ">
        <h1 className="text-center font-bold text-3xl">
          {registro ? "Regístrate" : "Inicia sesión"}
        </h1>
      </div>
      <div className=" flex flex-col items-center mt-5 ">
        <form className="flex-col flex gap-5 " onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
            <label>Email Address</label>
            <input
              type="email"
              id="email"
              required
              placeholder="email"
              className="border outline-none rounded text-center w-[100%] "
            />
          </div>
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
            <label>Password</label>
            <input
              type="password"
              id="password"
              required
              placeholder="password"
              className="outline-none border rounded text-center w-[100%]"
            />
          </div>
          <button className="bg-blue-500 rounded text-white py-2 transition hover:bg-blue-600">
            {registro ? "Regístrate" : "Inicia sesión"}
          </button>
        </form>
        <button
          className="text-black rounded text-black py-2 transition hover:text-blue-600 mt-5 w-[100%] px-1"
          onClick={() => {
            setRegistro(!registro);
          }}
        >
          {registro
            ? "ya tienes una cuenta ? inicia sesión"
            : "no tienes una ,regístrate"}
        </button>
      </div>
      <div></div>
    </div>
    <ToastContainer />
  </div>
 );
};

export default Login;
